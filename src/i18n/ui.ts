export const languages = { en: 'EN', uk: 'UK' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

export const LINKS = {
  notion: 'https://bodco.notion.site/pm-control-tower',
  repo: 'https://github.com/bodco/pm-control-tower',
  site: 'https://github.com/bodco/tower.bodco.pm',
  docs: (lang: Lang, file = '') =>
    `https://github.com/bodco/pm-control-tower/blob/main/docs/${lang}/${file || 'README.md'}`,
  release: 'https://github.com/bodco/pm-control-tower/tree/main/dist',
  author: (lang: Lang) => (lang === 'uk' ? 'https://bodco.pm/uk/' : 'https://bodco.pm/'),
  github: 'https://github.com/bodco',
  liveTips: 'https://github.com/bodco/live-tips',
};

export const VERSION = '1.9.1';

import PN_DOMAIN from '../data/pacenote-domain.json';
/** 2026-10-28 (owner): Pacenote's own site. While `live` is false its pages stay here at /pacenote/.
 *  PACENOTE_KEEP=1 builds them here anyway (the source for the pacenote.bodco.pm build). */
export const PACENOTE = { live: PN_DOMAIN.live && !(typeof process !== 'undefined' && process.env.PACENOTE_KEEP), origin: PN_DOMAIN.origin };
/** A link to a Pacenote page: its own site when it is live, the page here otherwise. sub: '', 'details', 'privacy', ... */
export function pnHref(lang: Lang, sub = ''): string {
  if (PACENOTE.live) return PACENOTE.origin + (lang === 'uk' ? '/uk/' : '/') + (sub ? sub + '/' : '');
  return path(lang, sub ? `pacenote/${sub}` : 'pacenote');
}

/** Page order drives the header, the footer and the prev/next pager. */
export const PAGES = [
  { slug: 'day', nav: true },
  { slug: 'pacenote', nav: true },
  { slug: 'notion', nav: true },
  { slug: 'skills', nav: true },
  { slug: 'how-it-works', nav: true },
  { slug: 'autopilot', nav: false },
  { slug: 'principles', nav: false },
  { slug: 'open-source', nav: false },
  { slug: 'start', nav: true },
  { slug: 'changelog', nav: false },
] as const;
export type Slug = (typeof PAGES)[number]['slug'];

export const ui = {
  en: {
    'meta.title': 'PM Control Tower: AI for the routine part of project management',
    'meta.description':
      'Claude reads your chats, mail, meetings and tracker and leaves meeting preps, reports and reply drafts in Notion. You check and send. Free template, open source.',
    'skip': 'Skip to content',
    'menu': 'Menu',
    'lang.label': 'Language',
    'theme.label': 'Dark theme',
    'author.title': 'About the author: bodco.pm',
    'cta.setup': 'Set it up',
    'cta.notion.hero': 'Notion template',
    'cta.repo.hero': 'GitHub',
    'home': 'Home',
    'nav.how-it-works': 'How it works',
    'nav.skills': 'Skills',
    'nav.notion': 'Notion template',
    'nav.autopilot': 'Autopilot',
    'nav.pacenote': 'Pacenote',
    'nav.pacenote-compare': 'Compared with others',
    'nav.pacenote-details': 'How it works',
    'nav.pacenote-privacy': 'Privacy',
    'nav.pacenote-terms': 'Terms of use',
    'nav.privacy': 'Privacy policy',
    'nav.terms': 'Terms of use',
    'footer.consent': 'Analytics settings',
    'cta.live.hero': 'Pacenote',
    'nav.open-source': 'Open source and beta',
    'nav.day': 'A day with it',
    'nav.principles': 'Principles',
    'nav.start': 'Set it up',
    'nav.changelog': 'Changelog',
    'cta.notion': 'Duplicate the Notion template',
    'cta.notion.short': 'Duplicate the template',
    'cta.repo': 'Open the GitHub repo',
    'footer.about':
      'Beta. MIT licence: use it, change it, share it.',
    'footer.get': 'Get it',
    'footer.learn': 'Learn',
    'footer.more': 'More',
    'footer.notion': 'Notion template',
    'footer.repo': 'GitHub repository',
    'footer.docs': 'Full documentation',
    'footer.source': 'Source of this site',
    'footer.author': 'About the author: bodco.pm',
    'page.onthis': 'On this page',
    'page.docs.title': 'The full document lives in the repository',
    'page.docs.text': 'Every detail, in English and Ukrainian.',
    'page.docs.btn': 'Read',
    'page.prev': 'Previous',
    'page.next': 'Next',
    '404.title': 'This page is off the radar',
    '404.text': 'The link may be old, or the page moved. Start from the home page.',
  },
  uk: {
    'meta.title': 'PM Control Tower: AI для рутинної частини роботи ПМа',
    'meta.description':
      'Claude читає ваші чати, пошту, мітинги і трекер і кладе в Notion підготовки, звіти й драфти відповідей. Ви перевіряєте і надсилаєте. Безкоштовно, відкритий код.',
    'skip': 'До змісту',
    'menu': 'Меню',
    'lang.label': 'Мова',
    'theme.label': 'Темна тема',
    'author.title': 'Про автора: bodco.pm',
    'cta.setup': 'Як розгорнути',
    'cta.notion.hero': 'Шаблон Notion',
    'cta.repo.hero': 'GitHub',
    'home': 'Головна',
    'nav.how-it-works': 'Як це працює',
    'nav.skills': 'Скіли',
    'nav.notion': 'Шаблон Notion',
    'nav.autopilot': 'Автопілот',
    'nav.pacenote': 'Pacenote',
    'nav.pacenote-compare': 'Порівняння з іншими',
    'nav.pacenote-details': 'Як працює',
    'nav.pacenote-privacy': 'Конфіденційність',
    'nav.pacenote-terms': 'Умови використання',
    'nav.privacy': 'Політика конфіденційності',
    'nav.terms': 'Умови використання',
    'footer.consent': 'Налаштування аналітики',
    'cta.live.hero': 'Pacenote',
    'nav.open-source': 'Відкритий код і бета',
    'nav.day': 'День з ним',
    'nav.principles': 'Принципи',
    'nav.start': 'Як розгорнути',
    'nav.changelog': 'Версії',
    'cta.notion': 'Дублювати шаблон Notion',
    'cta.notion.short': 'Дублювати шаблон',
    'cta.repo': 'Відкрити репо на GitHub',
    'footer.about':
      'Бета. Ліцензія MIT: беріть, змінюйте, діліться.',
    'footer.get': 'Взяти',
    'footer.learn': 'Розібратись',
    'footer.more': 'Ще',
    'footer.notion': 'Шаблон Notion',
    'footer.repo': 'Репозиторій GitHub',
    'footer.docs': 'Повна документація',
    'footer.source': 'Код цього сайту',
    'footer.author': 'Про автора: bodco.pm',
    'page.onthis': 'На цій сторінці',
    'page.docs.title': 'Повний документ лежить у репозиторії',
    'page.docs.text': 'Усі деталі, англійською та українською.',
    'page.docs.btn': 'Читати',
    'page.prev': 'Назад',
    'page.next': 'Далі',
    '404.title': 'Цієї сторінки немає на радарі',
    '404.text': 'Можливо, посилання старе або сторінка переїхала. Почніть з головної.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function t(lang: Lang, key: UiKey): string {
  return ui[lang][key] ?? ui.en[key];
}

export function getLangFromUrl(url: URL): Lang {
  const first = url.pathname.split('/').filter(Boolean)[0];
  return first === 'uk' ? 'uk' : 'en';
}

/** 'skills' -> '/uk/skills/' for uk, '/skills/' for en. Accepts '' for home. Always a trailing slash. */
export function path(lang: Lang, slug = ''): string {
  const clean = slug.replace(/^\/+|\/+$/g, '');
  if (lang === defaultLang) return clean ? `/${clean}/` : '/';
  return clean ? `/${lang}/${clean}/` : `/${lang}/`;
}

/** The same page in another language. */
export function switchLang(url: URL, to: Lang): string {
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts[0] === 'uk') parts.shift();
  return path(to, parts.join('/'));
}

export function neighbours(slug: string) {
  const i = PAGES.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? PAGES[i - 1].slug : undefined,
    next: i >= 0 && i < PAGES.length - 1 ? PAGES[i + 1].slug : undefined,
  };
}
