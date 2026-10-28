---
title: Set it up yourself
lead: It looks like a spaceship. It is not. You need a computer (it is built and tested on a Mac), a Claude plan, Notion and a quiet evening. Everything else can wait until you actually miss it.
doc: 16-runbook.md
facts:
  - { k: "The core", v: "an evening" }
  - { k: "Terminal for floor 2", v: "not needed" }
  - { k: "Add-ons", v: "one at a time" }
  - { k: "Status", v: "beta" }
---

By the end of the evening, about 4-5 hours, Claude can read and write your Notion, knows your first project and prepares your syncs. You do not type anything in Terminal for this part. If your project has code, add a few hours in week 1. Fitting it to your project then takes 2-4 weeks, about 15 minutes a day.

## Pick how far to go: 3 floors

Think of it as 3 floors. You can stop on any of them and it still works.

<div class="levels">
<div class="level"><span class="level__n">Floor 1 · 10 min</span><h3 class="card__title">Just the Notion template</h3><p class="card__text">Duplicate it and use it by hand. Inbox, tasks, meetings, threads, risks, decisions. No AI at all. You can stay here as long as you like.</p></div>
<div class="level level--must"><span class="level__n">Floor 2 · an evening · the core</span><h3 class="card__title">Claude plus Notion</h3><p class="card__text">Claude reads and writes your Notion, knows your first project and prepares your syncs. This page walks you through it, click by click.</p></div>
<div class="level"><span class="level__n">Floor 3 · when you need it</span><h3 class="card__title">Add-ons</h3><p class="card__text">Slack, mail, Jira, a schedule, the call co-pilot. Each one is separate. Add one, live with it for a week, then the next.</p></div>
</div>

<div class="btns" style="margin-top: 24px;">
<a class="btn btn--ink" href="https://bodco.notion.site/pm-control-tower"><svg class="logo" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 4.2 16.2 3.3l3.3 2.3v14.2l-12.2.9-2.8-2.6V4.2Z"/><path d="M8.6 8.3v9.2M8.6 8.3l6.4 9.2V7.6" stroke-linecap="round"/></svg> Duplicate the Notion template</a>
<a class="btn btn--ink" href="https://github.com/bodco/pm-control-tower"><svg class="logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg> Open the GitHub repo</a>
</div>

## Before you start

You need these for floor 2. Nothing here asks you to open Terminal.

<ul class="checklist">
<li><b>A Mac, ideally.</b> The framework is built and tested on macOS. Cowork also runs on Windows: 2 skills need a Mac (mail and the call co-pilot), the rest should work, but Windows is not tested yet. <a href="/skills/#where">Where each skill runs</a>.</li>
<li><b>A paid Claude plan.</b> Tested on Max. Pro has not been tested yet, but for a start with 3-4 skills it may be enough. See <a href="#what-it-costs">what it costs</a>.</li>
<li><b>The Claude desktop app.</b> Download it from <a href="https://claude.ai/download">claude.ai/download</a> and sign in. Cowork is inside it.</li>
<li><b>A Notion account.</b> Any plan is enough for the template. Meeting transcripts need Notion's paid AI Meeting Notes, but that is an add-on.</li>
<li><b>A quiet evening, about 4-5 hours.</b> Most of it is Claude asking you questions.</li>
<li><b>An OK from your client contract.</b> Claude reads the channels you connect. Check that your contract allows AI tools before you connect a client channel. More in <a href="/principles/#security-and-privacy">security and privacy</a>.</li>
</ul>

## What it costs

The template and the plugin are free (MIT). You pay only for Claude and Notion.

| | Per month | What is in it |
|---|---|---|
| A start | about $30-50 | Claude Pro plus Notion with Notion AI, which gives you meeting transcripts. Pro has not been tested yet, so treat it as a guess. |
| The author's setup | about $150 | Claude Max plus Notion with Notion AI. He experiments a lot: 20+ background tasks, large log analysis and new skills in testing. You do not need this on day 1. |

