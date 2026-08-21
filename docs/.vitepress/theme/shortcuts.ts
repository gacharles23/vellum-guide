export interface Shortcut {
  action: string
  mac: string
  windows: string
}

export interface SupplementItem {
  label: string
  value: string
}

export interface Supplement {
  title?: string
  paragraphs?: string[]
  items?: SupplementItem[]
  example?: string
}

export interface ShortcutSection {
  title: string
  introduction?: string
  shortcuts: Shortcut[]
  supplements?: Supplement[]
}

export const shortcutIntroduction =
  'A reference for Vellum keyboard shortcuts. Cmd means Command on macOS; use Ctrl on Windows and Linux where shown.'

export const shortcutSections: ShortcutSection[] = [
  {
    title: 'Ergonomics',
    shortcuts: [
      { action: 'Toggle the right sidebar', mac: 'Shift + Cmd + \\', windows: 'Shift + Ctrl + \\' },
      { action: 'Toggle the left sidebar', mac: 'Cmd + \\', windows: 'Ctrl + \\' },
      { action: 'Go back in history', mac: 'Cmd + [', windows: 'Ctrl + [' },
      { action: 'Go forward in history', mac: 'Cmd + ]', windows: 'Ctrl + ]' },
      { action: 'Toggle Zen mode', mac: 'Cmd + .', windows: 'Ctrl + .' },
    ],
  },
  {
    title: 'Node management',
    shortcuts: [
      { action: 'Duplicate a node above or below', mac: 'Shift + Option + ↑ / ↓', windows: 'Shift + Alt + ↑ / ↓' },
      { action: 'Move the current node', mac: 'Shift + Cmd + ↑ / ↓', windows: 'Shift + Ctrl + ↑ / ↓' },
      { action: 'Select multiple nodes', mac: 'Shift + ↑ / ↓', windows: 'Shift + ↑ / ↓' },
      { action: 'Select text, then expand the selection', mac: 'Cmd + A', windows: 'Ctrl + A' },
      { action: 'Copy the current node when nothing is selected', mac: 'Cmd + C', windows: 'Ctrl + C' },
      { action: 'Delete the current node', mac: 'Cmd + Shift + Backspace', windows: 'Ctrl + Shift + Backspace' },
      { action: "Add a checkbox, or open a document's page", mac: 'Cmd + Enter', windows: 'Ctrl + Enter' },
      { action: 'Expand or collapse a node', mac: 'Cmd + ↑ / ↓', windows: 'Ctrl + ↑ / ↓' },
      { action: 'Expand or collapse all nodes', mac: 'Ctrl + Cmd + ↑ / ↓', windows: 'Ctrl + Alt + ↑ / ↓' },
      { action: 'Zoom into or out of a node', mac: 'Shift + Cmd + . / ,', windows: 'Shift + Ctrl + . / ,' },
      { action: 'Search the current outline', mac: 'Cmd + F', windows: 'Ctrl + F' },
      { action: 'Create a node at the bottom of the page', mac: 'Shift + Cmd + Enter', windows: 'Shift + Ctrl + Enter' },
    ],
    supplements: [
      {
        title: 'Node-management tips',
        items: [
          { label: 'Selection', value: 'Press the select all shortcut repeatedly to expand your selection: text in the node, the whole node, its siblings and descendants, then progressively higher levels.' },
          { label: 'Checkboxes', value: 'Type [] followed by a space at the start of a node to add a checkbox without using the shortcut.' },
          { label: 'Outline search', value: 'Outline search includes folded nodes. From outline search, press Cmd + Enter to extend the search globally through the search palette.' },
          { label: 'Delete node', value: 'Works also when inside a node, on the title.' },
        ],
      },
    ],
  },
  {
    title: 'Search',
    shortcuts: [
      { action: 'Open the search palette', mac: 'Cmd + P', windows: 'Ctrl + P' },
      { action: 'Next search result', mac: 'Cmd + G', windows: 'Ctrl + G' },
      { action: 'Previous search result', mac: 'Cmd + Shift + G', windows: 'Ctrl + Shift + G' },
      { action: 'Cycle search-palette sorting options', mac: 'Cmd + S', windows: 'Ctrl + S' },
      { action: 'Show letter navigation in the search palette', mac: 'Option', windows: 'Alt' },
      { action: 'Open a search result in the sidebar', mac: 'Shift + Enter', windows: 'Shift + Enter' },
    ],
    supplements: [
      {
        paragraphs: ['Before you type in the search palette, it shows Recents, Marks, and Pinned pages. Pressing the palette shortcut followed by Enter returns you to your most recent location.'],
      },
      {
        title: 'Search syntax cheat sheet',
        items: [
          { label: 'Find words', value: 'project notes' },
          { label: 'Find an exact phrase', value: '"project notes"' },
          { label: 'Exclude a word', value: 'project -archive' },
          { label: 'Filter by tag, including inherited tags', value: '#tagname' },
          { label: 'Search by date', value: 'Natural-language dates' },
          { label: 'Find a nested item', value: 'gift list > computer > motherboard' },
          { label: 'Use a page or tag as context', value: '@place' },
        ],
        paragraphs: ['Use > with a space on both sides to find content inside a node; chain it to search deeper. Type @ to select a context as a pill, then search within it, find links to it, or find unlinked mentions. Context also works with tags.'],
      },
      {
        title: 'Create a node from search',
        paragraphs: [
          'You can create a node from the search palette with a name, tag, and context—for example:',
          'Press Enter to create it and place the cursor in its title; press Enter again to begin its first bullet. When you type @, you can create the node at the current location with Cmd + Enter, or create it and add it to the sidebar with Shift + Cmd + Enter.',
        ],
        example: "I'm a new note @library #draft",
      },
    ],
  },
  {
    title: 'Commands and dates',
    shortcuts: [
      { action: 'Open the command palette', mac: 'Cmd + K', windows: 'Ctrl + K' },
      { action: 'Open the date picker', mac: 'Shift + Cmd + D', windows: 'Shift + Ctrl + D' },
      { action: 'Go to today\'s page', mac: 'Cmd + D', windows: 'Ctrl + D' },
    ],
    supplements: [
      { paragraphs: ["In the date picker, press a to go to the daily-notes node and t to open today's node."] },
    ],
  },
  {
    title: 'Keyboard movement',
    shortcuts: [
      { action: 'Center the current node on screen', mac: 'Cmd + J', windows: 'Ctrl + J' },
      { action: 'Open the Letters Overlay', mac: 'Ctrl + S', windows: 'Ctrl + S' },
      { action: 'Enter Select Mode', mac: 'Esc', windows: 'Esc' },
      { action: 'Go to the top of the page, in Select Mode', mac: 't', windows: 't' },
      { action: 'Go to the bottom of the page, in Select Mode', mac: 'b', windows: 'b' },
      { action: 'Go back, in Select Mode', mac: "'", windows: "'" },
    ],
    supplements: [
      {
        paragraphs: [
          'The Letters Overlay assigns letters to visible lines and paragraphs. Type a search term, then type a displayed letter to move the cursor to that location.',
          "To use t, b, and ', first leave editing by pressing Esc. Going back is useful for temporarily jumping to the top of a page: press Esc, then t; press ' to return to where you were working.",
        ],
      },
    ],
  },
  {
    title: 'Marks',
    introduction: 'Vellum has up to four mark slots. Marks can point to nodes on a page or to entire pages, making it quick to move between important locations.',
    shortcuts: [
      { action: 'Add or remove a mark (slots 1–4)', mac: 'Shift + Ctrl + 1–4', windows: 'Shift + Ctrl + 1–4' },
      { action: 'Go to a mark (slots 1–4)', mac: 'Ctrl + 1–4', windows: 'Ctrl + 1–4' },
    ],
    supplements: [{ paragraphs: ['You can reorder marks in the search palette.'] }],
  },
  {
    title: 'Document search',
    shortcuts: [
      { action: 'Search within the current document', mac: 'Cmd + F', windows: 'Ctrl + F' },
    ],
    supplements: [
      { paragraphs: ['If text is selected, document search can prefill and highlight that text. Use Cmd + G / Ctrl + G and their Shift variants to move through occurrences.'] },
    ],
  },
  {
    title: 'Text styling',
    shortcuts: [
      { action: 'Italic', mac: 'Cmd + I', windows: 'Ctrl + I' },
      { action: 'Bold', mac: 'Cmd + B', windows: 'Ctrl + B' },
    ],
  },
]

