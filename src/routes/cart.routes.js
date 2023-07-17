import { Router } from "express";
import {
	getCartList,
	updateItemQuantity,
	deleteCartList,
	deleteItem,
} from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.get("/cart", getCartList);
cartRouter.put("/cart/:id", updateItemQuantity);
cartRouter.delete("/cart", deleteCartList);
cartRouter.delete("/cart/:id", deleteItem);

export default cartRouter;
