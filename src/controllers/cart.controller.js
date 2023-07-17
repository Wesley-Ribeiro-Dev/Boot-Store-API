import { ObjectId } from "mongodb";
import { db } from "../database/database.connection.js";

export async function getCartList(req, res) {
	try {
		let itens = await db.collection("cart").find().toArray();
		res.send(itens);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

export async function updateItemQuantity(req, res) {
	const { id } = req.params;

	try {
		await db
			.collection("cart")
			.updateOne(
				{ _id: new ObjectId(id) },
				{ $set: { quantity: req.body.quantity } }
			);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

export async function deleteCartList(req, res) {
	try {
		await db.collection("cart").deleteMany();
	} catch (err) {
		res.status(500).send(err.message);
	}
}
