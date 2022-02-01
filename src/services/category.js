const brands = [
  {
    id: 1,
    image: 'https://i.ebayimg.com/images/g/T38AAOSwPGBeJrV1/s-l200.webp',
    title: 'Apple'
  },
  {
    id: 2,
    image: 'https://i.ebayimg.com/images/g/BkwAAOSwpfpeJrV0/s-l200.webp',
    title: 'Samsung'
  },
  {
    id: 3,
    image: 'https://i.ebayimg.com/images/g/BkwAAOSwpfpeJrV0/s-l200.webp',
    title: 'Sony'
  },
  {
    id: 4,
    image: 'https://i.ebayimg.com/images/g/dLMAAOSwwS5eJrV0/s-l200.webp',
    title: 'Ugreen'
  },
  {
    id: 5,
    image: 'https://i.ebayimg.com/images/g/pq0AAOSwOFFeJrV0/s-l200.webp',
    title: 'Xiaomi'
  },
  {
    id: 6,
    image: 'https://i.ebayimg.com/images/g/atoAAOSwZzVeJrV1/s-l200.webp',
    title: 'Nike'
  },
  {
    id: 7,
    image: 'https://i.ebayimg.com/images/g/j-MAAOSwaBJeJrV1/s-l200.webp',
    title: 'Born Pretty'
  }
];

const categories = [
  {
    id: 1,
    image: 'https://i.ebayimg.com/images/g/-1UAAOSwzH9f4xc5/s-l200.webp',
    title: 'Sneakers'
  },
  {
    id: 2,
    image: 'https://i.ebayimg.com/images/g/xR8AAOSwPVZfkEGQ/s-l200.webp',
    title: 'Korean Beauty'
  },
  {
    id: 3,
    image: 'https://i.ebayimg.com/images/g/ikgAAOSwWb5fkEGQ/s-l200.webp',
    title: 'Wristwatches'
  },
  {
    id: 4,
    image: 'https://i.ebayimg.com/images/g/vJgAAOSwgYpfkEGQ/s-l200.webp',
    title: 'Fishing'
  },
  {
    id: 5,
    image: 'https://i.ebayimg.com/images/g/8Z0AAOSwik1fkEGQ/s-l200.webp',
    title: 'Collectibles'
  },
  {
    id: 6,
    image: 'https://i.ebayimg.com/images/g/Y7UAAOSwewJfkEGQ/s-l200.webp',
    title: 'Smartphones'
  },
  {
    id: 7,
    image: 'https://i.ebayimg.com/images/g/mTcAAOSwPzVf4xc4/s-l200.webp',
    title: 'Sell'
  }
];

const searchCategories = [
  {
    id: 1,
    title: 'All'
  },
  {
    id: 2,
    title: 'Computers/Tablets & Networking'
  },
  {
    id: 3,
    title: 'Home & Garden'
  },
  {
    id: 4,
    title: 'Clothing, Shoes & Accessories'
  },
  {
    id: 5,
    title: 'Consumer Electronics'
  },
  {
    id: 6,
    title: 'Collectibles'
  }
];

export const getBrands = () => brands;
export const getCategories = () => categories;
export const getSearchCategories = () => searchCategories;