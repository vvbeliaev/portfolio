// UI string dictionaries. Keep keys flat and stable; add a key to BOTH locales.
// Used via the helpers in ./utils.ts — never hardcode UI copy in components.
// Stage labels (`STAGE 00 · DISCOVERY`) are a brand ritual and stay English in
// both locales — they live in $lib/config, not here.
//
// Voice: first person plural — deliberately (owner decision, 2026-08-29). The
// team framing is honest: an engineering core plus specialist contractors per
// job, with Vladimir named as the lead in Who. The offer pages keep their
// original first-person voice until they are revisited.

export const languages = {
  en: "English",
  ru: "Русский",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "nav.path": "The path",
    "nav.how": "How it works",
    "lang.aria": "Switch language",

    // ── Root: the hub ──────────────────────────────────────────────────────
    "root.hero.eyebrow": "Technical partner · project → contract",
    "root.hero.title": "The whole money path\u00A0— one team",
    "root.hero.sub.1":
      "Ads, product, operations, numbers. Not five contractors with you translating between them — ",
    "root.hero.sub.strong": "one team, one contract, one point of responsibility",
    "root.hero.sub.2": ". And the code, access and data stay yours. We build, and we run.",
    "root.hero.cta": "Message on Telegram",
    "root.hero.secondary": "How it works",
    "path.stop.1": "Found",
    "path.stop.2": "Paid",
    "path.stop.3": "Running",
    "path.stop.4": "Measured",

    // The money rail: four zones, hybrid frame (question → situation →
    // artifact chips → the run line).
    "zone.1.q": "How they find you",
    "zone.1.situation":
      "Clients arrive by accident: word of mouth, a lucky post — there is no acquisition system.",
    "zone.1.a1": "funnels end to end",
    "zone.1.a2": "paid traffic",
    "zone.1.a3": "content pipeline",
    "zone.1.a4": "tracking to the cent",
    "zone.1.run": "watch the numbers · repair · report",

    "zone.2.q": "What they pay for",
    "zone.2.situation":
      "Shipping a product is fast now. Keeping people in it is as hard as ever.",
    "zone.2.a1": "MVP in weeks",
    "zone.2.a2": "app",
    "zone.2.a3": "storefront with payments",
    "zone.2.a4": "onboarding & retention",
    "zone.2.run": "releases · support · growth by data",

    "zone.3.q": "How it all runs",
    "zone.3.situation":
      "Leads in DMs, records in three spreadsheets — and you are the glue.",
    "zone.3.a1": "internal tools",
    "zone.3.a2": "automation",
    "zone.3.a3": "LLM agents inside the system",
    "zone.3.run": "monitoring · changes · SLA",

    "zone.4.q": "What the numbers say",
    "zone.4.situation": "Nobody can say exactly what a customer costs.",
    "zone.4.a1": "dashboards",
    "zone.4.a2": "unit economics",
    "zone.4.a3": "weekly digest",
    "zone.4.run": "metrics stay alive · drift gets caught · decisions follow data",

    "zone.run.prefix": "We run:",


    "onehand.title": "Four zones. One contract",
    "onehand.body.1":
      "When one contractor builds the funnel, another buys the traffic and a third keeps the records, the seams between them are your personal risk: “bad landing page” versus “bad traffic”, lost context, weeks of back-and-forth. Here ",
    "onehand.body.strong": "there is nobody to pass the blame to",
    "onehand.body.2":
      " — one team holds the whole path, one person answers for it, and answers with numbers.",

    "model.label": "How it works",
    "model.title": "Shipping is the middle, not the end",
    "model.intro":
      "Nobody knows in advance how long a good product takes — so you never pay for a promise, only for the next week. For the price of one in-house engineer, you get the whole team.",

    "model.audit.tag": "01 · Audit",
    "model.audit.title": "The entry",
    "model.audit.body":
      "One week, fixed price. We look at the whole money path: where it leaks, what to measure, what to build first.",
    "model.audit.1": "a report with numbers",
    "model.audit.2": "a plan laid out in sprints",
    "model.audit.3": "the next move is yours",

    "model.sprint.tag": "02 · Sprints",
    "model.sprint.title": "A week is the unit of work",
    "model.sprint.body":
      "The sprint's outcome is fixed before it starts. It ends with a working increment, a demo and the numbers. You pay by the week — and can stop any week.",
    "model.sprint.1": "landing page with tracking — one sprint",
    "model.sprint.2": "lead-intake bot — one sprint",
    "model.sprint.3": "unit-economics dashboard — one sprint",
    "model.sprint.4": "an MVP — usually 2–4 sprints",
    "model.sprint.note":
      "Funnels are built in sprints but proven by the calendar: marketing runs in monthly experiment cycles.",

    "model.run.tag": "03 · Run",
    "model.run.title": "We stay and run",
    "model.run.body":
      "Monthly, in tiers — you don't have a CTO, on this perimeter we are it. Infrastructure lives in your account under our management.",
    "model.run.1": "watch — monitoring and alerts",
    "model.run.2": "report — a weekly numbers digest",
    "model.run.3": "repair & grow — a bank of hours",

    "cases.label": "Cases",
    "cases.title": "What has shipped.",

    "who.label": "The team",
    "who.title": "Who is behind this",
    "who.body":
      "Cogisoft is a compact team: an engineering core plus specialist contractors per job, with no account managers in between. Projects are led by Vladimir Beliaev — a full-stack and AI engineer with a marketing-analytics degree and hands-on media buying. The person you talk to is the person who builds.",
    "bound.title": "Honest boundaries",
    "bound.1.strong": "We don't do",
    "bound.1": "branding or identity as a standalone service",
    "bound.2.strong": "We don't take",
    "bound.2": "enterprise integrations or on-site work",
    "bound.3.strong": "Need a specialist on your team by the hour?",
    "bound.3": "That's",

    // ── Offer: signals (the proto-offer) ───────────────────────────────────
    "hero.eyebrow": "Demand before code",
    "hero.title": "Signals before software",
    "hero.sub":
      "I don't sell development hours. I test demand with live experiments in real traffic — and build only what the market already confirmed.",
    "hero.cta": "Talk through a hypothesis",
    "hero.secondary": "How it works",

    "manifesto.label": "Why market-first",
    "manifesto.commodity.label": "The commodity",
    "manifesto.commodity.title": "Anyone can ship",
    "manifesto.commodity.body":
      "AI made building cheap. A working product takes days now — so code is no longer an edge, and everyone's demo looks the same.",
    "manifesto.edge.label": "The edge",
    "manifesto.edge.title": "Few know what to ship",
    "manifesto.edge.body":
      "The scarce asset is market knowledge: what to build, for whom, and how it will reach them. That's what I manufacture — as evidence, not opinions.",
    "manifesto.conclusion":
      "So I invert the order: demand first, product last — with an honest “stop” when the signal isn't there.",
    "numbers.1.value": "42%",
    "numbers.1.label": "of startups die from “no market need” — CB Insights",
    "numbers.2.value": "days",
    "numbers.2.label": "to ship a product with AI",
    "numbers.3.value": "5",
    "numbers.3.label": "gates before product code",

    "funnel.label": "The funnel",
    "funnel.title": "Five hypotheses. MVP comes last — on purpose.",
    "funnel.intro":
      "Most agencies start at stage 04. I get there only after the market has said yes four times. Enter at any stage — every one ends with evidence, or an honest stop that saves you months.",
    "funnel.kill":
      "No signal → I stop, say so, and hand over what the market actually said. Saved months are a result too.",
    "funnel.kill.prefix": "Kill criteria",

    "stage.discovery.q": "Is there a signal at all?",
    "stage.discovery.method": "Niche recon: pains, search demand, competitor density.",
    "stage.discovery.artifact": "Signal map + ranked hypotheses",
    "stage.discovery.gate": "One hypothesis worth betting on.",

    "stage.offer.q": "Will anyone pay?",
    "stage.offer.method": "A landing page with a real offer, pushed into paid traffic.",
    "stage.offer.artifact": "Payment intent + CAC estimate",
    "stage.offer.gate": "The market votes with intent.",

    "stage.attention.q": "Can attention be earned?",
    "stage.attention.method": "Short-form content experiments on TikTok, YouTube and Instagram.",
    "stage.attention.artifact": "Repeatable format + cost of attention",
    "stage.attention.gate": "A channel that repeats without luck.",

    "stage.community.q": "Does the audience stay?",
    "stage.community.method": "An audience accumulator in Telegram or Discord.",
    "stage.community.artifact": "Living core + retention",
    "stage.community.gate": "People return on their own.",

    "stage.mvp.q": "Will the base pay — and stay?",
    "stage.mvp.method": "An MVP launched to the audience already accumulated: payment first, then retention.",
    "stage.mvp.artifact": "Working monetization",
    "stage.mvp.gate": "Revenue that retains.",

    "contact.label": "Contact",
    "contact.title": "Bring me a belief",
    "contact.sub": "I'll test it against the market and come back with evidence — either way.",
    "contact.note": "One message is enough: what you believe, and where you think the demand is.",

    "contact.root.title": "Tell us what you're building",
    "contact.root.sub":
      "Describe the business or the idea in your own words — we'll translate the technical part.",
    "contact.root.note": "A builder replies, not a manager — usually the same day.",

    "footer.tag": "Technical partner · build → run",

    "notfound.title": "Page not found",
    "notfound.body": "This page doesn't exist or has moved.",
    "notfound.back": "Back to the signal",
  },
  ru: {
    "nav.path": "Путь",
    "nav.how": "Как устроено",
    "lang.aria": "Сменить язык",

    // ── Корень: хаб ────────────────────────────────────────────────────────
    "root.hero.eyebrow": "Технический партнёр · проект → контракт",
    "root.hero.title": "Весь путь денег\u00A0— одна команда",
    "root.hero.sub.1":
      "Реклама, продукт, операционка, цифры. Не пять подрядчиков и вы в роли переводчика между ними — ",
    "root.hero.sub.strong": "одна команда, один договор, одно ответственное лицо",
    "root.hero.sub.2": ". А код, доступы и данные остаются вашими. Собираем и ведём.",
    "root.hero.cta": "Написать в Telegram",
    "root.hero.secondary": "Как устроено",
    "path.stop.1": "Узнают",
    "path.stop.2": "Платят",
    "path.stop.3": "Крутится",
    "path.stop.4": "Цифры",

    // Рельс пути денег: четыре зоны, гибрид-фрейм (вопрос → ситуация →
    // чипы-артефакты → строка «ведём»).
    "zone.1.q": "Как о вас узнают",
    "zone.1.situation":
      "Клиенты приходят случайно: сарафан, пара удачных постов — системы привлечения нет.",
    "zone.1.a1": "воронки под ключ",
    "zone.1.a2": "закупка трафика",
    "zone.1.a3": "контент-конвейер",
    "zone.1.a4": "трекинг до копейки",
    "zone.1.run": "следим за цифрами · чиним · докладываем",

    "zone.2.q": "За что платят",
    "zone.2.situation":
      "Собрать продукт сегодня можно быстро. Удержать в нём людей — по-прежнему сложно.",
    "zone.2.a1": "MVP за недели",
    "zone.2.a2": "приложение",
    "zone.2.a3": "витрина с оплатой",
    "zone.2.a4": "онбординг и удержание",
    "zone.2.run": "релизы · поддержка · развитие по данным",

    "zone.3.q": "Как всё крутится",
    "zone.3.situation":
      "Заявки в личке, учёт в трёх таблицах, склейщик — вы сами.",
    "zone.3.a1": "внутренние инструменты",
    "zone.3.a2": "автоматизация",
    "zone.3.a3": "LLM-агенты внутри системы",
    "zone.3.run": "мониторинг · доработки · SLA",

    "zone.4.q": "Что говорят цифры",
    "zone.4.situation": "Сколько стоит клиент — точно не скажет никто.",
    "zone.4.a1": "дашборды",
    "zone.4.a2": "юнит-экономика",
    "zone.4.a3": "недельный дайджест",
    "zone.4.run": "метрики живут · дрейф ловится · решения по данным",

    "zone.run.prefix": "Ведём:",


    "onehand.title": "Четыре зоны. Один договор",
    "onehand.body.1":
      "Когда воронку делает один подрядчик, трафик — второй, а учёт — третий, стыки между ними — ваш личный риск: «лендинг плохой» против «трафик плохой», потерянный контекст, недели переписок. Здесь ",
    "onehand.body.strong": "некому переводить стрелки",
    "onehand.body.2":
      " — весь путь держит одна команда с одним ответственным, и отвечает за него цифрами.",

    "model.label": "Как устроено",
    "model.title": "Сдача проекта — середина, а не конец",
    "model.intro":
      "Сколько займёт хороший продукт, заранее не знает никто — поэтому вы никогда не платите за обещание, только за следующую неделю. А за цену одного инженера в штате получаете всю команду.",

    "model.audit.tag": "01 · Аудит",
    "model.audit.title": "Вход",
    "model.audit.body":
      "Неделя, фиксированная цена. Смотрим путь денег целиком: где течёт, что мерить, что строить первым.",
    "model.audit.1": "отчёт с цифрами",
    "model.audit.2": "план, размеченный по спринтам",
    "model.audit.3": "дальше решаете вы",

    "model.sprint.tag": "02 · Спринты",
    "model.sprint.title": "Неделя — единица работы",
    "model.sprint.body":
      "Исход спринта фиксируется до старта. В конце — работающий инкремент, демо и цифры. Платите неделями — и можете остановиться в любую.",
    "model.sprint.1": "лендинг с трекингом — спринт",
    "model.sprint.2": "бот приёма заявок — спринт",
    "model.sprint.3": "дашборд юнит-экономики — спринт",
    "model.sprint.4": "MVP — обычно 2–4 спринта",
    "model.sprint.note":
      "Воронки строятся спринтами, а доказываются календарём: маркетинг живёт месячными циклами экспериментов.",

    "model.run.tag": "03 · Ведение",
    "model.run.title": "Остаёмся и ведём",
    "model.run.body":
      "Помесячно, ступенями — у вас нет техдиректора, на этом контуре им становимся мы. Инфраструктура живёт в вашем аккаунте под нашим управлением.",
    "model.run.1": "следим — мониторинг и алерты",
    "model.run.2": "показываем — недельный дайджест цифр",
    "model.run.3": "чиним и развиваем — банк часов",

    "cases.label": "Кейсы",
    "cases.title": "Что уже сделано.",

    "who.label": "Команда",
    "who.title": "Кто за этим стоит",
    "who.body":
      "Cogisoft — компактная команда: инженерное ядро и профильные подрядчики под задачу, без менеджеров-посредников. Ведёт проекты Владимир Беляев — full-stack и AI-инженер с образованием в маркетинговой аналитике и живым опытом закупки трафика. С вами говорит тот, кто строит.",
    "bound.title": "Честные границы",
    "bound.1.strong": "Не делаем",
    "bound.1": "брендинг и айдентику как отдельную услугу",
    "bound.2.strong": "Не берёмся",
    "bound.2": "за enterprise-интеграции и выездные работы",
    "bound.3.strong": "Нужен специалист в команду по часам?",
    "bound.3": "Это на",

    // ── Оффер: сигналы (прото-оффер) ───────────────────────────────────────
    "hero.eyebrow": "Спрос до кода",
    "hero.title": "Сначала сигналы. Потом софт",
    "hero.sub":
      "Не продаю часы разработки. Проверяю спрос живыми экспериментами в реальном трафике — и строю только то, что рынок уже подтвердил.",
    "hero.cta": "Обсудить гипотезу",
    "hero.secondary": "Как это устроено",

    "manifesto.label": "Почему market-first",
    "manifesto.commodity.label": "Коммодити",
    "manifesto.commodity.title": "Собрать может каждый",
    "manifesto.commodity.body":
      "AI сделал разработку дешёвой: рабочий продукт — за дни. Код перестал быть преимуществом, и все демо выглядят одинаково.",
    "manifesto.edge.label": "Преимущество",
    "manifesto.edge.title": "Мало кто знает, что собирать",
    "manifesto.edge.body":
      "Дефицит — рыночное знание: что строить, для кого и как это дойдёт до людей. Его я и произвожу — в виде доказательств, а не мнений.",
    "manifesto.conclusion":
      "Поэтому переворачиваю порядок: сначала спрос, продукт — последним, с честным «стоп», если сигнала нет.",
    "numbers.1.value": "42%",
    "numbers.1.label": "стартапов умирают от «no market need» — CB Insights",
    "numbers.2.value": "дни",
    "numbers.2.label": "столько занимает собрать продукт с AI",
    "numbers.3.value": "5",
    "numbers.3.label": "gate до продуктового кода",

    "funnel.label": "Воронка",
    "funnel.title": "Пять гипотез. MVP — последним, и это осознанно.",
    "funnel.intro":
      "Большинство агентств начинают со ступени 04. Я дохожу до неё только после того, как рынок четыре раза сказал «да». Заходить можно на любую ступень — каждая заканчивается доказательством или честным «стоп», который экономит месяцы.",
    "funnel.kill":
      "Нет сигнала → останавливаюсь, говорю прямо и отдаю то, что на самом деле сказал рынок. Сэкономленные месяцы — тоже результат.",
    "funnel.kill.prefix": "Kill criteria",

    "stage.discovery.q": "Есть ли сигнал вообще?",
    "stage.discovery.method": "Разведка ниши: боли, поисковый спрос, плотность конкурентов.",
    "stage.discovery.artifact": "Карта сигналов + гипотезы",
    "stage.discovery.gate": "Одна гипотеза, на которую стоит ставить.",

    "stage.offer.q": "Готовы ли платить?",
    "stage.offer.method": "Лендинг с настоящим оффером в платном трафике.",
    "stage.offer.artifact": "Намерение платить + оценка CAC",
    "stage.offer.gate": "Рынок голосует намерением.",

    "stage.attention.q": "Умеем ли привлекать внимание?",
    "stage.attention.method": "Контент-эксперименты в TikTok, YouTube и Instagram.",
    "stage.attention.artifact": "Формат + стоимость внимания",
    "stage.attention.gate": "Канал, который повторяется не на удаче.",

    "stage.community.q": "Остаётся ли аудитория?",
    "stage.community.method": "Аккумулятор аудитории в Telegram или Discord.",
    "stage.community.artifact": "Живое ядро + удержание",
    "stage.community.gate": "Люди возвращаются сами.",

    "stage.mvp.q": "Платит ли база — и остаётся ли?",
    "stage.mvp.method": "MVP на накопленную аудиторию: сначала оплата, потом удержание.",
    "stage.mvp.artifact": "Работающая монетизация",
    "stage.mvp.gate": "Выручка, которая удерживается.",

    "contact.label": "Связь",
    "contact.title": "Принесите гипотезу",
    "contact.sub": "Проверю её на рынке и вернусь с доказательствами — в любую сторону.",
    "contact.note": "Одного сообщения достаточно: во что верите и где, по-вашему, спрос.",

    "contact.root.title": "Расскажите, что у вас",
    "contact.root.sub":
      "Опишите бизнес или идею своими словами — техническую часть переведём мы.",
    "contact.root.note": "Отвечает не менеджер, а тот, кто строит, — обычно в тот же день.",

    "footer.tag": "Технический партнёр · build → run",

    "notfound.title": "Страница не найдена",
    "notfound.body": "Такой страницы нет или она переехала.",
    "notfound.back": "Назад к сигналу",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
