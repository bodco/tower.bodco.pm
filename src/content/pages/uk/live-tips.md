---
title: Live Tips
lead: "Він слухає на вашому Маку і озивається лише тоді, коли потрібен факт чи фраза: питання до вас, ваша черга, нова вимога, дата, яку ви от-от пообіцяєте."
doc: https://github.com/bodco/live-tips/blob/main/docs/uk/live-tips.md
facts:
  - { k: Працює на, v: "Мак з Apple Silicon" }
  - { k: Звук, v: "Лишається на вашому Маку" }
  - { k: Вартість, v: "Застосунок безкоштовний, Claude близько $0.2-0.8 за дзвінок" }
  - { k: Нотатки йдуть у, v: "Notion і папку проєкту" }
  - { k: Статус, v: "бета 0.6.0" }
---

## Два способи запуску

<div class="grid" style="--min: 280px; margin: 8px 0 12px;">
<div class="card">
<p class="card__tag">Для більшості</p>
<h3 class="card__title">Live Tips для Мака</h3>
<p class="card__text">Застосунок у рядку меню. Власний API-ключ Claude, жодного чату, який треба тримати відкритим під час дзвінка. Setup сам ставить модель розпізнавання.</p>
<div class="btns"><a class="btn btn--primary" href="https://github.com/bodco/live-tips/releases/latest/download/LiveTips.dmg" download>Завантажити для Мака (.dmg)</a></div>
<p class="smallprint">macOS 14.4+, Apple Silicon. Близько 2.5 ГБ локальних моделей при першому запуску. Бета без нотаризації: при першому запуску відкрийте System Settings > Privacy & Security і натисніть Open Anyway. <a href="https://github.com/bodco/live-tips/releases/latest/download/SHA256SUMS.txt">Контрольні суми SHA-256</a>.</p>
</div>
<div class="card">
<p class="card__tag">Для тих, хто в Claude Cowork</p>
<h3 class="card__title">Скіл Live Tips</h3>
<p class="card__text">Ті самі підказки у вашому чаті Cowork, у межах вашого плану Claude. Потрібен записувач з репозиторію, налаштування близько 15 хвилин.</p>
<div class="btns"><a class="btn btn--ink" href="https://github.com/bodco/live-tips/releases/latest/download/live-tips.skill" download>Завантажити скіл (.skill)</a></div>
<p class="smallprint">Додайте його в Cowork у розділі Skills, далі <a href="/uk/live-tips/details/#встановлення-десь-15-хвилин">кроки встановлення</a>.</p>
</div>
</div>

Обидва працюють за тими самими правилами і з тим самим записувачем, тож підказки поводяться однаково. Код і релізи: [github.com/bodco/live-tips](https://github.com/bodco/live-tips).

## Що він робить

<div class="grid" style="--min: 300px;">
<div class="card"><h3 class="card__title">До дзвінка</h3><p class="card__text">Prepare now пише короткий бриф і картки фактів з папок проєкту і документів, які ви назвали. Кілька хвилин, поки ви робите інше. Не встигли? Починайте все одно: підказки, коли вас питають, HELP NOW і відповіді працюють і без неї, а запізніла підготовка підключиться до дзвінка.</p></div>
<div class="card"><h3 class="card__title">Під час дзвінка</h3><p class="card__text">Маленьке вікно під камерою: відповідь, коли вас питають, ваш апдейт, коли ваша черга, попередження про нову вимогу. HELP NOW дає наступне речення.</p></div>
<div class="card"><h3 class="card__title">Будь-яка мова на вході, одна в транскрипті</h3><p class="card__text">Задайте дзвінку одну мову, і кожного спікера буде записано нею: іспанська на англійському дзвінку виходить англійською. Або лишайте кожну мову як звучить.</p></div>
<div class="card"><h3 class="card__title">Після дзвінка</h3><p class="card__text">Сторінка в Notion мовою дзвінка: підсумок, рішення, ваші зобовʼязання, нові вимоги, відкриті питання, ризики, action items, транскрипт у вкладенні.</p></div>
</div>

## Чим він інший

- **Факт або тиша.** Підказка несе число, дату, імʼя чи готове речення з вашого ж матеріалу, або її немає. Червоне лише коли звертаються до вас.
- **Ваш звук лишається на Маку.** Мова розпізнається локально через Whisper; у Claude йде лише текст.
- **Він знає ваш проєкт.** Вашу підготовку, ваші папки і, з [PM Control Tower](/uk/), сторінки Notion і поточний стан проєкту.
- **Платите за дзвінок, а не за місце.** Застосунок безкоштовний і відкритий (MIT); ви платите Claude за те, що використав дзвінок, і ставите місячний ліміт.

## Поруч з Fireflies, Fathom і Notion

Це зрілі нотатники зі спільним простором, відео і багатьма інтеграціями. Live Tips про хвилини, поки ви на дзвінку, і зроблений одним PM. Чесне порівняння з цінами на жовтень 2026: [Live Tips у порівнянні](/uk/live-tips/compare/).

## Детальніше

<div class="grid" style="--min: 230px;">
<div class="card"><h3 class="card__title"><a href="/uk/live-tips/details/">Як працює і як встановити</a></h3><p class="card__text">Тригери, вікно підказок, режими презентації і співбесіди, спікери, приватність, вимоги і кроки встановлення.</p></div>
<div class="card"><h3 class="card__title"><a href="/uk/live-tips/compare/">Порівняння з іншими</a></h3><p class="card__text">Транскрипт, допомога наживо і підсумок поруч з Fireflies, Fathom і Notion AI Meeting Notes.</p></div>
<div class="card"><h3 class="card__title"><a href="https://github.com/bodco/live-tips">Код і релізи</a></h3><p class="card__text">Застосунок, скіл, записувач і повний посібник на GitHub. Що змінилося: <a href="/uk/changelog/">версії</a>.</p></div>
</div>

Ще немає: звʼязку з календарем, пропозиції почати запис, коли починається дзвінок, підсумку в Google Docs. У планах; поки кожен дзвінок починається з рядка меню.
