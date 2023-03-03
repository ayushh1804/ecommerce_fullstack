
import initMongoose from "@/lib/mongoose"
const  handler = async (req , res) => {
 await initMongoose();
 
}

export default handler
