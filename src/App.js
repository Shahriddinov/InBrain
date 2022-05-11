import React, {useState} from "react"
import Lefts from "./components/Lefts"
import {Link, Route, Routes} from "react-router-dom"
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Basic from "./components/Basic";
import World from "./components/World";
import Stajrovka from "./components/Stajrovka";
import Semple from "./components/Semple";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
function App(props) {
    // console.log(props);

    const [openClose, setOpenclose] = useState(true);
    const openClosee = () => {
        setOpenclose(!openClose);
        // console.log(openClose)
    }
    // const [button, setButton] = useState(false);
    //
    // function toggleButton() {
    //     setButton(!button)
    // }
  return (
   <div>
       <div className="Homen" >
          <Home/>
          {/*<LoginPage/>*/}
           {/*<div className={button ? 'LeftSide2' : "lefSide"}>*/}
           {/*    <div onClick={toggleButton} className={button ? 'buttonForLeftMain2' : "buttonForLeftMain"}>*/}
           {/*        {*/}
           {/*            button ? <img src="./images/Group1.png"className="delet" alt=""/> : <img className="edit" src="./images/Vector14.png" alt=""/>*/}
           {/*        }*/}
           {/*    </div>*/}
           {/*</div>*/}
           {/*<div className={button ? "left" : "right"}>*/}
           {/*    <Routes>*/}
           {/*        <Route path="/" element={<Basic/>}/>*/}
           {/*        <Route path="/World" element={<World/>}/>*/}
           {/*        <Route path="/Lefts" element={<Lefts/>}/>*/}
           {/*        <Route path="/Stajrovka" element={<Stajrovka/>}/>*/}
           {/*        /!*<Route path="/Profile" element={<Profile/>}/>*!/*/}
           {/*        /!*<Route path="/Lesson" element={<Lesson/>}/>*!/*/}
           {/*        /!*<Route path="/Education" element={<Education/>}/>*!/*/}
           {/*        <Route path="/Semple" element={<Semple/>}/>*/}

           {/*    </Routes>*/}
           {/*</div>*/}
       </div>


   </div>
  );
}

export default App;
