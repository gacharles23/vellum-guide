# Contribute

This guide is written by people who use Vellum.

## Suggest a change

Open an issue if you spot something wrong, have a question, or want to suggest a topic.

## Make an edit

1. Fork this repo
2. Make your change
3. Add yourself to the `authors` array at the top of the page
4. Add yourself to the contributors page
5. Open a pull request saying what changed and, if relevant, how you checked it

## Starting a new page

Copy this into your file:

```md
---
version: "0.1.30"
authors: ["your name"]
---

# Page title

One line saying what this page is about

## First section

Your content ...
```

- `version` is the Vellum version you checked the page against
- `authors` is who wrote it (ie you!)
- all authors show up in the byline at the top of the page
- then add your page to the sidebar in `docs/.vitepress/config.mjs`

## What makes a good page

- Is clear to someone who installed Vellum yesterday
- Shortcuts show the Mac, Windows, and Linux keys separately
- Images and examples often beat lengthy prose (I should take my own advice 😁)
- Plain, human, friendly words are welcome and most appreciated

## While Vellum is in private beta

Screenshots, tips and how-tos are fine and welcome and awesome. But please no builds, installers, invite links, etc.

## License

The writing here is under Creative Commons Attribution.