export function shortcutSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function shortcutId(sectionTitle: string, action: string): string {
  return `shortcut-${shortcutSlug(sectionTitle)}-${shortcutSlug(action)}`
}

const searchableKeyNames: Record<string, string> = {
  '\\': 'backslash',
  '[': 'left bracket',
  ']': 'right bracket',
  '.': 'period dot',
  ',': 'comma',
  '/': 'slash',
  "'": 'apostrophe quote',
  '↑': 'arrow up',
  '↓': 'arrow down',
  '–': 'through to',
}

export function shortcutSearchText(shortcut: Shortcut): string {
  const displayed = `${shortcut.mac} ${shortcut.windows}`
  const aliases = Object.entries(searchableKeyNames)
    .filter(([symbol]) => displayed.includes(symbol))
    .map(([, words]) => words)

  return `${displayed} ${displayed.replaceAll('Cmd', 'Command').replaceAll('Ctrl', 'Control')} ${aliases.join(' ')}`
}

const recordedKeyAliases: Record<string, string> = {
  'arrow down': '↓',
  'arrow up': '↑',
  'apostrophe': "'",
  'backslash': '\\',
  'comma': ',',
  'esc': 'escape',
  'left bracket': '[',
  'period': '.',
  'right bracket': ']',
  'slash': '/',
}

