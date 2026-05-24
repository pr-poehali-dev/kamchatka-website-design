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
    name: 'PapsBurger',
    type: 'Ресторан быстрого питания',
    category: 'eat',
    desc: 'Сочные бургеры из натурального мяса, картошка фри и молочные коктейли.',
    fullDesc: 'PapsBurger — популярный бургер-ресторан в Петропавловске-Камчатском. Качественные бургеры из натурального мяса, широкое меню включая вегетарианские позиции. Уютный зал, быстрое обслуживание и доступные цены делают его популярным среди местных и туристов.',
    price: '₽',
    rating: '4.3',
    reviewCount: 312,
    tags: ['🍔 Бургеры', '🍟 Картошка', '🥤 Коктейли'],
    hours: '09:00 – 23:00',
    phone: '+7 (415) 231-00-01',
    address: 'ул. Тушканова, 35, Петропавловск-Камчатский',
    lat: 53.0512,
    lng: 158.6442,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/78bac56e-49b5-4dd4-a23f-87773a7642d7.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/78bac56e-49b5-4dd4-a23f-87773a7642d7.jpg',
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
    id: 'maks-pizza',
    name: 'Макс Пицца',
    type: 'Пиццерия',
    category: 'eat',
    desc: 'Любимая пиццерия Петропавловска. Пышное тесто, щедрая начинка и доставка по всему городу.',
    fullDesc: 'Макс Пицца — самая популярная пиццерия Петропавловска-Камчатского. Работает с 2008 года. Готовят на дровяной печи, тесто на закваске, ингредиенты свежие. Большой выбор классических и авторских пицц, паста, салаты. Есть доставка и зал на 40 мест.',
    price: '₽₽',
    rating: '4.6',
    reviewCount: 521,
    tags: ['🍕 Пицца', '🍝 Паста', '🚚 Доставка'],
    hours: '10:00 – 23:00',
    phone: '+7 (415) 238-77-22',
    address: 'ул. Лукашевского, 4, Петропавловск-Камчатский',
    lat: 53.0598,
    lng: 158.6368,
    coverImg: 'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/556c2995-1e60-4f3a-98d1-8bc96de1520a.jpg',
    photos: [
      'https://cdn.poehali.dev/projects/bf6bb77a-1f01-478f-85a5-b166685a2d3b/files/556c2995-1e60-4f3a-98d1-8bc96de1520a.jpg',
    ],
    menu: [
      {
        section: 'Пиццы',
        items: [
          { name: 'Маргарита', price: '390 ₽', desc: 'Томатный соус, моцарелла, базилик' },
          { name: 'Камчатская', price: '590 ₽', desc: 'Красная икра, сёмга, сливочный соус' },
          { name: 'Пепперони', price: '490 ₽', desc: 'Острая колбаса, моцарелла, орегано' },
          { name: 'Четыре сыра', price: '520 ₽', desc: 'Моцарелла, горгонзола, пармезан, чеддер' },
        ],
      },
      {
        section: 'Паста и салаты',
        items: [
          { name: 'Паста карбонара', price: '380 ₽', desc: 'Спагетти, бекон, желток, пармезан' },
          { name: 'Салат Цезарь', price: '320 ₽', desc: 'Курица, романо, крутоны, пармезан' },
        ],
      },
    ],
  },


];