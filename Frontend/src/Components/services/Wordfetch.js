import AxiosWord from "../helpers/AxiosWordfetch";

export async function Wordfetch(){
    try {
        const response = await AxiosWord.get('/array_words')
        return response.data
    } catch (error) {
        console.log(error)
        return null;
    }
}