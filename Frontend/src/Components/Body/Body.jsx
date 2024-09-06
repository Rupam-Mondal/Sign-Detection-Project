import { useRef } from "react";
import "./Body.css";
import bg2 from "../../assets/Images/bg2.jpg";
import Features from "../FeaturesSection/Features";

function Body() {
    const featuresRef = useRef(null);

    function scrollToFeatures() {
        if (featuresRef.current) {
            featuresRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <>
            <div className="w-full h-[480px] bg-black box-border flex">
                <div className="h-full w-1/2 box-border px-14 py-10 flex flex-col justify-center items-start gap-6">
                    <div className="text-white w-full h-40 text-[80px] leading-[0.9] animate-fadeIn mt-14 font-bold animate-slide-in-left delay-300">
                        Breaking The Silence
                    </div>
                    <div className="text-white text-left text-2xl mt-6 animate-slide-in-left delay-700">
                        Our platform empowers the deaf and mute communities by breaking
                        communication barriers. Using innovative tools, we enable people to
                        connect and express themselves freely. Join us in making
                        communication accessible for all.
                    </div>
                    <div className="animate-slide-in-left delay-500">
                        <button
                            onClick={scrollToFeatures}
                            className="h-12 w-28 box-border  text-white bg-black border-2 border-yellow-600 font-semibold transform transition duration-500 hover:scale-105 hover:border-violet-800"
                        >
                            Get Started
                        </button>
                    </div>
                </div>


                <div className="h-full w-1/2 box-border body-left flex justify-center items-center">
                    <img src={bg2} alt="" className="h-60 w-60 rounded-full animate-fadeIn" />
                </div>

            </div>

            <div ref={featuresRef}>
                <Features />
            </div>
        </>
    );
}

export default Body;
