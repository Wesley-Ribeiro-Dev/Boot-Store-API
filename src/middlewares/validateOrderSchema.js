export function validateOrderSchema(schema) {
    return (req, res, next) => {
      const validation = schema.validate(req.body.order, {
        abortEarly: false,
      });
      
      if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        let message = "";
  
        Array.from(errors).forEach((error) => {
          if (error.includes("value")) message += "Valor do pedido inválido!\n";
          if (error.includes("products")) message += "Não é possível realizar um pedido com o carrinho vazio!\n";
          if (error.includes("paymentMethod")) message += "Método de pagamento inválido!\n";
        });
        console.log("orede");
        return res.status(422).send({ errors, message });
      }
  
      next();
    };
  }
  