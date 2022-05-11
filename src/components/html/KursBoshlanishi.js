import React, {useEffect} from 'react';
// import InbrainLayout from "../InbrainLayout";
// import Header from "../Header";
import HeaderKurs from "../HeaderKurs";
import ReactPlayer from "react-player";
import {Link,} from "react-router-dom";
import {Player, LoadingSpinner} from 'video-react';

import Aos from "aos";
import "aos/dist/aos.css"
import Footer from "../Footer";
import "./../../scss/main.scss"

const Video = [
    {
        url: "https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh",
        title: " HTML 1-dars. Kirish qismi"
    },
    {
        url: "https://www.youtube.com/watch?v=GIyvTqEnAWY&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=2",
        title: " HTML 2-dars. VSC ni ko'chirish va o'rnatish va sozlamalar"
    },
    {
        url: "https://www.youtube.com/watch?v=LcKU-6J2_XE&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=3",
        title: " HTML 3-dars. HTTP, URL, HTML tarixi"
    },

    {
        url: "https://www.youtube.com/watch?v=-PJvQbZNxTw&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=4",
        title: " HTML 4-dars. HTML strukturasi"
    },
    {
        url: "https://www.youtube.com/watch?v=HwwQcbkElNI&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=5",
        title: " HTML 5-dars. HTML head qismi"
    },

    {
        url: "https://www.youtube.com/watch?v=Yzvram-Z2O4&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=6",
        title: " HTML 6-dars. HTML strukturasi amaliy"
    },
    {
        url: "https://www.youtube.com/watch?v=5KwXlI9rT-M&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=7",
        title: " HTML 7-dars. HTML favicon &  boshqa meta teglar"
    },
    {
        url: "https://www.youtube.com/watch?v=OZNdQ8akCmE&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh&index=8",
        title: " HTML 8-dars.  Favicon yaratish va uni saytga qo'yish"
    },



]
const KursBoshlanishi = (props) => {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);
    return (
        <div>
            <div className="kursBoshlanishi">
                <HeaderKurs/>
                <div className="container">
                    <div className="row">

                        <div className="">
                            <h2>Привет мы команда Inbrain - посмотри пожалуйста видео чтобы продолжить дальше обучение :
                                )</h2>
                            <p>
                                Давай знакомится мы команда inbrain которая создала курсы по веб разработке <span> HTML CSS JS. </span>
                                Актуальные знания от признанных экспертов для новичков.
                            </p>
                            <p>
                                На платформе можно получить знания по актуальным темам и востребованные навыки. Все
                                курсы нацелены на практику: мы следим за актуальностью материала и помогаем с
                                трудоустройством и стажировкой.
                            </p>
                            <h2 className="mt-4">Посмотрите видео: Что такое веб разработка ?</h2>
                        </div>
                        <div data-aos="fade-right" className="col-7 mt-5  " style={{height: "600px"}}>


                            {/*<iframe src=""></iframe>*/}
                            <div className="videoRegistrOne">
                                <ReactPlayer
                                    onDisablePIP={false}
                                    width="100%"
                                    height="440px"
                                    onProgress
                                    controls
                                    url="https://www.youtube.com/watch?v=_e61WuTXc4E&list=PLpRkv-CMsu3X4nVukPFCaZUxqioeuGBZh"/>
                            </div>

                        </div>

                        <div id="scrol" className="col-5 mt-5 " data-aos="fade-up">
                            {Video.map((item, index) => (
                                <div className="d-flex w-100 justify-content-between align-items-center videoRight">
                                    <div className="videoRegistr w-50">
                                        <ReactPlayer
                                            onDisablePIP={false}
                                            width="100%"
                                            height="140px"
                                            // LoadingSpinner
                                            controls

                                            url={item.url}/>
                                    </div>
                                    <div className="w-50 p-4 d-flex justify-content-center align-items-center">
                                        <p>{item.title}</p></div>
                                </div>
                            ))}
                        </div>


                        <div className="col-12 p-0">
                            <div className="container">
                                <div className="row kursRow">
                                    <div className="col-4">

                                        <div className="cardd">
                                            <img src="./imagess/Gro1.png" className="w-100"/>
                                        </div>

                                    </div>
                                    <div className="col-8">
                                        {/*<Link to="/CourseStartone">*/}
                                        <p style={{cursor: "pointer"}}>Курс</p>
                                        {/*</Link>*/}
                                        <h2>
                                            Веб-разработчик с нуля до PRO
                                        </h2>
                                        <h3>
                                            Вы научитесь верстать сайты на HTML и CSS, изучите
                                            JavaScript. И сделаете первые
                                            проекты для портфолио.
                                        </h3>
                                        <div className="d-flex align-items-center mt-4">
                                            <Link to="/CourseStartone" className="kursLink">Начать вводный курс</Link>
                                            <span>10 месяцев</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer/>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default KursBoshlanishi;
