---
title: Get started
description: A short path through Vellum for your first day.
version: "0.1.35"
authors: ["Futur Panda"]
---

# Get started

A short path through Vellum for your first day. For one-off questions, see the [FAQ](/faq). For keys, see [Keyboard shortcuts](/keyboard-shortcuts).

## What you’re looking at

Vellum is a local-first notes app. Your vault lives on your machine.

Three ideas show up everywhere:

- **Outline** — a tree of one-line bullets (nodes)
- **Document** — continuous prose, more like a writing app than a block editor
- **Typed tags** — a tag can be a plain label, or a schema with fields and its own page

There isn’t a separate “page” type like in some other tools. What you’re looking at is usually a node, a daily note, a tag page, or a search.

## Your first notes

Open **today** with <kbd>Cmd</kbd>+<kbd>D</kbd> (Mac) or <kbd>Ctrl</kbd>+<kbd>D</kbd> (Windows / Linux). Type a few bullets. Nest with <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd>.

The **Library** is a home for notes that aren’t tied to a day. New notes can land on today or in the Library depending on how you create them.

Need more than one line under a title? Press <kbd>Shift</kbd>+<kbd>Enter</kbd> for a **description** line. Longer writing belongs in a document or in child nodes 

## Linking

Type <kbd>[</kbd><kbd>[</kbd> to link to an existing note or create a new one.

While creating, you can add a tag and a home in one go:

```text
[[enjoyable call with parents #family @yesterday
```

- `#tag` — wear (or create) a tag
- `@place` — where the new note should live (Library, today, a daily note, under another node)

Click a link to open it. <kbd>Cmd</kbd>-click (Mac) or <kbd>Ctrl</kbd>-click (Windows / Linux) expands an inline link so you can read and edit it in place. <kbd>Shift</kbd>-click opens it in the sidebar.

## Tags and fields

Put `#book` (or any tag) on a node. Click the tag to open its page — everything wearing that tag, with views you can switch.

A tag can stay a plain marker (`#follow-up`), or grow fields such as Author, Status, or Due. Fields can also exist **without** a tag: vault-wide fields you reuse anywhere.
 
From a parent node, <kbd>Cmd</kbd>+<kbd>K</kbd> / <kbd>Ctrl</kbd>+<kbd>K</kbd> → **Show view options** turns children into a list, table, cards, checklist, or board.

## Finding things

Open search with <kbd>Cmd</kbd>+<kbd>P</kbd> / <kbd>Ctrl</kbd>+<kbd>P</kbd>. It looks through titles, nodes, documents, tags, and dates.

Useful patterns:

- `#tagname` — notes wearing that tag (tag families count)
- `@Library` or `@friday` — scope or create in a place
- `"exact phrase"` and `-exclude` — narrow the match
- natural dates like `next tue` — jump to (or create) that daily note

Before you type, the palette shows recent and pinned pages — <kbd>Enter</kbd> alone often takes you back where you were.

**Saved searches** (live queries) are reusable rule lists. They can sit in the sidebar, on a note as a field, or narrow what a reference field offers. See [What are saved searches?](/faq#saved-searches).

## Capture from your phone

In beta, **Telegram** can send notes into your vault: messages go to your machine (Vellum doesn’t run a cloud for this). Vellum needs to be running to ingest them; if it’s closed, messages wait at Telegram for a while.

Setup steps live in [How do I capture from my phone?](/faq#telegram-capture).

## What’s next

- [FAQ](/faq) — install quirks, mirrors, export, queries, and other recurring questions
- [Keyboard shortcuts](/keyboard-shortcuts) — the full shortcut reference
- [Changelog](/changelog) — what’s new in each release
