
import initMongoose from "@/lib/mongoose"
import Product from "@/models/products";

export async function findAllProducts () {
    return Product.find().exec();
}

export default async function handler(req, res){
    await initMongoose()
    res.json(await findAllProducts())
}