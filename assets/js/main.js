import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import getProducts from "./helpers/getProducts.js";
import products from "./components/products.js";
import cart from './components/cart.js';
import preferedColorScheme from "./components/darkShow.js";

/* ----UI Elements ----*/

/* ----Hidden loader ----*/
loader()

/* -----Show Menu ----*/
showMenu()

/* ----Show Cart -----*/
showCart()

/* ----End UI Elements ----*/

/* ----Products----- */
const { db, printProducts } = products(await getProducts())

/* -----Cart -----*/
cart(db, printProducts)

preferedColorScheme()