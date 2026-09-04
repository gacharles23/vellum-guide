# Contribute

This guide is written by people who use Vellum. Anyone can fix a page or add a tip. You do not need to know git or be a developer. A browser is enough.

## Change something on a page

1. Open the page on this site and click "Suggest an edit to this page" at the bottom.
2. GitHub asks you to sign in. No account? Click "Create an account", it's free. After that it brings you back to the edit screen.
3. Click "Fork this repository". It makes your own copy of the guide to edit.
4. You will see the page's text, like a plain text editor. Change what you want right there. The few lines above the title (title, description, authors) stay. Add your name to the authors line and you show up in the byline at the top of the page.
5. Click the green "Commit changes..." button top right, type one line saying what you changed, and click "Propose changes".
6. Click "Create pull request". A pull request is GitHub's name for "here is my change, please take a look".

That is it. Someone reviews it and makes it live, or writes back with a suggestion. Your name goes on the [Contributors](/contributors) page too. We add it when your first change goes live.

## Two rules

- One change per pull request. A typo fix and a new tip are two pull requests.
- Images and recordings: write your words first. Then, on that last screen, drag the image into the description box. We'll put it in the right place when we review your change. 10MB max each.

## Already use git?

Do it the usual way. Fork, branch, pull request.

## Want a whole new page?

Say so on [Discord](https://vellumnotes.app/discord) or [open an issue](https://github.com/gacharles23/vellum-guide/issues). We'll create the empty page and put it in the sidebar. Then you can fill it in with the steps above.

If you use git and want to do it yourself, start the file with:

```md
---
title: Page title
description: One line saying what this page is about
authors: ["your name"]
---

# Page title

## First section

Your content ...
```

Then add the page to the sidebar list in `docs/.vitepress/config.mjs`.

## What makes a good page

- Is clear to someone who installed Vellum yesterday
- Shortcuts show the Mac, Windows, and Linux keys separately
- Images and examples often beat lengthy prose (I should take my own advice 😁)
- Plain, human, friendly words are welcome and most appreciated

## While Vellum is in private beta

Screenshots, tips and how-tos are fine and welcome and awesome. But please no builds, installers, invite links, etc.

## License

The writing here is under Creative Commons Attribution.
