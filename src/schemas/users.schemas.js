import joi from "joi";

export const registerSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required().email(),
  password: joi.string().required().min(3),
});
