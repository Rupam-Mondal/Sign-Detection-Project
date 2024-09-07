import Axiosletter from "../helpers/Axiosletterfetch";

export async function Letterfetch(){
    try{
        const response = await Axiosletter.get('/get_array')
        // console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error)
        return null
    }
}