<script setup>
import { ref } from 'vue'

const releases = [
  {
    version: '0.1.33', date: '18 August 2026', title: 'Field path querying',
    highlights: [
      'Search rules can follow fields into referenced notes—for example, tasks whose project belongs to a goal, or books whose author’s country is Japan.',
      'Self-referencing fields can optionally travel “as far as it goes,” safely following chains up to 20 steps.',
      'Broken paths are identified clearly and match nothing instead of returning potentially incorrect data.'
    ]
  },
  {
    version: '0.1.32', date: '18 August 2026', title: 'Saved-search fields and narrower references',
    highlights: [
      'Saved search is now a dedicated field type and can populate results automatically from a tag schema.',
      'Reference fields gained a “Narrow to” option powered by saved searches.',
      'Fields can now point back to their own tag, enabling relationships such as “Blocked by” for tasks and “Parent project” for projects.'
    ]
  },
  {
    version: '0.1.31', date: '17 August 2026', title: 'Deeper, contextual references',
    highlights: [
      'Reference fields can be expanded inline to inspect properties, with up to two levels of drilling.',
      'Saved searches can be selected or created as reference-field targets, then expanded into live, editable results.',
      'Reference choices can be shaped by a saved search and narrowed by values from the current note.',
      'The same contextual saved search can return different live results depending on the note where it appears.'
    ],
    more: [
      'Multiple references in one field can be expanded independently.',
      'Inline expansion shows properties, not child nodes; table-cell references still open in the main area or sidebar.',
      'Existing selections are never removed when a narrowing rule changes.'
    ]
  },
  {
    version: '0.1.30', date: '14 August 2026', title: 'Fields and node-view quick fixes',
    highlights: [
      'Fixed scrolling glitches caused by inline tables in long notes.',
      'Columns can be removed without zooming into the node view.',
      'Independent fields may share a name with tag-owned fields.'
    ]
  },
  {
    version: '0.1.29', date: '13 August 2026', title: 'Fields++ and node views',
    highlights: [
      'Select fields are searchable and extensible in place; the new multi-select field supports several values.',
      'Every node can have a searchable description, created with Shift–Enter.',
      'Fields can now exist vault-wide instead of belonging to a tag, and can be reused across notes.',
      'Any node can show its children as a list, table, cards, checklist, or board with grouping, sorting, and filters.'
    ],
    more: [
      'Same-named fields show their origin, while the picker searches existing fields before creating a new one.',
      'Fields work on nodes, documents, and tagged or linked paragraphs.',
      'Live queries can filter on any field, whether it belongs to a tag or not.',
      'Boards grouped by a multi-select show a card in each matching lane; dragging is disabled because a drop would be ambiguous.'
    ]
  },
  {
    version: '0.1.28', date: '11 August 2026', title: 'Code-block hotfix',
    highlights: [
      'Fixed three-backtick entry on keyboard layouts where backtick is an accent key.',
      'Expanded the code-block language list from 8 to 35 and sorted it alphabetically.'
    ]
  },
  {
    version: '0.1.27', date: '11 August 2026', title: 'Code blocks in the outliner',
    highlights: [
      'Outline nodes now support code blocks with syntax highlighting, language memory, automatic indentation and brackets, copying, titles, and folding.',
      'Fixed macOS word-picker interference in Vellum dialogs and several prose Markdown rendering issues.',
      'Addressed a Windows error that could appear while scrolling through long notes.'
    ]
  },
  {
    version: '0.1.26', date: '10 August 2026', title: 'Freeze prevention',
    highlights: [
      'Closed a timing hole believed to cause rare interface freezes.',
      'Added screen-update monitoring so a recurrence should self-heal after a brief pause instead of ending the session.'
    ]
  },
  {
    version: '0.1.25', date: '9 August 2026', title: 'Faster search, creation, and navigation',
    highlights: [
      'Cmd–P creation is always available, supports highlighted destinations and dates, and can create in the main pane or sidebar.',
      'Library, Daily Notes, and tags can be turned into search-scope pills.',
      'Shift–Cmd–Enter creates an entry at the bottom of the current page.',
      'When not editing, t, b, and apostrophe jump to the top, bottom, and previous position.'
    ],
    more: [
      'Search jumps place the cursor sensibly depending on whether a note has content.',
      'Selected tags can create notes already wearing that tag.',
      'Fixed Alt-based jump keys on Windows, tag-row visibility, spacing, and several result-list details.'
    ]
  },
  {
    version: '0.1.24', date: '7 August 2026', title: 'A new global search',
    highlights: [
      'Cmd–P now searches titles, nodes, documents, AI messages, tags, dates, and note text with ranked, grouped results.',
      'A preview pane shows context and matches; quoted phrases, exclusions, tags, dates, ancestors, and scoped @ searches are supported.',
      'Searches can create notes with tags and destinations, open results in the sidebar, or hand off to the sidebar search panel.',
      'Introduced four keyboard-accessible marks plus letter overlays for mouse-free jumping in previews and pages.'
    ],
    more: [
      'Recent, pinned, and marked pages appear before typing, and Cmd–S switches to newest-first ordering.',
      'Outline Cmd–F finds folded nodes and restores the previous fold state afterward.',
      'Escape restores the cursor exactly, while Shift–Enter opens a result as a sidebar card.',
      'Fixed intermittent scrollbar flicker in Windows prose documents.'
    ]
  },
  {
    version: '0.1.23', date: '5 August 2026', title: 'Markdown links and spell-checking',
    highlights: [
      'Typing [[ over selected text can turn it into a note link; pasted text also opens the note picker.',
      'Added Markdown URL links with paste-to-link, hover previews, editing, typed-syntax conversion, and search discovery.',
      'Enabled spell-checking on macOS and Linux.'
    ]
  },
  {
    version: '0.1.22', date: '4 August 2026', title: 'Defaults, shortcuts, and a vault upgrade',
    highlights: [
      'Added Cmd–D to jump to today and per-tag default saved views.',
      'Path segments in tag pages and live queries now scroll to, flash, and focus their result.',
      'Improved zoomed-title editing, Daily Notes sidebar opening, Linux multi-select outdenting, and dialog focus styles.',
      'Upgraded the internal vault format with an automatic pre-upgrade backup; older Vellum versions cannot open upgraded vaults.'
    ]
  },
  {
    version: '0.1.21', date: '1 August 2026', title: 'Capture from Telegram',
    highlights: [
      'Vellum can receive text, images, and voice recordings from a paired Telegram bot.',
      'Captured messages can include #tags and @locations and default to today.',
      'Messages wait at Telegram for up to a day while Vellum is closed; a thumbs-up confirms successful capture.'
    ]
  },
  {
    version: '0.1.20', date: '31 July 2026', title: 'Screen-freeze hotfix',
    highlights: ['Fixed a case where the app could stop responding after moving between pages. Notes were never at risk.']
  },
  {
    version: '0.1.19', date: '31 July 2026', title: 'Create and move notes anywhere',
    highlights: [
      'New [[ links can specify tags and a destination inline, including new tags and daily notes.',
      'Cmd–K can move any node anywhere in the graph.',
      'Linking to an existing note can add a tag to it.',
      'Reference-based fields can create new, automatically tagged notes during data entry.'
    ]
  },
  {
    version: '0.1.18', date: '30 July 2026', title: 'Better transclusions and tag identity',
    highlights: [
      'Visually identical accented tag names now count as the same tag, with a warning for existing duplicates.',
      'Transcluded nodes can be reordered by drag, including automatic scrolling.',
      'Cmd-click and Cmd-up/down expand and collapse inline links; Shift-click opens them in the sidebar.',
      'Removing tags, clicking checkboxes, and folding children now preserve the cursor.'
    ]
  },
  {
    version: '0.1.17', date: '29 July 2026', title: 'Cursor preservation',
    highlights: [
      'Kept the cursor stable through deleting, keeping, moving, dragging, cutting, undoing, commands, and sidebar navigation.',
      'Fixed undo navigation and cursor placement in outline nodes and prose documents.',
      'Inline tags now accept accented and non-Latin characters.',
      'Fixed an export case where tags could be omitted near similarly accented words.'
    ]
  },
  {
    version: '0.1.16', date: '29 July 2026', title: 'Transclusion and wrapped-line fixes',
    highlights: [
      'Clicking an expanded link now places the cursor on the first try.',
      'New prose beneath an expanded link stays beneath it instead of jumping around the page.',
      'Clicking the end of a wrapped line now places the cursor where expected in outlines and prose.'
    ]
  },
  {
    version: '0.1.15', date: '29 July 2026', title: 'Editing refinements',
    highlights: [
      'Cut, copy, and undo now act on the field value being edited.',
      'Fixed selection operations that could affect the wrong bullet.',
      'Cmd–Enter cycles checkbox states, and new live queries open directly in the source picker.',
      'Opening a tag-page filter now cleanly releases the previously edited row.'
    ]
  },
  {
    version: '0.1.14', date: '28 July 2026', title: 'Folding, views, and natural dates',
    highlights: [
      'Cmd–Up folds the current node in one press while preserving the fold state inside it.',
      'Saved tag views switch without delay.',
      'Natural-language dates in the [[ menu are prioritized and show their full date.',
      'Opening a note places a ready cursor on its first node.'
    ]
  },
  {
    version: '0.1.13', date: '28 July 2026', title: 'Page width and outline navigation',
    highlights: [
      'Choose normal, wide, or full page width in Settings.',
      'Fixed several selection, copying, inline-code, and link-bracket edge cases.',
      'Added progressive node folding, expand/collapse-all shortcuts, and node zoom shortcuts.',
      'Outlines gained bottom breathing room and Cmd–J to lift the current line.'
    ],
    more: [
      'Date chips follow the selected date format, and subtag counts reveal their sources.',
      'The cursor can move between the page title and first bullet using arrow keys.',
      'Backspace now works consistently at position zero of empty bullets.'
    ]
  },
  {
    version: '0.1.12', date: '27 July 2026', title: 'Richer tag pages and query filters',
    highlights: [
      'Tag pages gained manual ordering, inline editing, board dragging, and creation of notes already wearing the tag.',
      'Live queries can filter by fields, checkbox state, and archived status.',
      'Breadcrumb segments are clickable everywhere.',
      'Moving notes and filtering pages now preserve the editing flow more reliably.'
    ],
    more: [
      'Sidebar Tasks and Projects links can be configured and no longer open the wrong page.',
      'Archived notes are excluded from queries by default.',
      'Checkbox rows now follow familiar checklist behavior for Enter and Backspace.'
    ]
  },
  {
    version: '0.1.11', date: '24 July 2026', title: 'Performance and automatic backups',
    highlights: [
      'Introduced reference indexing and on-screen row rendering for better performance.',
      'Added previous/next day arrows and improved several outline and date-field details.',
      'Markdown exports can refresh automatically on a chosen schedule while Vellum is running.'
    ]
  },
  {
    version: '0.1.10', date: '23 July 2026', title: 'Duplicate-field crash fix',
    highlights: [
      'Fixed a critical crash caused by two fields with the same name on one note.',
      'Daily Notes now sorts correctly and can expand or collapse all entries.'
    ]
  },
  {
    version: '0.1.9', date: '22 July 2026', title: 'Links, paragraphs, and dark mode',
    highlights: [
      'Fixed Enter after double-bracket links and several date-picker behaviors.',
      'Tagged paragraphs no longer appear as “untitled,” and their children remain reachable after removing the tag.',
      'Improved native dark mode on macOS and Windows.'
    ]
  },
  {
    version: '0.1.8', date: '22 July 2026', title: 'Breadcrumbs and interface polish',
    highlights: [
      'Query-result breadcrumbs moved beneath titles and handle deep paths more gracefully.',
      'Improved keyboard focus, long confirmation dialogs, tag spacing, narrow tag schemas, and Library search.',
      'Fixed customizable When options, Today’s Tasks height, and accidental access to tag definitions.',
      'Typing a #tag no longer leaves an extra space behind.'
    ]
  },
  {
    version: '0.1.7', date: '21 July 2026', title: 'Live Queries, phase 2',
    highlights: [
      'Query results became editable across outline, checklist, table, card, and board views, including fields and child nodes.',
      'Results now include tagged prose paragraphs and provide richer document glimpses and highlighted matches.',
      'Rows and board cards can be manually reordered by drag.',
      'Queries can be collapsed, mirrored, or transcluded elsewhere as live read-only results.'
    ]
  },
  {
    version: '0.1.6', date: '20 July 2026', title: 'Natural date entry and tag renaming',
    highlights: [
      'The rebuilt date editor accepts plain-language dates, respects the chosen date format, and stays on screen.',
      'Tags can be renamed from their page, with conflict detection and undo support.'
    ]
  },
  {
    version: '0.1.5', date: '20 July 2026', title: 'Quicker creation and sidebar opening',
    highlights: [
      'Added “Add item” controls to note pages and sidebar cards.',
      'Cmd–K can open the current row or page in the sidebar.',
      'Fixed Backspace navigation, narrow-title overlap, and keyboard shortcuts on non-US layouts.',
      'Added Courier and system Code Mono prose fonts.'
    ]
  },
  {
    version: '0.1.4', date: '19 July 2026', title: 'Card title fix',
    highlights: ['Fixed card titles spilling outside their boxes in the Library and on tag pages in some environments.']
  },
  {
    version: '0.1.3', date: '19 July 2026', title: 'Cleaner link deletion',
    highlights: ['Backspacing over a link now removes it in one step without leaving its internal link ID behind.']
  }
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
