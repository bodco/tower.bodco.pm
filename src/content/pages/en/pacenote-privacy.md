---
title: Pacenote privacy policy
lead: "What the Pacenote Mac app and Cowork skill do with your calls. Short version: audio never leaves your Mac, text goes to the AI provider you set up with your own key or account, and nothing is sent to the author."
description: "Pacenote privacy policy: call audio never leaves your Mac, only text goes to the AI you set up (your key or Claude plan), and nothing is sent to the author."
parent: pacenote
facts:
  - { k: Updated, v: "4 November 2026" }
  - { k: Audio, v: "stays on your Mac" }
  - { k: Telemetry, v: "none" }
---

This policy covers **Pacenote**: the Mac app, the recorder it runs and the Cowork skill of the same name. The website and the rest of PM Control Tower are covered by the [main privacy policy](/privacy/).

Pacenote is a personal open-source project of its author, Bohdan N. ("I", "me"). It is not a hosted service: there is no account with me, no server of mine and no database of mine. **You** decide which calls it listens to and where the results go, so for the people on your calls you are the one responsible for their data (in GDPR terms, usually the controller).

## What stays on your Mac

- **Audio.** Speech is recognised locally with Whisper. Audio buffers live only in memory and are never written to disk or sent anywhere.
- **Transcripts.** Recognised phrases are saved as text in your project folder (`live/` inside it), with speaker names if you use them.
- **Voice prints.** If you turn speakers on, the voice prints that tell people apart are stored only on your Mac. In many countries a voice print is biometric data: tell people, and delete the ones you do not need (Settings > AI > Speakers, the Forget button).
- **Keys and tokens** (Claude, Notion, HubSpot, Google and others) are kept in the macOS Keychain.
- **Settings, logs and the spend ledger** stay in the app's folder in your Library. Logs hold technical events, not the transcript.
- **Local AI**, when on, runs on your Mac (built in, or Ollama on `127.0.0.1`).
- **Local usage log (0.8.7).** Pacenote keeps a log of which features you use (event names and numbers, never the words of a call, names or titles) in the app's folder, one file a month, 12 months kept. It stays on your Mac; switch it off in Settings > General > Privacy.

## What leaves your Mac, and only when you set it up

- **Text to Claude.** To make tips, the call picture, answers to what you type, the call preparation, the folder search and the wrap-up, the app sends **text** (recent lines of the transcript, your preparation, passages from your project files) to Anthropic with your own API key or through your own Claude Code. Anthropic handles it under your agreement with Anthropic. If you point the app to another OpenAI-compatible provider, that provider receives the same text under your agreement with it.
- **Notion.** With a Notion token set, the wrap-up and the transcript (as a child page) go to the meeting's page in your workspace, and the app reads your project pages to keep a local mirror.
- **HubSpot (0.8.7), if you connect it.** The service key stays in the macOS Keychain. Pacenote reads the company, the deal, contacts and recent activity into a local snapshot next to the brief. It writes a note, deal fields and a task only after you tick them in Update HubSpot and press Apply; the transcript goes into the note only if you turn that on (off by default).
- **Google (0.9.1), if you connect Google accounts.** Read-only access to your calendars, to the Google Docs, Sheets and Slides you link, and to Google Meet participants, plus an optional export of notes to a Google Doc that Pacenote itself creates. Everything is described in [Google user data](#google-user-data) below.
- **Company web search before sales calls (0.8.7).** On by default, switch it off in Settings > AI. Only the company's name or domain goes into the search, never anything from your files; the brief says what was searched.
- **Links you give for preparation.** If your preparation names web pages (for example a public Google Doc or Notion page), the app reads only those pages.
- **One-time downloads.** Setup downloads the speech, search and voice models (Hugging Face, GitHub) and Python packages (PyPI). Each model file is checked against its SHA-256. These services see an ordinary download request.
- **Budgets.** The call and monthly limits in Settings stop the paid calls when reached.

## What is never sent

- Nothing goes to me. The app and the skill have **no analytics, no tracking, no crash reporting and no "phone home"**.
- Nothing is sent to the client or posted anywhere by itself. Drafts and notes are for you.
- Pacenote does not see your screen, your chats or files outside the project folders you choose.

<h2 id="google-user-data">Google user data</h2>

This section applies only if you connect a Google account in Settings > Integrations > Google. Without it, Pacenote touches no Google data.

**What Pacenote accesses, and why.** Pacenote asks for the following Google permissions, each used for one visible feature and nothing else:

- **Your email address and basic profile** (`openid`, `userinfo.email`): to show which Google account is connected.
- **The list of your calendars** (`calendar.calendarlist.readonly`) **and their events** (`calendar.events.readonly`): to show your upcoming calls on the Home screen and to prepare each call. Pacenote reads the title, time, attendees, Meet link and the files attached to the invitation. By default only your primary calendar is on; you can tick others.
- **Google Docs, Sheets and Slides you link** (`documents.readonly`, `spreadsheets.readonly`, `presentations.readonly`): to read the text of a document you link in a call's setup, or that is attached to the invitation, so the call brief can use it. Other Drive files are not read.
- **Google Meet conference data** (`meetings.space.readonly`): only when you choose More > Google Meet record on a past call, to read the participants and, if transcription was on in Meet, the transcript.
- **Files Pacenote creates** (`drive.file`): only when you choose Export to Google Docs, to create one Google Doc in your Drive with the notes of that call. With this permission Pacenote can see only the files it created.

**Where the data is stored.** The refresh token stays in the macOS Keychain on your Mac; access tokens live only in memory. Text of linked documents is copied into your project folder on your Mac. Pacenote has no server and no database: nothing from Google is sent to me or stored anywhere I control.

**Who receives it.** Calendar data is used on your Mac to show and prepare your calls. The text of documents you link goes to the AI service you set up for the preparation (Anthropic by default, or another provider you choose), under your own key or account, in the same way as your other project files. Google user data is not sold, not used for advertising, not used to train generalized AI models, and not read by humans except as you do on your own Mac.

**How to delete it.** In Settings > Integrations > Google, Remove forgets the account and revokes the token at Google. You can also revoke Pacenote at any time in your [Google Account permissions](https://myaccount.google.com/permissions). Copies of linked documents are in the project's `live/google/` folder on your Mac; delete them there.

**Limited Use.** Pacenote's use and transfer to any other app of information received from Google APIs will adhere to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## The people on your calls

Recording or transcribing a call can require the consent of everyone on it, and the rules differ by country, by contract and by the meeting itself. Before you use Pacenote, tell participants that you keep a transcript and use an AI assistant, and get consent where the law or your employer requires it. Do not use it on calls where that is not allowed.

## Deleting your data

Everything Pacenote keeps is in places you control: delete transcripts in the project's `live/` folder, voice prints in Settings > AI > Speakers, keys in Settings > Integrations and Settings > AI, the usage log in the app's folder, and pages in your Notion and HubSpot, and the Google accounts in Settings > Integrations > Google (Remove revokes the access). Removing the app and its folder in your Library removes the rest. For data already sent to Anthropic, Notion, HubSpot or another provider, their policies apply.

## Your rights and contact

I hold no personal data from Pacenote. If you are in the EU or the UK, the rights to access, correct, delete, restrict and object apply to whoever processes your data (you, your employer, Anthropic, Notion, HubSpot). For any question about this policy or the app, open an issue at [github.com/bodco/live-tips/issues](https://github.com/bodco/live-tips/issues).

## Changes

When this policy changes, the date at the top changes too, and the history stays in the website's Git repository.

See also: [Pacenote terms of use](/pacenote/terms/), [how Pacenote works](/pacenote/details/).
