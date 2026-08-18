<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import {
  shortcutId,
  shortcutIntroduction,
  shortcutMatches,
  shortcutSections,
  shortcutSlug,
  toVellumMarkdown,
} from '../shortcuts'

const recordedShortcut = ref('')
const recording = ref(false)
const matchingIds = ref<string[]>([])
const resultMessage = ref('')
const copyMessage = ref('')
let copyMessageTimer: ReturnType<typeof setTimeout> | undefined

const keyNames: Record<string, string> = {
  ArrowDown: 'Arrow Down',
  ArrowLeft: 'Arrow Left',
  ArrowRight: 'Arrow Right',
  ArrowUp: 'Arrow Up',
  Backslash: 'Backslash',
  BracketLeft: 'Left Bracket',
  BracketRight: 'Right Bracket',
  Comma: 'Comma',
  Enter: 'Enter',
  Escape: 'Esc',
  Period: 'Period',
  Quote: 'Apostrophe',
  Slash: 'Slash',
  Space: 'Space',
}

function isMac() {
  return /Mac|iPhone|iPad|iPod/.test(navigator.platform)
}

function formatShortcut(event: KeyboardEvent): string {
  const parts: string[] = []
  if (event.shiftKey) parts.push('Shift')
  if (event.ctrlKey) parts.push('Ctrl')
  if (event.altKey) parts.push(isMac() ? 'Option' : 'Alt')
  if (event.metaKey) parts.push(isMac() ? 'Cmd' : 'Meta')

  if (!['Alt', 'Control', 'Meta', 'Shift'].includes(event.key)) {
    const key = event.code.startsWith('Digit')
      ? event.code.slice('Digit'.length)
      : keyNames[event.code] ?? (event.key.length === 1 ? event.key.toUpperCase() : event.key)
    parts.push(key)
  }

  return parts.join(' + ')
}

function startRecording() {
  recordedShortcut.value = ''
  matchingIds.value = []
  resultMessage.value = 'Press the shortcut you want to find.'
  recording.value = true
}

async function copyShortcuts() {
  try {
    await navigator.clipboard.writeText(toVellumMarkdown())
    copyMessage.value = 'Copied Markdown to the clipboard.'
  } catch {
    copyMessage.value = 'Could not copy the Markdown.'
  }

  if (copyMessageTimer) clearTimeout(copyMessageTimer)
  copyMessageTimer = setTimeout(() => {
    copyMessage.value = ''
  }, 3000)
}

async function findShortcut(shortcut: string) {
  recordedShortcut.value = shortcut
  recording.value = false
  matchingIds.value = shortcutSections.flatMap((section) =>
    section.shortcuts
      .filter((item) => shortcutMatches(shortcut, item))
      .map((item) => shortcutId(section.title, item.action)),
  )

  if (!matchingIds.value.length) {
    resultMessage.value = 'No matching shortcut found.'
    return
  }

  resultMessage.value = matchingIds.value.length === 1
    ? '1 matching shortcut found.'
    : `${matchingIds.value.length} matching shortcuts found.`

  await nextTick()
  const firstMatch = document.getElementById(matchingIds.value[0])
  firstMatch?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  firstMatch?.focus({ preventScroll: true })
}

function handleKeyDown(event: KeyboardEvent) {
  if (!recording.value) return

  event.preventDefault()
  event.stopImmediatePropagation()
  const shortcut = formatShortcut(event)
  if (shortcut) recordedShortcut.value = shortcut

  if (!['Alt', 'Control', 'Meta', 'Shift'].includes(event.key)) {
    void findShortcut(shortcut)
  }
}

function handleKeyUp(event: KeyboardEvent) {
  if (!recording.value || !['Alt', 'Control', 'Meta', 'Shift'].includes(event.key)) return

  event.preventDefault()
  event.stopImmediatePropagation()
  if (recordedShortcut.value) void findShortcut(recordedShortcut.value)
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown, true)
  window.addEventListener('keyup', handleKeyUp, true)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown, true)
  window.removeEventListener('keyup', handleKeyUp, true)
  if (copyMessageTimer) clearTimeout(copyMessageTimer)
})
</script>