Prices change, so check the current ones: [Claude plans](https://claude.com/pricing) and [Notion plans](https://www.notion.com/pricing).

## Step by step: the evening setup

### 1. Make a work folder

**You do.** Open Finder, press <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd> to go to your home folder, and create a folder called `work`.

Then get the framework: open [the repository](https://github.com/bodco/pm-control-tower), press the green **Code** button, then **Download ZIP**. Unzip it and move the folder into `work`, named `pm-control-tower`.

**Done when** you have `work/pm-control-tower/dist/pm-control-tower.plugin` on your Mac.

### 2. Duplicate the Notion template

**You do.** Open [the template](https://bodco.notion.site/pm-control-tower) and press **Duplicate** in the top right. Pick your workspace.

**You see** a page with a tower icon and 11 databases in your own Notion. The records marked as demo are there so you see how it looks. You can delete them later.

### 3. Connect Notion to Claude

**You do.** In the Claude desktop app: **Settings**, **Connectors**, **Notion**, **Connect**. Notion opens a window and asks which pages Claude may see. Select the Control Tower page you just duplicated.

If you use Slack, connect it here too. It is optional.

### 4. Open a Cowork task with your folder

**You do.** In the Claude app switch to **Cowork**, start a new task, press **Add folder** and choose the `work` folder.

From now on, start every conversation about your projects in a task with this folder. It is how Claude sees your files.

**Check that Claude sees Notion.** Paste this:

```
Find my PM Control Tower page in Notion and list its databases.
```

**Done when** Claude lists 11 databases: Inbox, Tasks Tracker, Meetings, Threads, Topics, Knowledge Base, Risks, Decisions, Reports, Projects, Workspaces. If it cannot find the page, go back to step 3 and give Notion access to that page.

### 5. Install the plugin

**You do.** Drag `work/pm-control-tower/dist/pm-control-tower.plugin` from Finder into the chat. A card appears. Press **Install**.

**You see** 21 skills (written instructions for PM routine) added to Claude. They do nothing yet: they do not know your Notion or your projects.

### 6. Tell the plugin about your Notion

**You do.** Paste this, and replace `<me>` with your Mac user name (the name of your home folder):

```
customize the pm-control-tower plugin for me.
- My Notion Control Tower: the duplicated template.
  Find the IDs of all databases yourself through the Notion connector, do not ask me.
- Home folder: /Users/<me>.
- Jira: none for now. Confluence: none.
```

**You see** Claude find your database IDs, fill them into the plugin and show a card to confirm. Press confirm. That is the whole connection between Claude and Notion.

### 7. Give Claude its house rules

**You do.** In the Claude app: **Settings**, **Cowork**, global instructions. Paste this block. Change the language line to yours, and fill in or delete the line in angle brackets. The block mentions a config and a slug: the config is the short file Claude keeps about each project, and the slug is the project's short name.

```
# PM Workspace

I am a project manager. Work with me as a PM: delivery, client communication, the
tracker, reporting, risks.

## Projects

Every project fact lives in the `projects` skill, one file per project.

| Project | Slug | Config |
|---|---|---|

## Rules

1. Rule Zero: the config `projects/<slug>.md` beats any skill, report or document.
2. Never guess the project. If it is not named and not visible from a ticket key, ask.
3. Language: internal in <my language>, everything client-facing in English.
4. <optional: your style rules, for example tone or words to avoid>
5. Secrets only in ~/work/Secrets/secrets.env; configs hold variable names only; never print them.
6. Never send anything to the client yourself. Drafts yes, sending is always me.
```

The projects table stays empty. Claude gives you a row for it after the next step. A Ukrainian version is in `templates/cowork-global-instructions.md`.

### 8. Add your first project

**You do.** In a new Cowork task with the `work` folder, paste this and fill in what you know (the case letters are explained under the block). Leave out what you do not know, Claude will ask.

```
set up a new project <Name>, case A.
What I know: client <...>, our team <...>, client side <who and roles>,
meetings <day, time, type>, tracker <Jira key | client's own, no API | none>,
Slack <channels | none>, start <date>.
Do everything yourself: config, Notion (Workspace, project page, Current State,
Charter, first decision), local folders, registration. Ask only for what is missing.
```

Case **A** is a new project from scratch. **B** is taking over from another PM. **C** is a project that is not software.

**You see** Claude ask questions in cards, then write the project config, create the pages in Notion and the folders on your Mac. At the end it gives you a row for the projects table from step 7. Paste it there. **Do not create anything in Notion by hand**, Claude does it.

### 9. Try it

Open a new task with the `work` folder. First, a trick question:

```
prep me for the daily
```

**Claude must ask which project.** That is the most important rule of the system working. Then:

```
prepare me for the sync on <your project>
```

**Done when** a prep appears in the chat and as a page in the Reports database of your Notion, linked to your project. Congratulations: floor 2 is built.

## Add-ons, when you need them

Add one at a time. Run anything new by hand 3 times before you put it on a schedule.

### Programs some add-ons need

Some add-ons need small programs on your Mac. **Skip this until an add-on asks for it.** Each one is a single line you paste into Terminal (press <kbd>Cmd</kbd>+<kbd>Space</kbd>, type "Terminal", press Enter).

| Tool | What it is | Needed for | Install |
|---|---|---|---|
| Xcode Command Line Tools | Apple's basic developer tools, includes `git` | call co-pilot, cloning repositories | `xcode-select --install` |
| Homebrew | an app store for the command line | everything below | see the line under this table |
| Node.js | runs JavaScript servers | a self-hosted Jira or Bitbucket | `brew install node` |
| uv | runs Python tools | Confluence | `brew install uv` |
| Python 3.12 | runs the speech model | call co-pilot | `brew install python@3.12` |

Homebrew, the official one-liner from [brew.sh](https://brew.sh):

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

At the end Homebrew prints "Next steps" with 2 or 3 lines. Copy them and run them too, otherwise `brew` will not be found.

### Slack
**Gives you** every chat thread in Threads, with a status that says whose turn it is.

**Needs** the Slack connector (step 3).
```
collect slack for <project> for last week
```

### Gmail and Google Calendar
**Gives you** real meeting times in preps and reports, and lets topic-manager search client mail in Gmail. Gmail mail does not land in Threads: for that, use Mail.app below.

**Needs** the Gmail and Google Calendar connectors in **Settings**, **Connectors**.

### Meeting transcripts
**Gives you** a transcript of every call in the Meetings database, and preps that know what was said.

**Needs** Notion's paid AI Meeting Notes. Switch it on in Notion. After a meeting:
```
meeting <link to the Notion meeting page>
```

### Mail from Mail.app
**Gives you** corporate mail that is not in Gmail, exported from Mail.app every 15 minutes and added to Threads on the next collector run, daily or when you ask.

**Needs** a few scripts and 1 macOS permission. About 30 minutes. Guide: `docs/en/10a-mail-collector-setup.md`.
```
help me set up mail collection from Mail.app following docs/en/10a-mail-collector-setup.md
```
When macOS asks whether Terminal may control Mail, press **OK**. Only you can.

### A self-hosted Jira, Confluence or Bitbucket
**Gives you** ticket preps, board health and velocity from your own servers.

**Needs** Homebrew, then Node.js (Jira, Bitbucket) or uv (Confluence), and a personal token from your profile in that system.

1. Ask Claude to prepare the secrets file:
   ```
   create ~/work/Secrets/secrets.env from templates/secrets.env.example (mode 600)
   and tell me which lines to fill in. Do not read or print the tokens.
   ```
2. Open that file yourself and paste your tokens. **Claude never sees them, by design.**
3. Ask Claude to fetch the server and connect it:
   ```
   clone and build the jira MCP server into ~/work/tools, then customize the
   pm-control-tower plugin: Jira Server at https://<your-jira>
   ```
4. **Quit and reopen the Claude app.** Local servers (the MCP servers, small programs that connect Claude to your own Jira, Confluence or Bitbucket) read the tokens only at start.

Jira Cloud is simpler: use the official Atlassian connector in **Settings**, **Connectors**.

### Autopilot
**Gives you** preps and reports that are ready before you wake up.

**Needs** the Mac on and the Claude app running at that time, or a cloud task for things that need no local files.
```
put daily-team-prep for <project> on a schedule, about 55 minutes before our internal sync
```
Start with a single task. Add the next after a week.

### Pacenote (a separate product)
**Gives you** quiet hints during the call when something matters. It is not part of the plugin: the app or its own Cowork skill, downloads and setup are on [the Pacenote page](/pacenote/).

## If something goes wrong

| What you see | What it usually means |
|---|---|
| Claude cannot find your Notion page | Notion access was not given to that page. Step 3 again |
| "Project config not found" | The project was never created, or you call it by another name. Step 8 again |
| A fresh token is not seen | The Claude app was not restarted after you edited the secrets file |
| The report says a source is "unavailable" or "skipped" | That is on purpose. The skill does not fail, it tells you what is missing |
| Records land without a project | The project relation is empty or a database ID is wrong. Run step 6 again |
| Claude acted on the wrong project | It should never happen. Check that the request named the project, and tell the author |

## The clicks only you can make

Claude does everything else. These few clicks are yours because they need your account, your permission or your secret.

| What | Why not Claude |
|---|---|
| Duplicate the Notion template | A public template is duplicated only by a click in your browser |
| Connect Notion and Slack, choose the pages | Your account permissions |
| Add the folder, install the plugin, confirm cards | Your Cowork permissions |
| Paste tokens into the secrets file | Secrets never pass through Claude |
| Restart the Claude app | Local servers read secrets only at start |
| Paste the global instructions | Claude has no access to account settings |
| Allow macOS permissions (Mail, microphone, system audio) | macOS gives them only to the person at the Mac |

## Honest expectations

Floor 2 takes a quiet evening, about 4-5 hours. Making it fit your project takes a few weeks of small fixes, mostly in the project config. That is normal, and every fix makes all skills better at once.

The plugin is in beta: the author uses it every day, the first handover to a colleague is still ahead. If a step here does not behave as written, that is exactly the feedback the author needs. [Open an issue](https://github.com/bodco/pm-control-tower/issues).
