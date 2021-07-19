export type ICategoryData = {
  title: string;
  description: string;
  source: string;
  tappings?: {
    name: string;
  }[];
};

const PizzaCategoryData: ICategoryData[] = [
  {
    title: "Pepperoni pizza",
    description: "Pepperoni Pizza  is a normal Pepperoni pizza with cheese",
    source:
      "https://ibassets.com.br/ib.item.image.big/b-871c999d61a24fda99ab93bdcced7730.png",
    tappings: [
      {
        name: "Border with cheese",
      },
      {
        name: "More cheese",
      },
      {
        name: "A little burned",
      },
      {
        name: "Ketchup on the pepperoni",
      },
    ],
  },
  {
    title: "Cheese Pizza",
    description:
      "The Pizza is a pizza that only us make, be part of the 1% who ate it",
    source:
      "https://www.pngkey.com/png/full/169-1694321_cheese-pizza-cheese-pizza-png.png",
  },
];

const BurgerCategoryData: ICategoryData[] = [
  {
    title: "Big Mac",
    description:
      "Mouthwatering perfection starts with two 100% pure beef patties and Big Mac® sauce sandwiched between a sesame seed bun.",
    source:
      "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg?$Product_Desktop$",
  },
  {
    title: "Double Quarter Pounder",
    description:
      "Each Double Quarter Pounder with Cheese features two quarter pound* 100% fresh",
    source:
      "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.jpg",
  },
];

const SausageData: [] = [];

const CakeData = [
  {
    title: "Chocolate Cake",
    description:
      "Chocolate Cake features a 2 layer chocolate cover with M&M's and a border full of Kitkats",
    source:
      "https://srv-store5.gofile.io/download/b9fd7afc-9e32-4765-baf3-edb1989f5e25/579-5796747_bolo-com-m-m-e-kit-kat-hd-removebg.png",
  },
];

export const HomePageCategories = [
  {
    icon: "🍕",
    title: "Pizza",
    data: PizzaCategoryData,
  },
  {
    icon: "🍔",
    title: "Burger",
    data: BurgerCategoryData,
  },
  {
    icon: "🌭",
    title: "Sausage",
    data: SausageData,
  },
  {
    icon: "🥮",
    title: "Cake",
    data: CakeData,
  },
];
