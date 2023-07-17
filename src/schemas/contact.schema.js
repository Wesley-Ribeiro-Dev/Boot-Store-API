import joi from "joi";

export const contactSchema = joi.object({
  phone: joi.string().required(),
  cpf: joi.string().required()
});
