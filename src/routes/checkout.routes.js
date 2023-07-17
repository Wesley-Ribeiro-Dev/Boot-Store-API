import { Router } from "express";

import { saveOrder } from "../controllers/checkout.controller.js";
import { validateDeliverySchema } from "../middlewares/validateDeliverySchema.js";
import { deliverySchema } from "../schemas/delivery.schema.js";
import { validateContactSchema } from "../middlewares/validateContactSchema.js";
import { contactSchema } from "../schemas/contact.schema.js";
import { validateOrderSchema } from "../middlewares/validateOrderSchema.js";
import { orderSchema } from "../schemas/order.schema.js";

const checkOutRouter = Router();

checkOutRouter.post(
  "/checkout",
  validateDeliverySchema(deliverySchema),
  validateContactSchema(contactSchema),
  validateOrderSchema(orderSchema),
  saveOrder
);

export default checkOutRouter;
