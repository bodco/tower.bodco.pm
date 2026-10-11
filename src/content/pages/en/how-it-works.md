---
title: How a message becomes a draft on your desk
lead: Your tools on the left, the Notion page you open in the morning on the right, and Claude in the middle, working from a short file about each project. Here is the whole path, with real examples.
doc: 01-architecture.md
facts:
  - { k: Brain, v: "Claude Cowork" }
  - { k: Memory, v: "Notion, 11 DBs" }
  - { k: Truth, v: "<code>projects/&lt;slug&gt;.md</code>" }
  - { k: Human, v: "decides and sends" }
---

You stop being the person who copies information between tools. Messages, meetings and errors flow into Notion, get a status that says whose turn it is, and come back to you as preps, reports and drafts. The last step stays yours: deciding and sending.

## What sits where, in 5 layers

<div class="grid" style="--min: 220px;">
<div class="card"><span class="card__tag">Layer 1</span><h3 class="card__title">Sources</h3><p class="card__text">Chats, mail, calendar, meeting transcripts, the tracker, error monitoring, logs and repositories. Reached through MCP connectors (the official way Claude plugs into Slack, Notion, Jira and other tools) and local files on your Mac.</p></div>
<div class="card"><span class="card__tag">Layer 2</span><h3 class="card__title">The hub</h3><p class="card__text">Notion Control Tower: 11 databases, where every record is linked to a project and a workspace (Notion calls these links relations). Structured memory, not a wiki.</p></div>
<div class="card card--accent"><span class="card__tag">Layer 3</span><h3 class="card__title">The brain</h3><p class="card__text">Claude Cowork with global instructions, the project files and the skill library (a skill is a written recipe for a single routine job). A single agent that sees the full context, instead of several narrow bots.</p></div>
<div class="card"><span class="card__tag">Layer 4</span><h3 class="card__title">Autopilot</h3><p class="card__text">Scheduled tasks on the Mac and in the cloud: short prompts that call a skill for a named project and save the result.</p></div>
<div class="card"><span class="card__tag">Layer 5 · optional</span><h3 class="card__title">A second agent</h3><p class="card__text">Gemini as a strategist and reviewer over the same Notion memory. Useful once history has accumulated, never required.</p></div>
</div>

Above all of it sits the human: priorities, decisions, the client, arbitration between agents.

## From a message to your decision

```
COLLECT          BUFFER              SYNTHESIZE              REMEMBER            DECIDE
chats ────┐
mail ─────┼──▶  Threads ──┐
calendar ─┘               ├──▶  prep skills ──────▶  Reports ──┐
meetings ───▶  Meetings ──┤     inbox-responder ──▶  drafts     ├──▶  you: send,
tracker ──────────────────┤     topic-manager ────▶  Topics     │     decide,
errors, logs ─────────────┤     risk-register ────▶  Risks      │     record
repos ────────────────────┘     weekly, monthly ──▶  Reports ──┘
                       the project config drives every step
```

Every result lands in the Reports database with a type, a skill, a date and a project. Local copies are only a duplicate. Over time Control Tower becomes a complete, searchable archive of everything the system has produced.

## A short file that knows your project

The config (short for configuration) is that file: a markdown file in the `projects/` folder, 1 per project. It holds what is true about the project right now, with "as of" dates: the access matrix, the team (including former members, with dates), channels, the tracker and its access mode, meeting cadence, deploy rules, Notion IDs, local paths, a cultural profile of the client team and an append-only changelog.

Every shared skill starts with the same Step 0:

1. Determine the project from the request. Not named? **Ask.**
2. Read `projects/<slug>.md` (the slug is the project's short name, like `orbit`).
3. Take every value of the form `{config.xxx}` from there.
4. If the task touches repositories, scope or reporting, read the access matrix and the engagement status first.

> A single config line can change 10 skills. Mark error monitoring as "1 service in scope, the rest owned by the client", and without editing a single skill the stability scan checks 1 service instead of 7, the client report stops mentioning the client's components, and the risk register stops raising risks on them.

## Shared skills and project-only skills

Most skills work for any project (the docs call them engines). A few are written for a single client stack (adapters). A skill without a project prefix (`weekly-overview`, `slack-collector`) is an **engine**: it reads the project files and works for any project. A skill with a prefix (`orbit-debug`) is an **adapter**, tied to that client's stack, and it never fires for another project.

The framework does not pretend to abstract every tracker in the world. The universal core (Notion hub, tasks, mail pipeline, rhythm, configs, engines) is about 80%. The rest is adapters per project, and that is normal in delivery work. An adapter is promoted to an engine only after the same scenario repeats on a second project.

## When the client will not give you API access

Clients work in their own trackers, and their security teams often will not issue tokens for agents. The config records it plainly: `task_tracker.api_access: false` plus a `fallback_source`. The engines do not fail, they switch to what is available (the mail buffer, action items from meetings, a manual export in the project folder) and write the date of the last export into the report.

The line is drawn carefully. Degradation is allowed for **derived** data: a ticket status or a metric can be recomputed tomorrow. It is not allowed for **primary** data: a message or a meeting that was not recorded today is gone. That is why a collector is accepted only if it is complete.

## 3 real situations, start to finish

### A client message becomes a ticket
The morning collector pulls yesterday's chat into Threads with a status. The mail collector does the same for email. `inbox-responder` drafts a reply with context from the tracker and error monitoring. You open Control Tower, edit and send the draft, or turn the thread into a ticket with a single sentence.

### A client meeting you did not have to prep for
An hour before, `client-meeting-prep` writes the prep into Reports: the week in the tracker, open threads, risks, questions left from last time. After the call you drop the meeting link into the chat and get a bilingual report with decisions and action items on the same page. On Monday the topic and weekly skills pick it up.

### Production went down overnight
The stability scan reads unresolved errors and a week of logs, picks the top 3 with traces, writes a report and files tickets for new defects. In the morning the report and the tickets are already waiting, and the Friday review prep includes them.
