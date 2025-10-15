const CART_TEMPLATE = JSON.stringify([]);

export function fetchCart() {
  if (typeof window === "undefined") return []; // ✅ prevent SSR access

  let cart = localStorage.getItem("nas-cart");
  if (cart === null || cart === "") {
    localStorage.setItem("nas-cart", CART_TEMPLATE);
  }
  cart = JSON.parse(localStorage.getItem("nas-cart"));
  return cart;
}

function updateCart(newCart) {
  localStorage.setItem("nas-cart", JSON.stringify(newCart));
}

export function resetCart() {
  localStorage.setItem("nas-cart", CART_TEMPLATE);
}

export function addToCart(item) {
  let cart = fetchCart();
  cart.push(item);
  updateCart(cart);
}

export function removeFromCart(slug) {
  let cart = fetchCart();
  cart.splice(
    cart.findIndex((cartItem) => cartItem.slug === slug),
    1
  );
  updateCart(cart);
}
