import { Router } from "express";
import {
	getCartList,
	updateItemQuantity,
	deleteCartList,
} from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.get("/cart", getCartList);
cartRouter.put("/cart/:id", updateItemQuantity);
cartRouter.delete("/cart", deleteCartList);

export default cartRouter;
