export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  imageUrl: string
  sizes: string[]
  colors: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oxford Classic Shirt",
    description: "Классическая рубашка из 100% египетского хлопка. Идеальная посадка, двойной манжет.",
    price: 8900,
    category: "Рубашки",
    imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Белый", "Голубой", "Розовый"],
  },
  {
    id: "2",
    name: "Tailored Wool Blazer",
    description: "Пиджак из итальянской шерсти. Slim fit, лацканы с ручной простёжкой.",
    price: 24900,
    category: "Пиджаки",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=800&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Тёмно-синий", "Чёрный", "Серый"],
  },
  {
    id: "3",
    name: "Slim Fit Selvedge Denim",
    description: "Джинсы из японского selvedge-денима. Плотность 14 oz, классический 5-карманный крой.",
    price: 12900,
    category: "Джинсы",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Индиго", "Чёрный"],
  },
  {
    id: "4",
    name: "Leather Chelsea Boots",
    description: "Челси из натуральной телячьей кожи. Резиновая подошва, ручная прошивка.",
    price: 18900,
    category: "Обувь",
    imageUrl: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=800&fit=crop",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Чёрный", "Табак"],
  },
  {
    id: "5",
    name: "Merino Wool Sweater",
    description: "Свитер из мериносовой шерсти. Мягкий, не колется, сохраняет тепло.",
    price: 7400,
    category: "Свитеры",
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cda3cba?w=600&h=800&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Серый", "Бордо", "Зелёный"],
  },
  {
    id: "6",
    name: "Canvas Weekender Bag",
    description: "Путешественная сумка из плотного канваса с кожаными элементами.",
    price: 11200,
    category: "Аксессуары",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
    sizes: ["ONE SIZE"],
    colors: ["Хаки", "Чёрный", "Оливковый"],
  },
  {
    id: "7",
    name: "Linen Summer Shirt",
    description: "Льняная рубашка свободного кроя. Дышащий натуральный лён для тёплых дней.",
    price: 6500,
    category: "Рубашки",
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Белый", "Бежевый", "Голубой"],
  },
  {
    id: "8",
    name: "Cashmere Scarf",
    description: "Шарф из чистого кашемира. Невероятно мягкий, лёгкий и тёплый.",
    price: 6800,
    category: "Аксессуары",
    imageUrl: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop",
    sizes: ["ONE SIZE"],
    colors: ["Серый", "Камель", "Чёрный"],
  },
  {
    id: "9",
    name: "Suede Desert Boots",
    description: "Замшевые пустынные ботинки. Классический крой, каучуковая подошва.",
    price: 14500,
    category: "Обувь",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=800&fit=crop",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Песочный", "Тёмно-коричневый"],
  },
  {
    id: "10",
    name: "Italian Leather Belt",
    description: "Ремень из итальянской бычьей кожи. Пряжка из нержавеющей стали.",
    price: 4900,
    category: "Аксессуары",
    imageUrl: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop",
    sizes: ["85", "90", "95", "100"],
    colors: ["Чёрный", "Коричневый"],
  },
]
