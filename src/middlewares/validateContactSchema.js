export function validateContactSchema(schema) {
    return (req, res, next) => {
      const validation = schema.validate(req.body.contact, {
        abortEarly: false,
      });
      
      if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        let message = "";
  
        Array.from(errors).forEach((error) => {
          if (error.includes("phone")) message += "Número de telefone inválido!\n";
          if (error.includes("cpf")) message += "CPF inválido!\n";
        });
        console.log("Contact");
        return res.status(422).send({ errors, message });
      }
  
      next();
    };
  }
  