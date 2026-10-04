// Mock data used to simulate orders, menu items, and kitchen workflow in the app.
export const ORDERS = [
  {
    id: 1,
    tableNo: 4,
    itemName: 'Paneer Tikka',
    quantity: 2,
    status: 'New'
  },
  {
    id: 2,
    tableNo: 2,
    itemName: 'Veg Biryani',
    quantity: 1,
    status: 'Preparing'
  },
  {
    id: 3,
    tableNo: 7,
    itemName: 'Butter Naan',
    quantity: 4,
    status: 'Ready'
  }
];

export const MENU = [
  {
    id: 1,
    name: 'Paneer Tikka',
    category: 'Starter',
    price: 280,
    available: true
  },
  {
    id: 2,
    name: 'Veg Biryani',
    category: 'Main Course',
    price: 220,
    available: true
  },
  {
    id: 3,
    name: 'Butter Naan',
    category: 'Bread',
    price: 50,
    available: true
  },
  {
    id: 4,
    name: 'Gulab Jamun',
    category: 'Dessert',
    price: 90,
    available: false
  }
];

export const KITCHEN_ORDERS = [
  {
    id: 1,
    orderId: 1,
    tableNo: 4,
    itemName: 'Paneer Tikka',
    quantity: 2,
    status: 'Queued'
  },
  {
    id: 2,
    orderId: 2,
    tableNo: 2,
    itemName: 'Veg Biryani',
    quantity: 1,
    status: 'Cooking'
  }
];