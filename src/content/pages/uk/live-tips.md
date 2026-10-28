---
title: Live Tips
lead: "Він слухає на вашому Маку і озивається лише тоді, коли потрібен факт чи фраза: питання до вас, ваша черга, нова вимога, дата, яку ви от-от пообіцяєте."
doc: https://github.com/bodco/live-tips/blob/main/docs/uk/live-tips.md
facts:
  - { k: Працює на, v: "Мак з Apple Silicon" }
  - { k: Звук, v: "Лишається на вашому Маку" }
  - { k: Вартість, v: "Застосунок безкоштовний, Claude близько $0.2-0.8 за дзвінок" }
  - { k: Нотатки йдуть у, v: "Notion і папку проєкту" }
  - { k: Статус, v: "бета 0.7.3" }
---

<div class="aimix">
<h3 class="aimix__title">Claude і локальний AI, кожен для своєї роботи</h3>
<p class="aimix__lead">Те, що має бути миттєвим і приватним, працює на вашому Маку. Те, що потребує думання, йде до Claude, лише текстом.</p>
<div class="aimix__cols">
<div class="aimix__col"><h4>На Маку (локальні моделі, безкоштовно)</h4><ul>
<li><b>Whisper</b> перетворює мову на текст; аудіо не покидає Мак.</li>
<li><b>Local AI</b> (невелика модель пошуку, вбудована або Ollama) за долю секунди знаходить факти й картки за змістом і шукає по файлах проєкту.</li>
<li><b>Голосова модель</b> розрізняє спікерів.</li></ul></div>
<div class="aimix__col"><h4>Claude (хмара, ваш ключ або план)</h4><ul>
<li>Підказки і готова фраза, коли питають вас, HELP NOW, відповіді на ваші питання.</li>
<li>Картина дзвінка: тема, що на вас, рішення.</li>
<li>Prepare now і глибокий пошук (Claude Code, лише читання), підсумок у Notion.</li></ul></div>
</div>
<p class="aimix__note">Claude вимкнено для проєкту? Тоді працює лише частина на Маку: транскрипт, миттєві факти і пошук.</p>
</div>

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
<div class="card"><h3 class="card__title">До дзвінка</h3><p class="card__text">Home показує ваші дзвінки з календарів Google і Microsoft; оберіть той, на який ідете, напишіть, що важливо, і Prepare пише короткий бриф і картки фактів з папок проєкту і документів, які ви назвали. Кілька хвилин, поки ви робите інше. Не встигли? Починайте все одно: підказки, коли вас питають, HELP NOW і відповіді працюють і без неї, а запізніла підготовка підключиться до дзвінка.</p></div>
<div class="card"><h3 class="card__title">Під час дзвінка</h3><p class="card__text">Маленьке вікно під камерою: відповідь, коли вас питають, ваш апдейт, коли ваша черга, попередження про нову вимогу. HELP NOW дає наступне речення.</p></div>
<div class="card"><h3 class="card__title">Будь-яка мова на вході, одна в транскрипті</h3><p class="card__text">Задайте дзвінку одну мову, і кожного спікера буде записано нею: іспанська на англійському дзвінку виходить англійською. Або лишайте кожну мову як звучить.</p></div>
<div class="card"><h3 class="card__title">Після дзвінка</h3><p class="card__text">Сторінка в Notion мовою дзвінка: підсумок, рішення, ваші зобовʼязання, нові вимоги, відкриті питання, ризики, action items, транскрипт дочірньою сторінкою.</p></div>
</div>

## Як це виглядає

Справжні знімки застосунку на демо-даних. Картинки йдуть за світлою чи темною темою сайту.

