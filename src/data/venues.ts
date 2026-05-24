export interface Venue {
  id: string;
  name: string;
  type: string;
  category: 'eat' | 'fun';
  desc: string;
  fullDesc: string;
  price: string;
  rating: string;
  reviewCount: number;
  tags: string[];
  hours: string;
  phone: string;
  address: string;
  lat: number;
  lng: number;
  coverImg: string;
  photos: string[];
  menu: { section: string; items: { name: string; price: string; desc?: string }[] }[];
}

const AVACHA_IMG = 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5810b38f-ba82-4e23-ac8b-182067f5c7af.jpg';

export const venues: Venue[] = [
  {
    id: 'hesburger',
    name: 'Hesburger',
    type: 'Ресторан быстрого питания',
    category: 'eat',
    desc: 'Финская сеть бургеров с натуральными ингредиентами. Фирменные бургеры, картошка фри и молочные коктейли.',
    fullDesc: 'Hesburger — финская сеть ресторанов быстрого питания, известная качественными бургерами из натурального мяса. Один из немногих fast food на Камчатке с широким меню, включая вегетарианские позиции. Уютный зал, быстрое обслуживание и доступные цены делают его популярным среди местных и туристов.',
    price: '₽',
    rating: '4.3',
    reviewCount: 312,
    tags: ['🍔 Бургеры', '🍟 Картошка', '🥤 Коктейли'],
    hours: '09:00 – 23:00',
    phone: '+7 (415) 231-00-01',
    address: 'пр. Карла Маркса, 35, Петропавловск-Камчатский',
    lat: 53.0450,
    lng: 158.6548,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/78bac56e-49b5-4dd4-a23f-87773a7642d7.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/78bac56e-49b5-4dd4-a23f-87773a7642d7.jpg',
      AVACHA_IMG,
    ],
    menu: [
      {
        section: 'Бургеры',
        items: [
          { name: 'Hesburger Classic', price: '249 ₽', desc: 'Говяжья котлета, салат, томат, соус' },
          { name: 'Hesburger Double', price: '329 ₽', desc: 'Двойная котлета, бекон, сыр' },
          { name: 'Чикен Бургер', price: '219 ₽', desc: 'Куриное филе, майонез, огурец' },
        ],
      },
      {
        section: 'Напитки и гарниры',
        items: [
          { name: 'Картошка фри (M)', price: '129 ₽' },
          { name: 'Молочный коктейль', price: '159 ₽', desc: 'Ваниль, клубника или шоколад' },
          { name: 'Кофе американо', price: '89 ₽' },
        ],
      },
    ],
  },
  {
    id: 'u-vulkana',
    name: 'У Вулкана',
    type: 'Авторская кухня',
    category: 'eat',
    desc: 'Современная интерпретация камчатской кухни. Строганина из нельмы и бурая икра.',
    fullDesc: 'Ресторан «У Вулкана» — флагман гастрономии Камчатки. Шеф-повар Алексей Романов создаёт блюда из местных продуктов: нельмы, палтуса, морского ежа и дикоросов. Интерьер вдохновлён вулканическими породами — тёмный базальт, живой огонь и панорамные окна на сопки.',
    price: '₽₽₽₽',
    rating: '4.8',
    reviewCount: 187,
    tags: ['🧊 Строганина', '🥚 Икра', '🍷 Вино'],
    hours: '13:00 – 00:00',
    phone: '+7 (415) 241-55-77',
    address: 'ул. Ленинская, 18, Петропавловск-Камчатский',
    lat: 53.0480,
    lng: 158.6510,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/9a14d8d5-e3ca-4951-9b59-21e1ab892d63.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/9a14d8d5-e3ca-4951-9b59-21e1ab892d63.jpg',
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/a1825739-5ef6-494b-ad48-30d383f0b273.jpg',
    ],
    menu: [
      {
        section: 'Фирменные блюда',
        items: [
          { name: 'Строганина из нельмы', price: '890 ₽', desc: 'С клюквенным соусом и можжевельником' },
          { name: 'Камчатский краб (500 г)', price: '3 200 ₽', desc: 'Отварной с маслом и лимоном' },
          { name: 'Бурая икра (50 г)', price: '1 100 ₽', desc: 'С блинами и сметаной' },
        ],
      },
      {
        section: 'Супы',
        items: [
          { name: 'Уха по-камчатски', price: '490 ₽', desc: 'Горбуша, палтус, картофель' },
          { name: 'Суп из морского ежа', price: '650 ₽', desc: 'Сливочный бульон, кориандр' },
        ],
      },
    ],
  },
  {
    id: 'port',
    name: 'Порт',
    type: 'Рыбный ресторан',
    category: 'eat',
    desc: 'Свежий улов прямо с рыболовецких судов. Рыба дня, палтус на гриле, камбала.',
    fullDesc: 'Ресторан «Порт» стоит прямо у причала — ещё утром ваша рыба была в Тихом океане. Простой, честный формат: улов дня на доске, открытый гриль, деревянные столы и запах морского бриза. Самое народное и душевное место в Петропавловске.',
    price: '₽₽',
    rating: '4.7',
    reviewCount: 543,
    tags: ['🐠 Улов дня', '🔥 Гриль', '🍋 Простая еда'],
    hours: '11:00 – 22:00',
    phone: '+7 (415) 222-34-56',
    address: 'Набережная Авачинской бухты, 5',
    lat: 53.0390,
    lng: 158.6620,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/0674003c-ed09-4004-9fe6-1792c93af671.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/0674003c-ed09-4004-9fe6-1792c93af671.jpg',
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5810b38f-ba82-4e23-ac8b-182067f5c7af.jpg',
    ],
    menu: [
      {
        section: 'Рыба и морепродукты',
        items: [
          { name: 'Палтус на гриле', price: '750 ₽', desc: '300 г, с овощами гриль' },
          { name: 'Камбала жареная', price: '450 ₽', desc: 'С чесноком и зеленью' },
          { name: 'Горбуша запечённая', price: '520 ₽', desc: 'С картофелем и укропом' },
        ],
      },
      {
        section: 'Супы',
        items: [
          { name: 'Уха рыбацкая', price: '320 ₽', desc: 'Из свежей рыбы, по-домашнему' },
        ],
      },
    ],
  },
  {
    id: 'bereg',
    name: 'Берег',
    type: 'Кафе с видом',
    category: 'eat',
    desc: 'Завтраки и обеды с видом на Авачинскую бухту. Рыбные пироги и чай из трав.',
    fullDesc: 'Кафе «Берег» — любимое место местных для неспешных завтраков. Большие окна выходят прямо на Авачинскую бухту. Домашняя выпечка, чай из камчатских трав, рыбные пироги и горячие блины с икрой — здесь вы начнёте утро так, как нужно.',
    price: '₽₽',
    rating: '4.6',
    reviewCount: 298,
    tags: ['🫖 Травяной чай', '🥧 Пироги', '🌅 Вид'],
    hours: '08:00 – 20:00',
    phone: '+7 (415) 211-78-90',
    address: 'ул. Советская, 44, Петропавловск-Камчатский',
    lat: 53.0420,
    lng: 158.6480,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/8ca623a6-f9bf-413c-a422-58b0cae19130.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/8ca623a6-f9bf-413c-a422-58b0cae19130.jpg',
      AVACHA_IMG,
    ],
    menu: [
      {
        section: 'Завтраки',
        items: [
          { name: 'Блины с икрой', price: '390 ₽', desc: '3 шт. с красной икрой и маслом' },
          { name: 'Рыбный пирог', price: '220 ₽', desc: 'С горбушей и луком' },
          { name: 'Каша с ягодами', price: '180 ₽', desc: 'Овсянка с брусникой' },
        ],
      },
      {
        section: 'Напитки',
        items: [
          { name: 'Чай из трав', price: '120 ₽', desc: 'Иван-чай, шиповник, можжевельник' },
          { name: 'Кофе с молоком', price: '150 ₽' },
        ],
      },
    ],
  },
  {
    id: 'ogon',
    name: 'Огонь',
    type: 'Бар',
    category: 'fun',
    desc: 'Крафтовое пиво и коктейли с названиями камчатских вулканов. Авторский бар на набережной.',
    fullDesc: 'Бар «Огонь» — лучший крафт-бар Петропавловска. 12 кранов с местным и импортным пивом, авторские коктейли «Клыучевской», «Мутновка» и «Авача». Живая музыка по пятницам и субботам, открытая веранда с видом на бухту.',
    price: '₽₽',
    rating: '4.8',
    reviewCount: 421,
    tags: ['🍺 Крафт', '🍹 Коктейли', '🎵 Живая музыка'],
    hours: '17:00 – 02:00',
    phone: '+7 (415) 233-99-11',
    address: 'Набережная, 12, Петропавловск-Камчатский',
    lat: 53.0410,
    lng: 158.6600,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/d4776899-1c99-45b8-92fb-5dd440bbe653.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/d4776899-1c99-45b8-92fb-5dd440bbe653.jpg',
      AVACHA_IMG,
    ],
    menu: [
      {
        section: 'Крафтовое пиво',
        items: [
          { name: 'Камчатское светлое', price: '280 ₽', desc: '0.5 л, местная варня' },
          { name: 'Тёмный портер', price: '320 ₽', desc: '0.5 л, шоколадный аромат' },
        ],
      },
      {
        section: 'Коктейли',
        items: [
          { name: 'Ключевской (острый)', price: '450 ₽', desc: 'Мескаль, чили, лайм' },
          { name: 'Авача', price: '390 ₽', desc: 'Джин, голубика, тоник' },
        ],
      },
    ],
  },
  {
    id: 'sopka',
    name: 'Сопка',
    type: 'Бар-ресторан',
    category: 'fun',
    desc: 'Широкий выбор виски и камчатской настойки. Тёплая атмосфера, деревянный интерьер.',
    fullDesc: '«Сопка» — место, где тепло даже в метель. Деревянный интерьер, охотничьи трофеи, 80+ видов виски и фирменная настойка на брусниках. По четвергам — живой джаз, по выходным — медленные танцы.',
    price: '₽₽₽',
    rating: '4.7',
    reviewCount: 234,
    tags: ['🥃 Виски', '🎶 Джаз', '🪵 Тепло'],
    hours: '18:00 – 03:00',
    phone: '+7 (415) 244-12-34',
    address: 'ул. Пограничная, 7, Петропавловск-Камчатский',
    lat: 53.0500,
    lng: 158.6530,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/9f20b21f-dd05-4f61-8fb2-2f1d28ee54c6.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/9f20b21f-dd05-4f61-8fb2-2f1d28ee54c6.jpg',
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/a1825739-5ef6-494b-ad48-30d383f0b273.jpg',
    ],
    menu: [
      {
        section: 'Виски',
        items: [
          { name: 'Glenfiddich 12', price: '550 ₽', desc: '50 мл' },
          { name: 'Камчатская настойка', price: '180 ₽', desc: 'На бруснике, 50 мл' },
        ],
      },
    ],
  },
  {
    id: 'lava',
    name: 'Лава',
    type: 'Клуб-бар',
    category: 'fun',
    desc: 'Танцы, диджеи и неоновые вулканы на стенах. Главное ночное место Петропавловска.',
    fullDesc: '«Лава» — единственный полноценный клуб Петропавловска-Камчатского. Неоновые инсталляции в виде вулканов, два зала, два бара. Резидентные DJ-сеты по пятницам и субботам, гостевые артисты раз в месяц. Вход с 18 лет, дресс-код.',
    price: '₽₽',
    rating: '4.5',
    reviewCount: 678,
    tags: ['💃 Танцы', '🎤 DJ', '🌋 Атмосфера'],
    hours: '21:00 – 05:00',
    phone: '+7 (415) 255-77-00',
    address: 'ул. Океанская, 3, Петропавловск-Камчатский',
    lat: 53.0435,
    lng: 158.6570,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/88f8d045-9ac1-4d36-bfe0-0d9b003c5cfd.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/88f8d045-9ac1-4d36-bfe0-0d9b003c5cfd.jpg',
      AVACHA_IMG,
    ],
    menu: [
      {
        section: 'Коктейли',
        items: [
          { name: 'Long Island', price: '420 ₽' },
          { name: 'Лава (фирменный)', price: '380 ₽', desc: 'Ром, гренадин, апельсин' },
          { name: 'Шот «Извержение»', price: '150 ₽', desc: 'Текила + Табаско' },
        ],
      },
    ],
  },
  {
    id: 'tikhiy-okean',
    name: 'Тихий океан',
    type: 'Бар с видом',
    category: 'fun',
    desc: 'Панорамный вид на Тихий океан. Идеальное место для встречи заката с бокалом.',
    fullDesc: 'Бар «Тихий океан» занимает верхний этаж здания с панорамными окнами на 180°. Приходите за два часа до заката — к тому времени лучшие места будут заняты. Широкая карта вин, авторские коктейли и закуски из местных морепродуктов.',
    price: '₽₽₽',
    rating: '4.9',
    reviewCount: 356,
    tags: ['🌊 Вид', '🌅 Закат', '🍷 Вино'],
    hours: '14:00 – 00:00',
    phone: '+7 (415) 260-45-67',
    address: 'пр. Победы, 1 (5 этаж), Петропавловск-Камчатский',
    lat: 53.0460,
    lng: 158.6490,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/2d70815d-f276-4d48-894c-bfdc920b825d.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/2d70815d-f276-4d48-894c-bfdc920b825d.jpg',
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/5810b38f-ba82-4e23-ac8b-182067f5c7af.jpg',
    ],
    menu: [
      {
        section: 'Вина',
        items: [
          { name: 'Шардоне (бокал)', price: '380 ₽' },
          { name: 'Просекко (бокал)', price: '420 ₽' },
        ],
      },
      {
        section: 'Закуски',
        items: [
          { name: 'Тартар из тунца', price: '590 ₽' },
          { name: 'Икра с крекерами', price: '480 ₽' },
        ],
      },
    ],
  },
];
