export function validateDeliverySchema(schema) {
    return (req, res, next) => {
      const validation = schema.validate(req.body.delivery, {
        abortEarly: false,
      });
      
      if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        let message = "";
  
        Array.from(errors).forEach((error) => {
          if (error.includes("name")) message += "Nome inválido!\n";
          if (error.includes("surname")) message += "Sobrenome inválido\n";
          if (error.includes("address")) message += "Endereço inválido!\n";
          if (error.includes("cep")) message += "CEP inválido!\n";
          if (error.includes("number")) message += "Número inválido!\n";
          if (error.includes("neighbourhood")) message += "Bairro inválido!\n";
          if (error.includes("city")) message += "Cidade inválida!\n";
          if (error.includes("state")) message += "Estado inválido!\n";
        });
        console.log(validation.error);
        return res.status(422).send({ errors, message });
      }
  
      next();
    };
  }
  