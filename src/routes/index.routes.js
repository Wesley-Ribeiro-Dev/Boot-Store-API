import { Router } from "express";
import userRouter from "./users.routes.js";
import checkOutRouter from "./checkout.routes.js";
import productsRouter from "./products.routes.js";
import cartRouter from "./cart.routes.js";

const router = Router();

router.use(userRouter);
router.use(productsRouter);
router.use(cartRouter);
router.use(checkOutRouter);

export default router;
