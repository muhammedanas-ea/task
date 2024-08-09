import { imageUpload } from "../utils/cloudinary.js"

export const AddserviceDetails = async (req,res) =>{
    try{
        const image= await imageUpload(req.files.image)
        console.log(image)
    }catch(err){
        console.log(err)
    }
}