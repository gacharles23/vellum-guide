---
title: FAQ
description: Common questions from people using Vellum in beta.
version: "0.1.35"
authors: ["Futur Panda"]
---

# FAQ

Common questions from people using Vellum in beta. For a linear first day, start with [Get started](/get-started).

## Getting oriented

### What is Vellum?

A local-first notes app that combines an outliner, markdown prose documents, and typed tags (with fields) on nodes — including paragraphs inside documents.

### Is my data local? Is there a Vellum cloud?

Your vault lives on your machine. Phone capture via Telegram also lands on your computer; it doesn’t go through a Vellum server.

### Is there a web or mobile app?

Desktop only in the private beta (macOS, Windows, and Linux). For capture on the go, see [Telegram](#telegram-capture).

## Outline and documents

### Outline vs document — what’s the difference?

An **outline** is a bullet tree. A **document** is continuous prose (closer to a writing app than to a block editor). You can convert an outline to a document; converting a document back to an outline is on the roadmap.

### What is a description?

A dimmed line under a node’s title. It shows up wherever the node does (including search) and is searchable.

## Links, tags, and fields

### What is a tag?

More than a keyword. A tag can be a plain label, or a **schema** (fields) plus a **tag page** that lists everything wearing it, with views. See [Tags and fields](/get-started#tags-and-fields).

### Do fields require a tag?

No. Fields can be vault-wide and reused on any node. Tag-owned fields still exist; when names collide you’ll see where they came from, e.g. `Author (book)` next to `Author (article)`.

## Search and queries

### How does search work?

<kbd>Cmd</kbd>+<kbd>P</kbd> / <kbd>Ctrl</kbd>+<kbd>P</kbd> opens the search palette. Details and patterns are in [Get started](/get-started#finding-things); keys are on [Keyboard shortcuts](/keyboard-shortcuts).

### What are saved searches / live queries? {#saved-searches}

Reusable searches defined by rules. They can live in the sidebar, sit on a note as a **saved search** field (and unfold live results there), or narrow what a reference field’s picker offers (“Narrow to”).

## Daily notes, tasks, and capture

### How do I jump to today?

<kbd>Cmd</kbd>+<kbd>D</kbd> / <kbd>Ctrl</kbd>+<kbd>D</kbd>.

### What’s special about tasks?

`#task` is first-class: defaults for where new tasks land, date fields, rollups with projects and goals, blockers, and more. Checkbox rows and task tags work together; heavier work often uses a project that collects tasks via a reference field.

### How do I capture from my phone? {#telegram-capture}

Use the Telegram integration (beta stepping stone toward mobile):

1. Create a bot with BotFather and copy the token into **Settings → Capture** in Vellum.
2. Open the bot chat and send the one-time security code Vellum shows you.
3. After pairing, messages (and images / voice) go into your vault — by default on today. You can aim them with `@place` and `#tag` in the message.

Vellum must be running to ingest. If it’s closed, Telegram keeps messages for a while; when Vellum captures one it adds a thumbs-up in the chat.
## Install, data in and out

### Which platforms are supported?

macOS, Windows, and Linux desktops in the private beta.

### Mac says it can’t verify the app

Common with unsigned or frequently updated beta builds. Use your usual Gatekeeper bypass for apps you trust (for example open via right-click → Open the first time). You may need to do this again after each download until signing is sorted.

### How to reset Vellum from scratch

1. backup your existing stuff because a reset will obviously blow away all your data
2. quit vellum (otherwise the database will not close cleanly)
3. delete the vellum folder
   - Mac: ~/Library/Application Support/Vellum
   - Windows: %APPDATA%\Vellum (usually C:\Users\<you>\AppData\Roaming\Vellum)
   - Linux: ~/.local/share/vellum
4. relaunch vellum - you'll get a new starter vault (be sure you've got your beta invite token handy)

### How do I import notes?

Paste is the main path today. Markdown you bring in tends to land as **prose documents**. If you want outline structure, OPML-style outline data fits better than flat markdown.

### How do I export or back up?

Use the built-in export when you need a dump. Automated periodic backups of the vault folder are a common request and not a polished feature yet. Before vault format upgrades, Vellum saves a backup automatically — after an upgrade, older app versions may not open that vault.
## Beta and product

### How do I get into the beta?

Use the official waitlist / signup the team publishes. This guide doesn’t redistribute invite links or builds.


---

Something wrong or missing? [Open an issue](https://github.com/gacharles23/vellum-guide/issues) or suggest an edit on the page.
