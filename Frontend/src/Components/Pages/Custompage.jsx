import signimage from '../../assets/Images/signimage.jpg';
import { Cameratrigger } from '../services/Cameratriger';
import { useQuery } from 'react-query';
import { Letterfetch } from '../services/Letterfetch';
import { useEffect } from 'react';

function Custompage() {
    const { data, isLoading, isError, error, refetch } = useQuery('Letter', Letterfetch);

    const handleCameraClick = async () => {
        Cameratrigger();
    };
    useEffect(() => {
        const interval = setInterval(() => {
            refetch();
        }, 200);

        return () => clearInterval(interval); 
    }, [refetch]);

    return (
        <>
            <div className="h-screen w-full flex flex-col bg-black">
                <div className="h-4/5 w-full flex">
                    <div className="h-full w-1/2 flex justify-center items-center">
                        <div className="h-[380px] w-[330px] bg-gray-800 flex justify-center items-center rounded-lg">
                            <button className="w-32 bg-blue-500 text-white py-2 px-4 text-xl rounded-lg hover:bg-blue-600 transition duration-300"
                                onClick={handleCameraClick}>
                                Click here
                            </button>
                        </div>
                    </div>
                    <div className="h-full w-1/2 py-5">
                        <div className="text-white w-full h-1/5 flex justify-center text-3xl font-bold">All signs of Alphabets</div>
                        <div className="w-full h-4/5">
                            <img src={signimage} alt="sign language alphabet" className='h-full' />
                        </div>
                    </div>
                </div>
                <div className="h-1/5 w-full flex justify-center items-center">
                    <div className="flex h-3/5 justify-center items-center gap-3">
                        <div className="h-full bg-gray-600 w-96 rounded-lg outline-none text-xl text-gray-300 px-5 overflow-x-scroll output-box">
                            {data && data.map((v, i) => {
                                return <span key={i}>{v}</span>
                            })}
                        </div>
                        <div className="h-10 w-10 flex justify-center items-center">
                            <i className="fa-solid fa-microphone fa-xl cursor-pointer" style={{ color: "#ffffff" }}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Custompage;