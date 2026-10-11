---
title: "Autopilot: the work is done before you arrive"
lead: A skill you run by hand saves time. A skill on a schedule puts the result in Notion before you sit down.
doc: 05-autopilot.md
facts:
  - { k: Sends to client, v: "never" }
  - { k: Schedulers, v: "Mac and cloud" }
  - { k: Results, v: "Reports DB" }
  - { k: Prep lead time, v: "~55 min" }
---

Preps, reports and scans run on a schedule and land in the Reports database. You arrive to a prep that is already done, about 55 minutes before each meeting. Nothing is sent to the client. Run a skill (a written instruction for a single routine job) by hand 3 times before you put it on the schedule, so you trust what it writes.

## What changes

The autopilot is a set of short prompts on a schedule. Each one calls a skill for a **named** project and requires the result to be saved to the Reports database. You arrive to a prep that is already done instead of making it.

The project is always named in the prompt. That is how the "never guess the project" rule holds even when nobody is watching.

## On your Mac or in the cloud

| | On the Mac (Cowork scheduled tasks) | In the cloud (routines, scheduled tasks that run in the cloud) |
|---|---|---|
| Runs when | the Mac is on and Claude desktop is running | always, no Mac needed |
| Reads local files | yes | only through the bridge (the link from a cloud task to your Mac), when the Mac is online |
| Local connectors (self-hosted tracker, wiki) | yes | through the bridge |
| Cloud connectors (chat, Notion, mail, calendar) | yes | yes |
| Choose it for | anything that reads the disk: the mail buffer, logs, repos | anything that only needs cloud connectors |

In plain words: a task that reads files on your Mac runs only if the Mac is awake and the Claude app is open at that time.

## An example week

This is the shape of the author's schedule. Yours will follow your own meeting calendar.

<div class="grid" style="--min: 230px;">
<div class="card"><span class="card__tag">Every morning</span><p class="card__text">Chat sync, the daily work report, mail collection and reply drafts. The internal sync prep about 55 minutes before the sync.</p></div>
<div class="card"><span class="card__tag">Monday</span><p class="card__text">Topics, the weekly overview, the planning prep before the planning call.</p></div>
<div class="card"><span class="card__tag">Tuesday and Thursday</span><p class="card__text">Status and 1-1 preps before the client calls. The weekly stability scan on Thursday night.</p></div>
<div class="card"><span class="card__tag">Friday</span><p class="card__text">Board health and the review prep, as 2 separate reports. The risk register as part of the review cycle.</p></div>
<div class="card card--accent"><span class="card__tag">Monthly</span><p class="card__text">Velocity, client sentiment, a memory digest of the month, a health check of every project and an audit of the skills against the configs.</p></div>
</div>

Preps are timed about 55 minutes before the meeting: enough time to read them and add your own notes while the data is still fresh.

## The scheduled prompt, in 5 lines

Short, and it points to the skill instead of retelling it:

```
Use the <skill-name> skill for the <Project> project.
<Period or mode: for yesterday, for last week, the meeting type>.
<Special conditions: local refs only, mount the logs folder first>.
Save the report to the outputs folder AND to the Notion Reports DB.
The Notion page must contain the full report as page content.
```

On a project with no tracker API the prompt gets an extra sentence: use the fallback from the config (the project file) and note the date of the last export. If the export is older than 3 days, the report says so in its first line.

For expensive tasks, a cheap entry point: a light scan first, and exit quickly if there is nothing to do.

## Where to find the results

1. **The Reports database**, always: type, skill, date, summary, project, workspace and the full text.
2. **A local copy** in the session's outputs folder.
3. **Side effects in other systems**, limited and explicit: tickets for new defects, pages in Threads, Topics, Risks or Decisions. Nothing is sent to the client.

## When it does not run, and how you notice

- **The Mac slept or the app was closed.** Local tasks did not run, and in the morning the recent reports are empty. Use *Run now*.
- **A skill has fallen behind its config.** The monthly automation health check shows it. Between audits the signal is odd names of people or components in reports.
- **Notion rejected a long block or a relation was not written.** The report says "saved with warnings". Check the property names.
- **Cloud schedules run in UTC.** Twice a year, with daylight saving, cloud tasks shift by an hour unless you adjust them. Local tasks use local time.

> 3 manual runs first, then the schedule. Switching on the autopilot before you trust a skill by hand creates distrust from day 1.
