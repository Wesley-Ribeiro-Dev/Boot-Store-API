import { db } from "../database/database.connection.js";

export async function getProducts(req, res) {
	/* não precisa de token para ver os produtos
    const token = req.headers.authorization.replace('Bearer ', '');

    if(!token) return res.status(401);*/

	try {
		let products = await db.collection("products").find().toArray();
		res.send(products);
	} catch (err) {
		res.status(500).send(err.message);
	}
}

export async function addToCart(req,res) {
    const { id, name, price, image, quantity } = req.body;

    try {
        await db.collection("cart").insertOne({ id, name, price, image, quantity});
        res.sendStatus(201);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}
