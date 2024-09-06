import AxiosInstance from "../helpers/Axiosinstance";

export async function Cameratrigger() {
    try {
        const response = await AxiosInstance.post(''); 
        return response.data;
    } catch (error) {
        console.error("Error triggering the camera:", error);
        return null;
    }
}
