<script setup>
import { ref } from 'vue'

const releases = [
  {
    version: '0.1.35', date: '20 August 2026', title: 'a handful of QOL stuff',
    highlights: [
      'support customized Collection names',
      'delete node shortcut (cmd/ctrl-shift-backspace). works on node titles as well.',
      'file uploads: cmd-k > Upload a file. Drops wherever your cursor is (or creates a new node if no cursor)',
      'saved searches can now show up in search results (when they match the rules)',
      'fix: a rule that starts with "as far as it goes" no longer counts the note itself. NB: this also means a search like "Parent project as far as it goes, then Goal is X" now lists only the projects under the one that has the goal. if you also want the project that names the goal directly, add a second rule group saying goal is X',
      'fix: pages now scroll again while a filter popup is open',
      'fix: links to notes with code in the title now display properly'
    ]
  },
  {
    version: '0.1.34', date: '19 August 2026', title: 'a bit more love to date-based querying',
    highlights: [
      'proper date with range value options',
      '“this note\'s ...” referencing (the note that shows this search in one of its fields)',
      'date verbs like before, after, on or before, on or after',
      'rolling date rules (e.g. “Due this week”, “Birthdays this week”, “Due before today”)',
      'natural language in values like “the next 12 days” or “within 7 days of this note\'s Start date”',
      'proper date-based sorting',
      'support for year and no year, making date fields birthday-friendly',
      'change your week start day in Settings > Appearance'
    ],
    more: [
      'Before this release, date querying required manually typing dates into the value field and offered only limited verbs.',
      'Phrases from the dropdown menu—this week, the next 7 days, today, and so on—roll with the calendar.',
      'A typed specific day like “next friday” or “24 july” is stored as that exact day.',
      'Dates can now be captured with or without a year. When a birth year exists, the birthday can still appear every year.',
      'The new “Your week starts on” setting defaults to your computer’s region and affects the calendar picker and all week-based date queries.'
    ]
  },
  {
    version: '0.1.33', date: '18 August 2026', title: 'field path querying',
    highlights: [
      'this is something @ag has been quietly working on for awhile: field path querying. search rules can now follow a field into other notes. a rule used to look at just one field on the note being searched. now it can keep going.',
      'sample use-cases: all tasks that roll up to a goal; tasks whose project\'s Owner is me; projects whose goal\'s Status is Paused; tasks assigned to my reports\' reports; books whose Author\'s Country is Japan; places whose Country\'s Region is Europe; recipes whose Ingredients\' Season is Spring.',
      'where a field points at its own kind (a project\'s Parent project, a task\'s Blocked by), an “as far as it goes” switch lets the search climb the chain. loops are harmless, and the climb stops at 20 steps.'
    ],
    more: [
      'nothing to set up: no marks on fields, no new field types. just build your search query and each step offers only the fields that tag actually carries, plus any fields you placed by hand.',
      'if you delete a field that a rule walks through, the rule calls out where it breaks, matching nothing rather than showing incorrect data. the search page and any note showing it will tell you why.'
    ]
  },
]

const expandedVersions = ref(new Set(releases.slice(1).map((release) => release.version)))

function isExpanded(version) {
  return expandedVersions.value.has(version)
}

function toggleRelease(version) {
  const next = new Set(expandedVersions.value)

  if (next.has(version)) next.delete(version)
  else next.add(version)

  expandedVersions.value = next
}
</script>

<template>
  <div class="vg-changelog" aria-label="Vellum release timeline">
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
          <a class="vg-release-version-link" :href="`#v${release.version}`" :aria-label="`Permalink to Vellum ${release.version}`">v{{ release.version }}</a>
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
