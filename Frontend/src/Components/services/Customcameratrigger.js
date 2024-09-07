import Axiosintancetwo from "../helpers/Axiosinstancetwo"

export async function Customcameratrigger(){
    try{
        const response = await Axiosintancetwo.post('')
        console.log(response.data)
    }
    catch(err){
        console.log(err)
        return null
    }
}