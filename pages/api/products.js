
import initMongoose from "@/lib/mongoose"
import Product from "@/models/products";
const  handler = async (req , res) => {
 await initMongoose();
    res.json( await Product.find().exec())
}

export default handler
