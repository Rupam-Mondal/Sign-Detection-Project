import Body from "../Body/Body";
import Contributers from "../Contributers/Contributers";
import Features from "../FeaturesSection/Features";
import Navbar from "../Navbar/Navbar";

function Home(){
    return (
        <>
            <Navbar />
            <Body />
            {/* <Features />  */}
            <Contributers/>  
        </>
    )
}



export default Home