import {Router} from 'express';
import { getProducts } from '../controllers/products.controller.js';
import { addToCart } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get("/home", getProducts);
productsRouter.post("/home", addToCart);

export default productsRouter;