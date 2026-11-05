---
title: Pacenote privacy policy
lead: "What the Pacenote Mac app and Cowork skill do with your calls. Short version: audio never leaves your Mac, text goes to the AI provider you set up with your own key or account, and nothing is sent to the author unless you turn on Help improve Pacenote."
description: "Pacenote privacy policy: call audio never leaves your Mac, only text goes to the AI you set up (your key or your Claude, ChatGPT or Gemini account), nothing is sent to the author unless you opt in to usage counts, and the website counts visits only if you allow it."
parent: pacenote
facts:
  - { k: Updated, v: "5 November 2026" }
  - { k: Audio, v: "stays on your Mac" }
  - { k: Telemetry, v: "off unless you turn it on" }
  - { k: Website, v: "analytics only if you allow it" }
---

This policy covers **Pacenote**: the Mac app, the recorder it runs and the Cowork skill of the same name. This website, pacenote.bodco.pm, is covered too (see [This website](#this-website)). PM Control Tower, another project of the same author, has its own site and [privacy policy](https://tower.bodco.pm/privacy/).

Pacenote is a personal open-source project of its author, Bohdan N. ("I", "me"). It is not a hosted service: there is no account with me, no server of mine and no database of mine. **You** decide which calls it listens to and where the results go, so for the people on your calls you are the one responsible for their data (in GDPR terms, usually the controller).

## What stays on your Mac

- **Audio.** Speech is recognised locally with Whisper. Audio is never sent to an AI or anywhere else; it is written to disk only when you record a call (below).
- **Transcripts.** Recognised phrases are saved as text in your project folder (`live/` inside it), with speaker names if you use them.
- **Call recording (0.9.5), off by default.** If you turn it on in Settings > Call recording or choose it for a call, Pacenote saves the call's sound, or the sound and the screen (a whole screen or one window, never Pacenote's own windows), as a file in the project's `video/` folder on your Mac. It is never sent to an AI. To show which window will be recorded, the window picker takes a small picture of it on your Mac and does not keep it. Nothing is shown or played to the other participants: telling them is up to you (Settings > General > Recording consent can say or copy a message).
- **Voice prints.** If you turn speakers on, the voice prints that tell people apart are stored only on your Mac. In many countries a voice print is biometric data: tell people, and delete the ones you do not need (Settings > AI > Speakers, the Forget button).
- **Keys and tokens** (Claude, OpenAI, Gemini, Notion, HubSpot, Google and others) are kept in the macOS Keychain.
- **Settings, logs and the spend ledger** stay in the app's folder in your Library. Logs hold technical events, not the transcript.
- **Local AI**, when on, runs on your Mac (built in, or Ollama on `127.0.0.1`).
- **Local usage log (0.8.7).** Pacenote keeps a log of which features you use (event names and numbers, never the words of a call, names or titles) in the app's folder, one file a month, 12 months kept. It stays on your Mac; switch it off in Settings > General > Privacy.

## What leaves your Mac, and only when you set it up

- **Text to the AI you chose.** To make tips, the call picture, answers to what you type, the call preparation, the folder search and the wrap-up, the app sends **text** (recent lines of the transcript, your preparation, passages from your project files) to the provider you picked for each job: Anthropic (Claude, with your own API key, your Claude Code or your Claude account), OpenAI (with your API key or your ChatGPT account) or Google (Gemini, with your API key or your Google account). Each handles the text under your agreement with it. For a Gemini API key, use a project with billing on: Google may use content sent on the free tier to improve its products and does not use paid-tier content. If you point the app to another OpenAI-compatible provider, that provider receives the same text under your agreement with it.
- **Gemini account (0.9.3), if you choose it.** The preparation and the wrap-up run through Google's Antigravity CLI (`agy`) on your Mac, under your Google plan and with no API key. Each request runs in an empty folder, so the CLI cannot read your files, run a shell or write anything, and Pacenote deletes the CLI's own copy of the conversation afterwards. Google's Antigravity terms let Google use and review the conversations and forbid use through third-party software, so your Google account may be suspended; Pacenote shows a red warning with a link to the terms when you choose it. Turning telemetry off in the CLI does not stop Google from storing the conversations. It is not used for tips during a call.
- **Help improve Pacenote (0.9.4), off by default.** Only if you turn it on in Settings > General > Privacy, the usage log above goes to me once a week: event names and small numbers of whole days since you turned it on (for example how many tips you rated useful, fine but off the point or not useful, and the reason chip), the app and rules versions, the interface language and which way to the AI each job uses. Never the words of a call, your comments on tips, names, projects, files or titles. A random id made on your Mac when you turn it on tells your batches apart from other people's; it is forgotten when you turn it off. The batches go to my Cloudflare Worker, which keeps no IP address and refuses anything else; Show what is sent opens the next batch before it goes.
- **Plan B through Gemini (0.9.3), off by default.** If you switch on Use Gemini when Claude or ChatGPT is out, the text of a call goes to Google when the chosen way has no credit, hits its plan limit or has a bad key, and goes back as soon as the chosen way answers.
- **Notion.** With a Notion token set, the wrap-up and the transcript (as a child page) go to the meeting's page in your workspace, and the app reads your project pages to keep a local mirror.
- **HubSpot (0.8.7), if you connect it.** The service key stays in the macOS Keychain. Pacenote reads the company, the deal, contacts and recent activity into a local snapshot next to the brief. It writes a note, deal fields and a task only after you tick them in Update HubSpot and press Apply; the transcript goes into the note only if you turn that on (off by default).
- **Google (0.9.1), if you connect Google accounts.** Read-only access to your calendars, to the Google Docs, Sheets and Slides you link, and to Google Meet participants, plus an optional export of notes to a Google Doc that Pacenote itself creates. Everything is described in [Google user data](#google-user-data) below.
- **Call recordings to Google Drive (0.9.5), only if you upload them.** By a click on the call page, or after every call if you choose so: into your own Drive (My Drive > Pacenote > the project), with the `drive.file` permission that lets Pacenote see only the files it made.
- **Company web search before sales calls (0.8.7).** On by default, switch it off in Settings > AI. Only the company's name or domain goes into the search, never anything from your files; the brief says what was searched.
- **Links you give for preparation.** If your preparation names web pages (for example a public Google Doc or Notion page), the app reads only those pages.
- **One-time downloads.** Setup downloads the speech, search and voice models (Hugging Face, GitHub) and Python packages (PyPI). Each model file is checked against its SHA-256. These services see an ordinary download request.
- **Budgets.** The call and monthly limits in Settings stop the paid calls when reached.

## What is never sent

- Nothing goes to me unless you turn on Help improve Pacenote (above). The app and the skill have **no analytics SDK, no tracking and no crash reporting**; the skill sends nothing to me at all.
- Nothing is sent to the client or posted anywhere by itself. Drafts and notes are for you.
- Pacenote does not see your screen unless you record a call with the screen (above), and never your chats or files outside the project folders you choose.

<h2 id="google-user-data">Google user data</h2>

This section applies only if you connect a Google account in Settings > Integrations > Google. Without it, Pacenote touches no Google data.

**What Pacenote accesses, and why.** Pacenote asks for the following Google permissions, each used for one visible feature and nothing else:

- **Your email address and basic profile** (`openid`, `userinfo.email`): to show which Google account is connected.
- **The list of your calendars** (`calendar.calendarlist.readonly`) **and their events** (`calendar.events.readonly`): to show your upcoming calls on the Home screen and to prepare each call. Pacenote reads the title, time, attendees, Meet link and the files attached to the invitation. By default only your primary calendar is on; you can tick others.
- **Google Docs, Sheets and Slides you link** (`documents.readonly`, `spreadsheets.readonly`, `presentations.readonly`): to read the text of a document you link in a call's setup, or that is attached to the invitation, so the call brief can use it. Other Drive files are not read.
- **Google Meet conference data** (`meetings.space.readonly`): only when you choose More > Google Meet record on a past call, to read the participants and, if transcription was on in Meet, the transcript.
- **Files Pacenote creates** (`drive.file`): only when you choose Export to Google Docs or upload a call recording, to create that Google Doc or recording file in your Drive (My Drive > Pacenote > the project). With this permission Pacenote can see only the files it created.

**Where the data is stored.** The refresh token stays in the macOS Keychain on your Mac; access tokens live only in memory. Text of linked documents is copied into your project folder on your Mac. Pacenote has no server and no database: nothing from Google is sent to me or stored anywhere I control.

**Who receives it.** Calendar data is used on your Mac to show and prepare your calls. The text of documents you link goes to the AI service you set up for the preparation (Anthropic by default, or another provider you choose), under your own key or account, in the same way as your other project files. Google user data is not sold, not used for advertising, not used to train generalized AI models, and not read by humans except as you do on your own Mac.

**How to delete it.** In Settings > Integrations > Google, Remove forgets the account and revokes the token at Google. You can also revoke Pacenote at any time in your [Google Account permissions](https://myaccount.google.com/permissions). Copies of linked documents are in the project's `live/google/` folder on your Mac; delete them there.

**Limited Use.** Pacenote's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## This website

This section covers **pacenote.bodco.pm**, not the app.

- **Hosting.** The site is static and served by GitHub Pages. GitHub receives the usual technical data of every web request (IP address, browser, the page asked for) and handles it under the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). I do not get these logs.
- **Analytics, only with your consent.** The first time you visit, a banner asks whether the site may count visits with Google Analytics 4. If you decline or do not answer, Google's script is not loaded and nothing is sent to Google. If you allow it, Google Analytics sets its cookies and receives pseudonymous usage data (pages viewed, approximate location from the IP address, device and browser type). Google signals and ad personalisation are switched off. I use the reports only to see which pages are read. Google handles the data under the [Google Privacy Policy](https://policies.google.com/privacy).
- **Your choice is stored in your browser** (localStorage: `analytics-consent`, and `theme` for light or dark). You can change it at any time with **Analytics settings** in the footer.
- **No forms, no comments, no newsletter.** The site does not ask for your name or email.
- **Links** to GitHub, Notion and other sites lead to services with their own policies.

## The people on your calls

Recording or transcribing a call can require the consent of everyone on it, and the rules differ by country, by contract and by the meeting itself. Before you use Pacenote, tell participants that you keep a transcript and use an AI assistant, and get consent where the law or your employer requires it. Do not use it on calls where that is not allowed.

## Deleting your data

Everything Pacenote keeps is in places you control: delete transcripts in the project's `live/` folder, voice prints in Settings > AI > Speakers, keys in Settings > Integrations and Settings > AI, the usage log in the app's folder, and pages in your Notion and HubSpot, and the Google accounts in Settings > Integrations > Google (Remove revokes the access). Removing the app and its folder in your Library removes the rest. For data already sent to Anthropic, OpenAI, Google, Notion, HubSpot or another provider, their policies apply.

## Your rights and contact

From the Pacenote app I hold only the usage batches you chose to send (event counts and a random id of your Mac, no names or call content); turn sharing off to stop them. The only personal data connected to me is the optional website analytics, which Google processes; to withdraw consent, use Analytics settings in the footer. If you are in the EU or the UK, the rights to access, correct, delete, restrict and object apply to whoever processes your data (you, your employer, Anthropic, OpenAI, Google, Notion, HubSpot). For any question about this policy or the app, open an issue at [github.com/bodco/live-tips/issues](https://github.com/bodco/live-tips/issues).

## Changes

When this policy changes, the date at the top changes too, and the history stays in the website's Git repository.

See also: [Pacenote terms of use](/pacenote/terms/), [how Pacenote works](/pacenote/details/).
