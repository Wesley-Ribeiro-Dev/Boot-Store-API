import { db } from "../database/database.connection.js";

export async function saveOrder(req, res) {
  const { order, contact, delivery } = req.body;

  try {
    await db
      .collection("orders")
      .insertOne({ contactInfo: contact, orderInfo: order, deliveryInfo: delivery });
    return res.sendStatus(201);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
}
