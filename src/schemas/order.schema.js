import joi from "joi";

export const orderSchema = joi.object({
  paymentMethod: joi.string().required(),
  value: joi.number().positive().required(),
  products: joi.array().min(1).required()
});