<template>
  <p>{{ shortcutIntroduction }}</p>

  <div class="shortcut-tools">
    <div class="shortcut-finder">
      <button class="shortcut-record-button" type="button" :aria-pressed="recording" @click="startRecording">
        {{ recording ? 'Listening…' : recordedShortcut ? 'Record another shortcut' : 'Record a shortcut' }}
      </button>
      <div class="shortcut-finder-content">
        <span v-if="!recording && !recordedShortcut && !resultMessage" class="shortcut-finder-help">
          Press the button to record a shortcut.
        </span>
        <kbd v-if="recordedShortcut" class="shortcut-recorded">{{ recordedShortcut }}</kbd>
        <p
          class="shortcut-finder-status"
          :class="{ 'is-hidden': !resultMessage }"
          aria-live="polite"
        >
          {{ resultMessage || 'Press the shortcut you want to find.' }}
        </p>
      </div>
    </div>

    <div class="shortcut-copy-action">
      <button class="shortcut-copy-button" type="button" @click="copyShortcuts">
        Copy as Markdown
      </button>
      <p class="shortcut-copy-status" aria-live="polite">
        <span :class="{ 'is-hidden': Boolean(copyMessage) }">
          Copy the shortcuts and paste them into your Vellum workspace to query them directly.
        </span>
        <span :class="{ 'is-hidden': !copyMessage }">{{ copyMessage || 'Copied Markdown to the clipboard.' }}</span>
      </p>
    </div>
  </div>

  <section v-for="section in shortcutSections" :key="section.title">
    <h2 :id="shortcutSlug(section.title)" tabindex="-1">
      {{ section.title }}
      <a
        class="header-anchor"
        :href="`#${shortcutSlug(section.title)}`"
        :aria-label="`Permalink to ${section.title}`"
      >​</a>
    </h2>

    <p v-if="section.introduction">{{ section.introduction }}</p>

    <table>
      <thead>
        <tr>
          <th>Action</th>
          <th>macOS</th>
          <th>Windows / Linux</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="shortcut in section.shortcuts"
          :id="shortcutId(section.title, shortcut.action)"
          :key="shortcut.action"
          :class="['shortcut-row', { 'is-shortcut-match': matchingIds.includes(shortcutId(section.title, shortcut.action)) }]"
          tabindex="-1"
        >
          <td>{{ shortcut.action }}</td>
          <td><code>{{ shortcut.mac }}</code></td>
          <td><code>{{ shortcut.windows }}</code></td>
        </tr>
      </tbody>
    </table>

    <template v-for="(supplement, index) in section.supplements" :key="index">
      <h3 v-if="supplement.title" :id="shortcutSlug(supplement.title)" tabindex="-1">
        {{ supplement.title }}
        <a
          class="header-anchor"
          :href="`#${shortcutSlug(supplement.title)}`"
          :aria-label="`Permalink to ${supplement.title}`"
        >​</a>
      </h3>
      <template v-if="supplement.example">
        <p v-if="supplement.paragraphs?.[0]">{{ supplement.paragraphs[0] }}</p>
        <pre><code>{{ supplement.example }}</code></pre>
        <p v-for="paragraph in supplement.paragraphs?.slice(1)" :key="paragraph">{{ paragraph }}</p>
      </template>
      <p v-else v-for="paragraph in supplement.paragraphs" :key="paragraph">{{ paragraph }}</p>

      <table v-if="supplement.items && supplement.title === 'Search syntax cheat sheet'">
        <thead>
          <tr><th>To…</th><th>Use</th></tr>
        </thead>
        <tbody>
          <tr v-for="item in supplement.items" :key="item.label">
            <td>{{ item.label }}</td>
            <td><code>{{ item.value }}</code></td>
          </tr>
        </tbody>
      </table>

      <ul v-else-if="supplement.items">
        <li v-for="item in supplement.items" :key="item.label">
          <strong>{{ item.label }}:</strong> {{ item.value }}
        </li>
      </ul>

    </template>
  </section>
</template>