<div class="gallery">
<figure class="ltshot ltshot--wide"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/home-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/home-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Home.</b> Дзвінки попереду з календарів і Далі (накладки позначено), Insights за період, проєкт чи воркспейс (дзвінки, час, витрати на Claude, підготовлені дзвінки, хвилини по днях) і проведені дзвінки з Notion, транскриптом і папкою.</figcaption></figure>
<figure class="ltshot ltshot--wide"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/tips-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/tips-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>На дзвінку.</b> Транскрипт з іменами спікерів (Команда чи Клієнт), що на вас, підсумок дзвінка, відповіді на ваші питання і кнопка Help.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/start-call-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/start-call-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Start call.</b> Проєкт, назва і час дзвінка, аудиторія, тип і мови, що важливо на цьому дзвінку і які папки прочитати, Prepare now.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/plan-call-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/plan-call-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Далі.</b> Під час дзвінка плануйте наступний: налаштуйте і підготуйте зараз, перейдіть на нього, коли цей закінчиться.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/prepare-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/prepare-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Prepare.</b> Перед підготовкою: проєкт чи воркспейс і що важливо на дзвінку, для регулярної зустрічі заповнені з її останнього дзвінка.</figcaption></figure>
<figure class="ltshot ltshot--wide"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/tips-presentation-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/tips-presentation-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Режим презентації.</b> Ваші слайди з текстом виступу, таймер на кожен слайд і підказки поруч.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-general-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-general-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Налаштування: General.</b> Чекліст до першого дзвінка, робоча папка, ваше імʼя на дзвінках, мова інтерфейсу, приховування вікна від показу екрана.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-ai-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-ai-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Налаштування: AI.</b> Як працює Prepare now, моделі, ліміти витрат, локальний AI і бібліотека голосів.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-notion-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-notion-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Налаштування: Notion.</b> Сторінка зустрічі після кожного дзвінка, куди вона йде, і необовʼязкова локальна копія Notion.</figcaption></figure>
<figure class="ltshot"><img class="ltshot__img ltshot--dark" src="/live-tips/shots/settings-projects-dark.webp" alt="" loading="lazy" decoding="async" /><img class="ltshot__img ltshot--light" src="/live-tips/shots/settings-projects-light.webp" alt="" loading="lazy" decoding="async" /><figcaption><b>Налаштування: Projects.</b> Воркспейси і проєкти з вашої робочої папки; позначені зʼявляються в Start call.</figcaption></figure>
</div>

## Home і ваші календарі

**Home** це головне вікно аппки: Insights за будь-який період, проєкт чи воркспейс (дзвінки, час на дзвінках, витрати на Claude, скільки підготовлено, хвилини по днях за проєктами; клік по дню показує цей день), дзвінок, що йде зараз, дзвінки попереду з календарів і зі списку Далі з їхньою підготовкою, і проведені дзвінки зі сторінкою в Notion, транскриптом і папкою (прибрати зі списку можна ×; файли лишаються). Внизу: ключ Claude, витрати за місяць проти ліміту, копія Notion, локальний AI і календарі. Показуєте Home колегам? Settings > General ховає ваші цифри.

**Календарі через macOS, кілька акаунтів одразу.** Додайте акаунти Google і Microsoft у System Settings > Internet Accounts, потім у Live Tips Settings > Calendars позначте календарі, де ваші дзвінки. Нічого не треба встановлювати і ніде окремо входити; Live Tips лише читає. Дві-три зустрічі на один час це нормально: Home їх позначає, а ви готуєте і запускаєте ту, на яку реально йдете. Регулярна зустріч стартує з налаштувань і тексту "що важливо" її останнього дзвінка, тож ви лише коригуєте.

## Дзвінки один за одним: Далі

Дзвінок ще йде, а одразу після нього наступний. Відкрийте **Plan an upcoming call** (у меню в рядку меню або ⚙ > Далі у вікні-суфлері), налаштуйте наступний дзвінок і натисніть **Prepare**: його підготовка пишеться, поки ви говорите. Плануйте скільки завгодно дзвінків; вони чекають у списку **Далі** за часом, а їхні підготовки йдуть одна за одною. Записується одночасно лише один дзвінок.

Коли час, **Перейти** (або "End and start" у вікні End call) питає один раз, коректно завершує поточний дзвінок (транскрипт збережено, підсумок у Notion пишеться у фоні) і за кілька секунд запускає наступний з уже завантаженою підготовкою. Підготовка, яка ще пишеться, продовжується і приєднується до нового дзвінка, коли готова; у чужий дзвінок вона не потрапляє ніколи.

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

Ще немає: підсумку в Google Docs чи Word у вашому Drive або OneDrive. У планах.

<p class="smallprint">Ваші дзвінки і ваші дані: <a href="/uk/live-tips/privacy/">політика конфіденційності</a> і <a href="/uk/live-tips/terms/">умови використання</a>.</p>
