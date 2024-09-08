import Card from "../Card/Card"
import img1 from "../../assets/Images/feature11.jpg"
import img2 from "../../assets/Images/feature22.jpg"
import { useNavigate } from "react-router-dom"

function Features(){
    const navigate = useNavigate()
    function Handler1(){
        navigate(`/predefinedpage`)
    }

    function Handler2() {
        navigate(`/custompage`)
    }
    return (
        <>
            <div className="bg-black w-full h-screen flex justify-center items-center gap-20">
                <Card img={img1} handler={Handler1} text={"Predefined Model"}/>
                <Card img={img2} handler={Handler2} text={"Custom Model"}/>

            </div>
        </>
    )
}

export default Features