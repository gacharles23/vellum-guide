<script setup>
import { nextTick, ref } from 'vue'
import { releases } from './changelog'

const expandedVersions = ref(new Set(releases.slice(1).map((release) => release.version)))
const selectedVersion = ref('')

function isExpanded(version) {
  return expandedVersions.value.has(version)
}

function toggleRelease(version) {
  const next = new Set(expandedVersions.value)

  if (next.has(version)) next.delete(version)
  else next.add(version)

  expandedVersions.value = next
}

function ensureExpanded(version) {
  if (version === releases[0].version) return

  const next = new Set(expandedVersions.value)
  next.add(version)
  expandedVersions.value = next
}

async function goToRelease(event) {
  const version = event.target.value
  if (!version) return

  ensureExpanded(version)
  await nextTick()

  const target = document.getElementById(`v${version}`)
  if (!target) return

  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#v${version}`)
  selectedVersion.value = ''
}
</script>

<template>
  <div class="vg-changelog" aria-label="Vellum release timeline">
    <div class="vg-release-picker">
      <label class="vg-release-picker-label" for="vg-release-select">Find a release</label>
      <div class="vg-release-picker-control">
        <select
          id="vg-release-select"
          class="vg-release-select"
          :value="selectedVersion"
          @change="goToRelease"
        >
          <option disabled value="">Jump to version…</option>
          <option
            v-for="(release, index) in releases"
            :key="release.version"
            :value="release.version"
          >
            v{{ release.version }} — {{ release.date }}{{ index === 0 ? ' (latest)' : '' }}
          </option>
        </select>
      </div>
    </div>

    <article class="vg-latest-release">
      <div class="vg-latest-badge">Latest release</div>
      <div class="vg-latest-meta">
        <a :href="`#v${releases[0].version}`">v{{ releases[0].version }}</a>
        <time>{{ releases[0].date }}</time>
      </div>
      <h2 :id="`v${releases[0].version}`">{{ releases[0].title }}</h2>
      <ul>
        <li v-for="item in releases[0].highlights" :key="item">{{ item }}</li>
      </ul>
    </article>

    <div class="vg-release-list" aria-label="Previous releases">
      <article
        v-for="release in releases.slice(1)"
        :key="release.version"
        class="vg-release"
        :class="{ 'is-collapsed': !isExpanded(release.version) }"
      >
        <button
          class="vg-release-toggle"
          type="button"
          :aria-expanded="isExpanded(release.version)"
          :aria-controls="`release-${release.version}-details`"
          :aria-label="`${isExpanded(release.version) ? 'Collapse' : 'Expand'} Vellum ${release.version}`"
          @click="toggleRelease(release.version)"
        />
        <header class="vg-release-header">
          <h2 :id="`v${release.version}`" class="vg-release-version">
            <a
              class="vg-release-version-link"
              :href="`#v${release.version}`"
              :aria-label="`Permalink to Vellum ${release.version}`"
            >v{{ release.version }}</a>
          </h2>
          <time class="vg-release-date">{{ release.date }}</time>
        </header>
        <div
          v-show="isExpanded(release.version)"
          :id="`release-${release.version}-details`"
          class="vg-release-body"
        >
          <h3 class="vg-release-title">{{ release.title }}</h3>
          <ul>
            <li v-for="item in release.highlights" :key="item">{{ item }}</li>
          </ul>
          <details v-if="release.more" class="vg-release-more">
            <summary>More in this release</summary>
            <ul>
              <li v-for="item in release.more" :key="item">{{ item }}</li>
            </ul>
          </details>
        </div>
      </article>
    </div>
  </div>
</template>
