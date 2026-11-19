---
title: Pacenote roadmap
lead: "Where Pacenote has been and where it is going: what shipped, what we build now, what comes next. Updated with every release."
parent: pacenote
facts:
  - { k: Current version, v: "0.26.0, beta" }
  - { k: Updated, v: "18 November 2026" }
  - { k: Plans during the beta, v: "All free" }
  - { k: Release notes, v: "Changelog on GitHub" }
---

## The route

<div class="rm-road" role="list" aria-label="Pacenote stages">
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.4-0.7</span><span class="rm-stop__name">Skill and Mac app</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.8</span><span class="rm-stop__name">Pacenote</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.10</span><span class="rm-stop__name">Meeting Sheet</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.11-0.13</span><span class="rm-stop__name">Account and sync</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.14-0.16</span><span class="rm-stop__name">Redesign and updates</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.17</span><span class="rm-stop__name">Organizations</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.19</span><span class="rm-stop__name">Plans in the app</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.20-0.22</span><span class="rm-stop__name">Team calls, sales, email sign-in</span></div>
<div class="rm-stop is-done" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">0.23</span><span class="rm-stop__name">Three looks</span></div>
<div class="rm-stop is-now" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">Now</span><span class="rm-stop__name">New screen layouts</span></div>
<div class="rm-stop" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">Next</span><span class="rm-stop__name">Two-factor sign-in and emails</span></div>
<div class="rm-stop" role="listitem"><span class="rm-stop__dot"></span><span class="rm-stop__when">Later</span><span class="rm-stop__name">Paid plans and mobile</span></div>
</div>

<p class="rm-legend"><span class="rm-key is-done"></span>Shipped <span class="rm-key is-now"></span>In progress <span class="rm-key"></span>Planned</p>

## Now, next, later

<div class="rm-lanes">
<div class="rm-lane is-now">
<p class="rm-lane__head">Now</p>
<div class="rm-item"><h3>New screen layouts (0.24)</h3><p>Home, the call pages, Meeting Sheet, Tracker, Settings and onboarding move to the new design, screen by screen, in all three styles.</p></div>
<div class="rm-item"><h3>Better briefs and tips</h3><p>Every call is reviewed after it ends: which tips helped, which were noise, what was missed. The prompts change from that.</p></div>
</div>
<div class="rm-lane">
<p class="rm-lane__head">Next</p>
<div class="rm-item"><h3>Two-factor sign-in</h3><p>A code from any authenticator app, backup codes, and an organization policy that makes it required. Touch ID or a passcode when you sign in.</p></div>
<div class="rm-item"><h3>Email sign-in in the console and service emails</h3><p>Sign in to the web console with your email and password. Emails for invites, a sign-in from a new device and getting back into two-factor sign-in.</p></div>
<div class="rm-item"><h3>Call analysis against a standard</h3><p>Presets by team type (Sales, PM, Recruiting and more), a scorecard for each kind of call, a score after the call and an overview for team leads.</p></div>
<div class="rm-item"><h3>Security hardening</h3><p>Fixes from our own security review of the app and the update channel, before the team version grows.</p></div>
<div class="rm-item"><h3>Signed and notarized by Apple</h3><p>No more "Open Anyway" on first launch and no Keychain prompt after an update.</p></div>
</div>
<div class="rm-lane">
<p class="rm-lane__head">Later</p>
<div class="rm-item"><h3>Live tips without your own key</h3><p>Tip hours included in a plan, with top-ups. Your own AI key stays an option on every plan.</p></div>
<div class="rm-item"><h3>Paid plans</h3><p>Billing after the beta, with 30 days' notice to everyone in the beta. Solo stays free.</p></div>
<div class="rm-item"><h3>On your phone</h3><p>A web app for the phone: calendar, Meeting Sheet, notes after the call, tasks.</p></div>
<div class="rm-item"><h3>The download link by email</h3><p>On a phone, the site sends you the link itself once our service mail is on. Until then it opens your mail app with the link ready.</p></div>
</div>
</div>

## What shipped

<ol class="rm-log">
<li><span class="rm-log__when">18 Nov · 0.23</span><b>Three looks.</b> Classic, Roadbook and Broadsheet, each light or dark, in Settings > General > Appearance. The new Pacenote mark and motion, the tips window shows its state in the style, and a window and a banner tell you when a new version is out. On the site: plans on Pricing and a Download page.</li>
<li><span class="rm-log__when">17-18 Nov · 0.20-0.22</span><b>Team calls, sales, email sign-in.</b> The Team tab for team leads, more sales methods and deal blocks, a speech writer for a deck, and sign-in with email and password next to Google. An account is now required.</li>
<li><span class="rm-log__when">17 Nov · 0.19</span><b>Plans in the app.</b> Compare plans and switch an organization's plan in Settings, start a team from Solo, a trial on every plan, your own use for the last 30 days, a Console page for everyone signed in. Product analytics you can turn off: screens, errors by code and speed, never what is said in a call. A recorded call stops by itself when the meeting ends.</li>
<li><span class="rm-log__when">16-17 Nov · 0.17</span><b>Organizations.</b> Invites, teams with a lead, private calls, organization projects with shared decisions, tasks and risks, the admin console inside the app.</li>
<li><span class="rm-log__when">15-16 Nov · 0.14-0.16</span><b>A calmer app.</b> New Get Ready, Settings in groups with search, onboarding where you pick what to install, removable add-ons, automatic updates and "What's new".</li>
<li><span class="rm-log__when">15 Nov · 0.11-0.13</span><b>Account and sync.</b> Sign in to Pacenote, recordings and transcripts in your Google Drive, call notes synced per project (off by default), one list of decisions, tasks and risks everywhere.</li>
<li><span class="rm-log__when">11-14 Nov · 0.10</span><b>Meeting Sheet.</b> One preparation for every call, Quick and Expert, sources from folders and files, readiness check. The co-driver: a prompter, answers to anyone's questions, a fallback chain across AI providers.</li>
<li><span class="rm-log__when">2-9 Nov · 0.9</span><b>Beyond Claude.</b> Google accounts, OpenAI and Gemini, call recording to Google Drive, tip ratings that teach the app, Start call opens the meeting in the right place.</li>
<li><span class="rm-log__when">28 Oct-1 Nov · 0.8</span><b>Pacenote.</b> The new name and look, the menu bar panel, presentation and rehearsal modes, notes and tasks after the call.</li>
<li><span class="rm-log__when">22-28 Oct · 0.4-0.7</span><b>The Mac app.</b> A tips window of its own, settings in the Keychain, projects, notes in Notion, voices, interview coach mode.</li>
<li><span class="rm-log__when">10-21 Oct</span><b>The skill.</b> Live tips as a Cowork skill: a tips window with a question field, interview mode, cards on the fly.</li>
</ol>

Every change, release by release, is in the [changelog](https://github.com/bodco/live-tips/blob/main/CHANGELOG.md). Dates and order of planned items can change: this page shows the plan as it stands today.
