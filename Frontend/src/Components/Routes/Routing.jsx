import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Pretrainedpage from "../Pages/Pretrainedpage"
import Custompage from "../Pages/Custompage"

function Routing(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/predefinedpage" element={<Pretrainedpage/>}></Route>
                <Route path="/custompage" element={<Custompage/>}></Route>
            </Routes>
        </>
    )
}
export default Routing