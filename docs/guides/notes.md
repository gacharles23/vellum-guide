---
title: Notes guide
description: Learn how to use aliases and merge tags or fields in Vellum.
version: "0.2.8"
authors: ["Futur Panda"]
referencedBy:
  - title: Guides
    href: /guides/
  - title: Changelog · Vellum 0.2.13
    href: /changelog#v0.2.13
  - title: Changelog · Vellum 0.2.11
    href: /changelog#v0.2.11
  - title: Changelog · Vellum 0.2.8
    href: /changelog#v0.2.8
---

# Notes guide

## Merge tags and fields

You can merge tags and fields without setting anything up first.

Visit any tag and choose either **Merge other tags into this one** or **Merge this tag into...**. Visit any field and choose either **Merge into this field** or **Merge this field into...**.

Before you confirm, the merge dialog describes everything that will be updated.

## Aliases

Aliases let you refer to a note by other names. Open a note, choose **cmd-k > Show info**, and add them under **Also known as**. The panel talks about names rather than aliases, so that is the wording to look for.

Search, **cmd-p**, `[[`, `@`, and even `#` for a tag will find notes by their real name or by any alias.

A single link can also show its own words, without adding an alias to the note. Type `[[`, then the name of the note you want, then `|`, then the words to show, and pick the note from the list. So typing `[[Vellum|my favourite note app` and picking Vellum gives you a link that reads *my favourite note app*.

To change the words on a link that already exists, put your cursor next to it and choose **cmd-k > Change the words...**.

If you want those words to stick as a real name for the note, look under **This link** for the entry offering to make them one of the note's names. It spells out your words and the note, so it reads something like **Make "my favourite note app" one of "Vellum"'s names**. The **This link** section holds a few other useful things too.

Aliases are included in Markdown imports and exports.

<ReferencedBy />
