---
title: Privacy policy
lead: "What this website and PM Control Tower do with your data. Short version: the framework runs in your own Claude, Notion and tool accounts and sends nothing to the author; the website counts visits with Google Analytics only if you allow it."
description: "PM Control Tower privacy: the framework runs in your own Claude, Notion and tool accounts and sends nothing to the author; the website only counts visits."
facts:
  - { k: Updated, v: "27 October 2026" }
  - { k: Covers, v: "tower.bodco.pm, PM Control Tower" }
  - { k: Pacenote, v: "its own policy" }
---

This policy covers the website **tower.bodco.pm** and the open-source framework **PM Control Tower** (the Claude plugin, the skills, the Notion template and the documentation). The Mac app and the Cowork skill **Pacenote** have [their own privacy policy](/pacenote/privacy/), because they record calls.

PM Control Tower is a personal open-source project of its author, Bohdan N. ("I", "me"). It is not a hosted service: there is no account with me, no server of mine and no database of mine.

## The website

- **Hosting.** The site is static and served by GitHub Pages. GitHub receives the usual technical data of every web request (IP address, browser, the page asked for) and handles it under the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). I do not get these logs.
- **Analytics, only with your consent.** The first time you visit, a banner asks whether the site may count visits with Google Analytics 4. If you decline or do not answer, Google's script is not loaded and nothing is sent to Google. If you allow it, Google Analytics sets its cookies and receives pseudonymous usage data (pages viewed, approximate location from the IP address, device and browser type). Google signals and ad personalisation are switched off. I use the reports only to see which pages are read. Google handles the data under the [Google Privacy Policy](https://policies.google.com/privacy).
- **Your choice is stored in your browser** (localStorage: `analytics-consent`, and `theme` for light or dark). You can change your choice at any time with **Analytics settings** in the footer.
- **No forms, no comments, no newsletter.** The site does not ask for your name or email.
- **Links** to GitHub, Notion and other sites lead to services with their own policies.

## PM Control Tower (plugin, skills, Notion template)

- **It runs in your accounts.** The skills run inside your own Claude (Cowork or Claude Code) and read and write your own Notion, tracker, chat, mail and files through connectors you set up. The data stays between you and those services. Nothing is sent to me, and I cannot see your projects, configs or results.
- **Anthropic** processes what the skills read and write as part of your use of Claude, under your agreement with Anthropic. The same goes for each connected service (Notion, Jira, Slack, Google, Microsoft and others) under your agreements with them.
- **Secrets** (tokens, passwords) stay in a local file on your computer; the skills keep only the name of the variable.
- **The Notion template** is a page you duplicate into your own workspace; what you put there is governed by Notion's terms.
- **No telemetry.** The plugin and the skills have no analytics, tracking or "phone home".

## Your rights and contact

The only personal data connected to me is the optional website analytics, which Google processes. If you are in the EU or the UK, you have the rights to access, correct, delete, restrict and object, and you can complain to your data protection authority. To withdraw consent, use Analytics settings in the footer. For any question about this policy, open an issue at [github.com/bodco/pm-control-tower/issues](https://github.com/bodco/pm-control-tower/issues).

## Changes

When this policy changes, the date at the top changes too, and the history stays in the website's Git repository.

See also: [Terms of use](/terms/).
