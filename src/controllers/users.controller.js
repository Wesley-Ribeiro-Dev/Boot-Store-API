import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { db } from "../database/database.connection.js";
import { registerSchema } from "../schemas/users.schemas.js";

export async function login(req, res) {
  const token = uuid();
  const { email, password } = req.body;

  if (!email) return res.sendStatus(422);

  try {
    const user = await db.collection("users").findOne({ email });

    if (!user) return res.sendStatus(404);

    if (user && bcrypt.compareSync(password, user.password)) {
      delete user.password;
      await db.collection("sessions").insertOne({ userID: user._id, token });
      return res.status(200).send(token);
    } else {
      return res.sendStatus(401);
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function register(req, res) {
  const { name, email, password } = req.body;

  const validation = registerSchema.validate(req.body);
  if (validation.error) {
    const errors = validation.error.details.map((details) => details.message);
    console.log(errors);
    return res.status(422).send(errors);
  }
  try {
    const verification = await db.collection("users").findOne({ email: email });
    if (verification) return res.sendStatus(409);

    const passwordHash = bcrypt.hashSync(password, 10);

    await db.collection("users").insertOne({
      name,
      email,
      password: passwordHash,
    });
  } catch (err) {
    res.status(500).send(err);
  }

  res.sendStatus(201);
}
