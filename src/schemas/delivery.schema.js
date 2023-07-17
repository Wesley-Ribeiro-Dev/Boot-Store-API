import joi from "joi";

export const deliverySchema = joi.object({
  name: joi.string().required(),
  surName: joi.string().required(),
  address: joi.string().required(),
  cep: joi.string().required(),
  number: joi.string().required(),
  complement: joi.string().allow(''),
  neighbourhood: joi.string().required(),
  city: joi.string().required(),
  state: joi.string().required(),
});
