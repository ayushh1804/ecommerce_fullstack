
import initMongoose from "@/lib/mongoose"
import Product from "@/models/products";

export async function findAllProducts() {
    return Product.find().exec();
}

export default async function handler(req, res) {
    await initMongoose();
    const {ids} = req.query;
    if (ids) {
        const idsArray = ids.split(',');
        res.json(await Product.find({'_id': {$in:idsArray} }).exec());
    }
    else {
        res.json(await findAllProducts())
    }

}