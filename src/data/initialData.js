export const products = [
  {
    id: 1,
    name: 'Apple',
    price: 6
  },
  {
    id: 2,
    name: 'Orange',
    price: 7
  },
  {
    id: 3,
    name: 'Kiwifruit',
    price: 10
  },
  {
    id: 4,
    name: 'Grenade',
    price: 15
  },
  {
    id: 5,
    name: 'Banana',
    price: 4
  },
  {
    id: 6,
    name: 'Tomato',
    price: 2
  },
  {
    id: 7,
    name: 'Cucumber',
    price: 3
  },
  {
    id: 8,
    name: 'Salad',
    price: 12
  },
];

export const productsInCart = [
  {
    id: 1,
    name: 'Apple',
    price: 6,
    quantity: 2
  },
  {
    id: 2,
    name: 'Banana',
    price: 4,
    quantity: 1
  }
];

// INITIAL STATE
export const initialState = {
  cart: [
    {
      id: 1,
      name: 'Apple',
      price: 6,
      count: 2
    },
    {
      id: 2,
      name: 'Banana',
      price: 4,
      count: 1
    }
  ],
  products: [
    {
      id: 1,
      name: 'Apple',
      price: 6
    },
    {
      id: 2,
      name: 'Orange',
      price: 7
    },
    {
      id: 3,
      name: 'Kiwifruit',
      price: 10
    },
    {
      id: 4,
      name: 'Grenade',
      price: 15
    },
    {
      id: 5,
      name: 'Banana',
      price: 4
    },
    {
      id: 6,
      name: 'Tomato',
      price: 2
    },
    {
      id: 7,
      name: 'Cucumber',
      price: 3
    },
    {
      id: 8,
      name: 'Salad',
      price: 12
    },
  ],
};