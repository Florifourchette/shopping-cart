export const decrease = (cart, product) => {
  const itemFound = cart.find((item) => item.sku === product.sku);
  if (!itemFound) {
    alert("this product cannot be found");
    return cart;
  }

  if (product.qty > 1) {
    const newCart = cart.map((item) => {
      if (product.sku !== item.sku) {
        return item;
      } else {
        return { ...item, qty: item.qty - 1 };
      }
    });
    return newCart;
  } else {
    return cart.filter((item) => item.sku !== product.sku);
  }
};

export const increase = (cart, product) => {
  const itemFound = cart.find((item) => item.sku === product.sku);
  console.log(product);
  console.log(itemFound);

  if (itemFound) {
    const newCart = cart.map((item) => {
      if (product.sku !== item.sku) {
        return item;
      } else {
        return { ...item, qty: item.qty + 1 };
      }
    });
    return newCart;
  } else {
    const newItem = {
      name: product.name,
      price: product.price,
      qty: 1,
      sku: product.sku,
    };
    const newCart = [...cart, newItem];
    return newCart;
  }
};

export const getTotalPrice = (cart) => {
  return cart.reduce(
    (accumulator, { qty, price }) => accumulator + qty * price,
    0
  );
};

export const getTotalItems = (cart) => {
  return cart.reduce((accumulator, { qty }) => accumulator + qty, 0);
};

export const products = [
  {
    sku: 1,
    stock: 10,
    name: "iPhone 14 Pro Max",
    img: "https://www.interdiscount.ch/static-shops/products/720/846c8cebca69a34241dcb5d952727756e6cb.jpg",
    price: 1500,
  },
  {
    sku: 2,
    stock: 10,
    name: "Macbook Air",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
    price: 1200,
  },
  {
    sku: 3,
    stock: 10,
    name: "iPad Pro",
    img: "https://d1eh9yux7w8iql.cloudfront.net/product_images/338084_7fcba852-8e68-44da-97d1-a10b74a1349f.jpg",
    price: 1300,
  },
];

export const cart = [];
