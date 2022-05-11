import React, {useState} from "react"
import {InputGroup, OverlayTrigger, Popover, FormControl, Button, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import ReactPlayer from "react-player";
import Handel from "./Handel";
import Navbars from "./Navbars";
// import Carousel from "react-elastic-carousel";

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 576, itemsToShow: 1},
    {width: 768, itemsToShow: 1},
    {width: 1200, itemsToShow: 1},
];

function Basic() {

    const [button, setButton] = useState('false');

    function toggleButton() {
        setButton(!button)
    }
    return(
        <div className="container">
            <Navbars/>
            <div className="row">


                <div className="col-11 ">
                    <div className="jouch">
                        <Carousel fade>
                            <Carousel.Item className="card">
                                <img
                                    className="d-block w-100"
                                    src="./images/GG.jpg"
                                    alt="Second slide"
                                />
                                {/*<ReactPlayer*/}
                                {/*            width="100%"*/}
                                {/*            height="100%"*/}
                                {/*            controls url="https://www.youtube.com/watch?v=GIyvTqEnAWY&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=2"/>*/}
                            </Carousel.Item>
                            <Carousel.Item className="card">
                                <img
                                    className="d-block w-100"
                                    src="./images/GG.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="card">
                                <img
                                    className="d-block w-100"
                                    src="./images/GG.jpg"
                                    alt="Second slide"
                                />
                                {/*<ReactPlayer*/}
                                {/*            width="100%"*/}
                                {/*            height="100%"*/}
                                {/*            controls url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>*/}
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
                <Handel/>
            </div>
        </div>
    )

}
export default Basic
