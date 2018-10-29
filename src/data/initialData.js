// INITIAL STATE
export const initialState = {
  users: [
    {
      username: 'admin',
      password: 'admin'
    },
    {
      username: 'rbatsenko',
      password: 'rbatsenko',
      name: 'Roman',
      surname: 'Batsenko',
      address: 'ul. Dworcowa 55/2',
      phone: 456789123
    }
  ],
  cart: [],
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
  cartTotal: 0
};