const modifierOrder = ['shift', 'ctrl', 'control', 'alt', 'option', 'cmd', 'command', 'meta']

function normalizeChord(parts: string[]): string {
  const normalized = parts.map((part) => {
    const key = part.trim().toLowerCase()
    return recordedKeyAliases[key] ?? key
  })
  const modifiers = normalized
    .filter((part) => modifierOrder.includes(part))
    .sort((a, b) => modifierOrder.indexOf(a) - modifierOrder.indexOf(b))
    .map((part) => part === 'control' ? 'ctrl' : part === 'command' ? 'cmd' : part)
  const keys = normalized.filter((part) => !modifierOrder.includes(part))

  return [...modifiers, ...keys].join('+')
}

function shortcutChords(value: string): string[] {
  const parts = value.split(' + ')
  const key = parts.pop() ?? ''
  let keys = key.split(/\s+\/\s+/)
  const range = /^(\d)–(\d)$/.exec(key)

  if (range) {
    keys = Array.from(
      { length: Number(range[2]) - Number(range[1]) + 1 },
      (_, index) => String(Number(range[1]) + index),
    )
  }

  return keys.map((candidate) => normalizeChord([...parts, candidate]))
}

export function shortcutMatches(recorded: string, shortcut: Shortcut): boolean {
  const chord = normalizeChord(recorded.split(' + '))
  return [...shortcutChords(shortcut.mac), ...shortcutChords(shortcut.windows)].includes(chord)
}

function addLine(lines: string[], depth: number, text: string) {
  lines.push(`${'\t'.repeat(depth)}- ${text}`)
}

export function toVellumMarkdown(): string {
  const lines: string[] = []
  addLine(lines, 0, 'Vellum Keyboard Shortcuts')

  for (const section of shortcutSections) {
    addLine(lines, 1, `**${section.title}**`)
    if (section.introduction) addLine(lines, 2, section.introduction)

    for (const shortcut of section.shortcuts) {
      addLine(lines, 2, shortcut.action)
      addLine(lines, 3, `macOS: ${shortcut.mac}`)
      addLine(lines, 3, `Windows / Linux: ${shortcut.windows}`)
    }

    for (const supplement of section.supplements ?? []) {
      const depth = 2
      if (supplement.title) addLine(lines, depth, supplement.title)
      const contentDepth = supplement.title ? depth + 1 : depth

      for (const paragraph of supplement.paragraphs ?? []) addLine(lines, contentDepth, paragraph)
      for (const item of supplement.items ?? []) {
        addLine(lines, contentDepth, item.label)
        addLine(lines, contentDepth + 1, item.value)
      }
      if (supplement.example) addLine(lines, contentDepth, `Example: ${supplement.example}`)
    }
  }

  return `${lines.join('\n')}\n`
}
