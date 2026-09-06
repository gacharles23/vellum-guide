export interface ChangelogImage {
  src: string
  alt: string
  caption?: string
}

export type ChangelogItem = string | { text: string, href: string }

export interface ChangelogSection {
  title: string
  href?: string
  items: ChangelogItem[]
  images?: ChangelogImage[]
}

export interface ChangelogLinks {
  discordPost?: string
  betaAnnouncement?: string
}

export interface ChangelogRelease {
  version: string
  date: string
  title: string
  highlights?: ChangelogItem[]
  sections?: ChangelogSection[]
  images?: ChangelogImage[]
  links?: ChangelogLinks
  more?: string[]
}

export const releases: ChangelogRelease[] = [
  {
    version: '0.2.3', date: '29 August 2026', title: 'hotfix release',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1543442619923824731',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1543442772596629514'
    },
    highlights: [
      'fixed: JSON import failing on big exports with lots of attachments',
      'fixed: JSON import refusing files where a calendar page is also linked from a note',
      'deleting folded notes now warns you first and names exactly what would be removed'
    ]
  },
  {
    version: '0.2.2', date: '29 August 2026', title: 'richer dates, safer imports, multiple vaults, and a sidebar you control',
    links: {
      discordPost: 'https://discord.com/channels/1518609452712988703/1533185269623164938/1543288867954622495',
      betaAnnouncement: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1543289053200392212'
    },
    sections: [
      {
        title: 'Date and time',
        href: '/guides/fields#date-and-time',
        items: [
          'date fields can now capture a time',
          'enter just a year, a month and year, or a full date',
          'sorting and grouping work across all supported date formats',
          'times can include a location, such as “2pm London”. Vellum saves the location, but does not use it yet—that will come in a future release'
        ],
        images: [
          {
            src: '/images/changelog/0.2.2/date-time.webp',
            alt: 'A Vellum date field set to September 1, 2026 at 2:00 pm',
            caption: 'Date fields can now capture a date and time together.'
          }
        ]
      },
      {
        title: 'Import',
        href: '/guides/import',
        items: [
          'import a Markdown folder or JSON workspace',
          'review a summary before importing so you know exactly what will happen',
          'undo an import immediately or at any point later'
        ]
      },
      {
        title: 'Multiple vaults',
        href: '/guides/vaults#multiple-vaults',
        items: [
          'use unlimited, independent vaults—handy for separating work and personal notes',
          'open multiple vaults at once, each in its own window',
          'choose which vault receives a Markdown folder or JSON workspace when importing'
        ],
        images: [
          {
            src: '/images/changelog/0.2.2/multi-vault.webp',
            alt: 'The New vault dialog with options to start fresh, copy the current vault, or restore a backup',
            caption: 'Create a fresh vault, copy one, or restore from a backup.'
          }
        ]
      },
      {
        title: 'Areas: Collections redux',
        href: '/guides/interface#areas',
        items: [
          'Collections are no longer shown in the sidebar',
          'customize the sidebar with your own sections, called Areas',
          'put any combination of tags, nodes, and documents in an Area',
          'rename, rearrange, and remove Areas whenever you like'
        ],
        images: [
          {
            src: '/images/changelog/0.2.2/areas-and-vaults.webp',
            alt: 'Two Vellum vault windows with different custom Areas in their sidebars',
            caption: 'Each vault is independent, with its own notes and sidebar Areas.'
          }
        ]
      }
    ]
  },
  {
    version: '0.2.0', date: '24 August 2026', title: 'mobile access to your Vellum vault is now here! 📱',
    highlights: [
      {
        text: 'see the setup instructions in the beta-test channel',
        href: 'https://discord.com/channels/1518609452712988703/1528233791305416838/1541407603630940271'
      },
      "NB: this is NOT the final destination for mobile on vellum ... it's a stepping stone on the way toward an eventual standalone mobile app"
    ]
  },
  {
    version: '0.1.36', date: '21 August 2026', title: 'small release note, big update.',
    highlights: [
      'hidden markdown symbols. check it out.',
      'for those of you who prefer seeing them, see Settings >Appearance'
    ]
  },
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
      "“this note's ...” referencing (the note that shows this search in one of its fields)",
      'date verbs like before, after, on or before, on or after',
      'rolling date rules (e.g. “Due this week”, “Birthdays this week”, “Due before today”)',
      "natural language in values like “the next 12 days” or “within 7 days of this note's Start date”",
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
      "this is something @ag has been quietly working on for awhile: field path querying. search rules can now follow a field into other notes. a rule used to look at just one field on the note being searched. now it can keep going.",
      "sample use-cases: all tasks that roll up to a goal; tasks whose project's Owner is me; projects whose goal's Status is Paused; tasks assigned to my reports' reports; books whose Author's Country is Japan; places whose Country's Region is Europe; recipes whose Ingredients' Season is Spring.",
      "where a field points at its own kind (a project's Parent project, a task's Blocked by), an “as far as it goes” switch lets the search climb the chain. loops are harmless, and the climb stops at 20 steps."
    ],
    more: [
      'nothing to set up: no marks on fields, no new field types. just build your search query and each step offers only the fields that tag actually carries, plus any fields you placed by hand.',
      'if you delete a field that a rule walks through, the rule calls out where it breaks, matching nothing rather than showing incorrect data. the search page and any note showing it will tell you why.'
    ]
  },
]

export const releaseVersions = releases.map((release) => release.version)
