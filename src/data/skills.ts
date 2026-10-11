import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

export const GROUPS: Record<string, L> = {
  found: { en: 'Foundation', uk: 'Основа' },
  collect: { en: 'Catch every message', uk: 'Зібрати все' },
  prep: { en: 'Before and during calls', uk: 'Перед дзвінком і під час нього' },
  report: { en: 'Reports', uk: 'Звіти' },
  scope: { en: 'Scope and risks', uk: 'Скоуп і ризики' },
  tracker: { en: 'Board and stability', uk: 'Борда і стабільність' },
};

export type Skill = { name: string; group: keyof typeof GROUPS; what: L; say: L; when: L; out: string };

const daily = { en: 'daily', uk: 'щодня' };
const weekly = { en: 'weekly', uk: 'щотижня' };
const monthly = { en: 'monthly', uk: 'щомісяця' };
const onDemand = { en: 'on demand', uk: 'на запит' };

export const SKILLS: Skill[] = [
  {
    name: 'projects', group: 'found', when: onDemand, out: 'projects/*.md',
    what: {
      en: 'Keeps a short file per project with everything the other skills need to know, plus the shared rules. Change a fact here and every skill follows. There is exactly 1 in the system.',
      uk: 'Тримає короткий файл на кожен проєкт з усім, що треба знати іншим скілам, і спільні правила. Змінили факт тут, і всі скіли це підхоплюють. У системі рівно 1.',
    },
    say: { en: 'what projects do I have', uk: 'які в мене проєкти' },
  },
  {
    name: 'slack-collector', group: 'collect', when: daily, out: 'Threads',
    what: {
      en: 'Every chat message and thread lands in Threads without duplicates, and after each pass you can see whose turn it is to answer.',
      uk: 'Кожне повідомлення й тред з чатів потрапляє в Threads без дублів, і після кожного проходу видно, чия черга відповідати.',
    },
    say: { en: 'collect slack for Orbit', uk: 'збери слак по Orbit' },
  },
  {
    name: 'mac-mail-collector', group: 'collect', when: daily, out: 'Threads',
    what: {
      en: 'Your mail, incoming and sent, arrives in Threads as full conversations, sorted by project. Works from Mail.app on your Mac.',
      uk: 'Ваша пошта, вхідна й надіслана, потрапляє в Threads повними розмовами, розкладена по проєктах. Працює з Mail.app на Маку.',
    },
    say: { en: 'collect mail', uk: 'збери пошту' },
  },
  {
    name: 'inbox-responder', group: 'collect', when: daily, out: 'Draft Response',
    what: {
      en: 'A reply draft for every open thread, in the language of the thread, with context from the tracker, errors and topics already pulled in. You edit and send.',
      uk: 'Драфт відповіді на кожен відкритий тред, мовою треду, з уже підтягнутим контекстом із трекера, помилок і тем. Ви правите й надсилаєте.',
    },
    say: { en: 'draft replies for Orbit', uk: 'підготуй відповіді по Orbit' },
  },
  {
    name: 'thread-ticket-sync', group: 'collect', when: onDemand, out: 'tasks',
    what: {
      en: 'Shows you which conversations should have become tickets, and turns the ones you pick into developer tasks.',
      uk: 'Показує розмови, які давно мали стати тікетами, і перетворює вибрані на задачі для розробників.',
    },
    say: { en: 'which threads need tickets', uk: 'які треди треба завести тікетами' },
  },
  {
    name: 'daily-team-prep', group: 'prep', when: { en: 'before sync', uk: 'перед синком' }, out: 'Reports',
    what: {
      en: 'You walk into the internal sync already knowing board movement, blockers, chat topics, open action items and new errors since the last prep.',
      uk: 'Ви приходите на внутрішній синк, уже знаючи рух на борді, блокери, теми з чатів, відкриті action items і нові помилки з минулої підготовки.',
    },
    say: { en: 'prep me for the sync on Orbit', uk: 'підготуй мене до синку по Orbit' },
  },
  {
    name: 'client-meeting-prep', group: 'prep', when: { en: 'before meeting', uk: 'перед мітингом' }, out: 'Reports',
    what: {
      en: 'Status and talking points for each client meeting, matched to who attends and what kind of meeting it is.',
      uk: 'Статус і тези до кожного клієнтського мітингу, з урахуванням того, хто буде і що це за мітинг.',
    },
    say: { en: 'prep the client call', uk: 'підготуй клієнтський дзвінок' },
  },
  {
    name: 'live-tips', group: 'prep', when: { en: 'during the call', uk: 'під час дзвінка' }, out: 'Meetings',
    what: {
      en: 'Short hints during the call when something matters, and a transcript with a wrap-up afterwards. Audio stays on your Mac.',
      uk: 'Короткі підказки під час дзвінка, коли трапляється щось важливе, а після нього транскрипт і підсумок. Звук лишається на вашому Маку.',
    },
    say: { en: 'live tips', uk: 'live tips' },
  },
  {
    name: 'notion-meeting-topics', group: 'prep', when: { en: 'after meeting', uk: 'після мітингу' }, out: 'Meetings',
    what: {
      en: 'Drop a meeting link and get a detailed bilingual report with decisions and action items, on the same page.',
      uk: 'Кидаєте посилання на мітинг і отримуєте детальний двомовний звіт з рішеннями й action items на тій самій сторінці.',
    },
    say: { en: 'meeting + link', uk: 'мітинг + посилання' },
  },
  {
    name: 'weekly-overview', group: 'report', when: weekly, out: 'Reports',
    what: {
      en: 'On Monday morning: what happened last week across all projects, what is still open, where the risks are and what is ahead.',
      uk: 'У понеділок зранку: що сталося минулого тижня на всіх проєктах, що ще відкрите, де ризики і що попереду.',
    },
    say: { en: 'weekly overview', uk: 'тижневий огляд' },
  },
  {
    name: 'client-report', group: 'report', when: monthly, out: 'Reports',
    what: {
      en: 'A client report in English, weekly, monthly or for steering, that you proofread instead of writing from scratch.',
      uk: 'Звіт клієнту англійською, тижневий, місячний або для керівництва, який ви вичитуєте, а не пишете з нуля.',
    },
    say: { en: 'monthly client report for Orbit', uk: 'місячний звіт клієнту по Orbit' },
  },
  {
    name: 'velocity-report', group: 'report', when: monthly, out: 'Reports',
    what: {
      en: 'Monthly numbers on throughput, cycle time, workload and estimate accuracy, compared with the month before.',
      uk: 'Місячні цифри: пропускна здатність, cycle time, навантаження і точність оцінок, у порівнянні з попереднім місяцем.',
    },
    say: { en: 'velocity for Orbit', uk: 'велосіті по Orbit' },
  },
  {
    name: 'client-satisfaction-tracker', group: 'report', when: monthly, out: 'Reports',
    what: {
      en: 'Catches early signs that the client is getting frustrated or cooling off, from the tone of chats, mail and calls. Never shown to the client.',
      uk: 'Ловить ранні ознаки того, що клієнт дратується чи охолоняє, за тоном чатів, листів і дзвінків. Клієнт цього ніколи не бачить.',
    },
    say: { en: 'how is the client', uk: 'як там клієнт' },
  },
  {
    name: 'change-request', group: 'scope', when: onDemand, out: 'Decisions',
    what: {
      en: 'Helps you not say yes to scope on the spot: sorts each ask into A, B or C, logs even the free extras and drafts the change request.',
      uk: 'Допомагає не погоджувати скоуп на ходу: розкладає кожну хотілку на A, B чи C, записує навіть безкоштовні доробки і пише драфт change request.',
    },
    say: { en: 'the client asks for one more thing', uk: 'клієнт просить ще одну дрібницю' },
  },
  {
    name: 'risk-register', group: 'scope', when: weekly, out: 'Risks',
    what: {
      en: 'A risk list that stays current from the tracker, chats, meetings and errors, instead of a list you fill in the night before a review.',
      uk: 'Список ризиків, який оновлюється з трекера, чатів, мітингів і помилок, а не той, що ви заповнюєте ввечері перед ревʼю.',
    },
    say: { en: 'check the risks on Orbit', uk: 'перевір ризики по Orbit' },
  },
  {
    name: 'topic-manager', group: 'scope', when: weekly, out: 'Topics',
    what: {
      en: 'Pulls meetings and threads about the same subject together, so you can see how a topic has moved over the weeks.',
      uk: 'Збирає мітинги й треди на ту саму тему докупи, щоб було видно, як тема рухалась тижнями.',
    },
    say: { en: 'update topics for Orbit', uk: 'онови теми по Orbit' },
  },
  {
    name: 'project-lifecycle', group: 'scope', when: onDemand, out: 'config + Notion',
    what: {
      en: 'Walks you through starting a project, taking over a project from another PM, the monthly health check and closing it.',
      uk: 'Веде вас через старт проєкту, прийом від іншого ПМа, щомісячний health check і закриття.',
    },
    say: { en: 'set up a new project Orbit, case A', uk: 'заведи новий проєкт Orbit, case A' },
  },
  {
    name: 'jira-management', group: 'tracker', when: onDemand, out: 'tracker',
    what: {
      en: 'Create, update and move tickets with a sentence, following the keys, labels and transitions set for your project.',
      uk: 'Створюйте, оновлюйте й рухайте тікети коротким реченням, за ключами, лейблами й переходами, заданими для вашого проєкту.',
    },
    say: { en: 'create a ticket for this bug', uk: 'заведи тікет на цей баг' },
  },
  {
    name: 'jira-board-health', group: 'tracker', when: weekly, out: 'Reports',
    what: {
      en: 'A clean board before the review: stale tickets, missing labels, Done without a version and long blocks, found for you.',
      uk: 'Чиста борда перед ревʼю: завислі тікети, відсутні лейбли, Done без версії і довгі блокування, знайдені за вас.',
    },
    say: { en: 'board health for Orbit', uk: 'здоровʼя борди Orbit' },
  },
  {
    name: 'stability-scan', group: 'tracker', when: weekly, out: 'Reports',
    what: {
      en: 'A weekly digest of unresolved errors and logs across services, with tickets for new defects. If a source was unreachable, it says so.',
      uk: 'Тижневий дайджест невирішених помилок і логів по сервісах, з тікетами на нові дефекти. Якщо джерело було недоступне, так і пише.',
    },
    say: { en: 'stability scan', uk: 'скан стабільності' },
  },
  {
    name: 'sentry-assistant', group: 'tracker', when: onDemand, out: 'chat',
    what: {
      en: 'Ask about errors in your self-hosted Sentry in plain words and change their status, within the scope set for the project.',
      uk: 'Питайте про помилки в self-hosted Sentry звичайними словами і змінюйте їхній статус, у межах, заданих для проєкту.',
    },
    say: { en: 'what is new in Sentry', uk: 'що нового в Sentry' },
  },
  {
    name: 'deploy-analysis', group: 'tracker', when: onDemand, out: 'Reports',
    what: {
      en: 'What is on stage but not yet on production, with release notes. Reads local branches only.',
      uk: 'Що вже на стейджі, але ще не на проді, разом з реліз-ноутами. Читає лише локальні гілки.',
    },
    say: { en: 'what is on stage but not on prod', uk: 'що на стейджі, але не на проді' },
  },
];
