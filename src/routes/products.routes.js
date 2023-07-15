import {Router} from 'express';
import { getProducts } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get("/home", getProducts);

export default productsRouter;