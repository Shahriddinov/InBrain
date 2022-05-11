import React from "react";
import Navbars from "./Navbars";
import TwoCaruosel from "./TwoCaruosel";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const Basic =[
    {
        Array: "Новости компании",
        New: "Новое",
        News: "Популярное"
    }
]


const IsChanged =[
    {
        Img1: "./images/male.png",
        Img2: "./images/logo 3.png",
        One: "Открытый урок",
        Times: "23.03.2022",
        Lesson: "Приглашаем на открытый урок который состоится",
        Lesson1: "Конференция",
        Web: "Веб разработка",
        Het: "HTML",
        Caa: "CSS",
        wad: "JavaScript",
        ling: "С целью воспитания и уважения к культуре и традициям своего народа, родному\n" +
            "                                    языку в 8Г классе прошел открытый урок – конференция на тему «Язык и культура моего\n" +
            "                                    края». В ходе урока ребята\n" +
            "                                    ближе познакомились с историей, культурой, традициями русского, мордовского и\n" +
            "                                    татарского языков.",
        gag: "Прочитать все",
        Img3: "./images/Vector 4.png"
    },
    {
        Img1: "./images/male.png",
        Img2: "./images/logo 3.png",
        One: "Открытый урок",
        Times: "23.03.2022",
        Lesson: "Приглашаем на открытый урок который состоится",
        Lesson1: "Конференция",
        Web: "Веб разработка",
        Het: "HTML",
        Caa: "CSS",
        wad: "JavaScript",
        ling: "С целью воспитания и уважения к культуре и традициям своего народа, родному\n" +
            "                                    языку в 8Г классе прошел открытый урок – конференция на тему «Язык и культура моего\n" +
            "                                    края». В ходе урока ребята\n" +
            "                                    ближе познакомились с историей, культурой, традициями русского, мордовского и\n" +
            "                                    татарского языков.",
        gag: "Прочитать все",
        Img3: "./images/Vector 4.png"
    },
    {
        Img1: "./images/male.png",
        Img2: "./images/logo 3.png",
        One: "Открытый урок",
        Times: "23.03.2022",
        Lesson: "Приглашаем на открытый урок который состоится",
        Lesson1: "Конференция",
        Web: "Веб разработка",
        Het: "HTML",
        Caa: "CSS",
        wad: "JavaScript",
        ling: "С целью воспитания и уважения к культуре и традициям своего народа, родному\n" +
            "                                    языку в 8Г классе прошел открытый урок – конференция на тему «Язык и культура моего\n" +
            "                                    края». В ходе урока ребята\n" +
            "                                    ближе познакомились с историей, культурой, традициями русского, мордовского и\n" +
            "                                    татарского языков.",
        gag: "Прочитать все",
        Img3: "./images/Vector 4.png"
    },
    {
        Img1: "./images/male.png",
        Img2: "./images/logo 3.png",
        One: "Открытый урок",
        Times: "23.03.2022",
        Lesson: "Приглашаем на открытый урок который состоится",
        Lesson1: "Конференция",
        Web: "Веб разработка",
        Het: "HTML",
        Caa: "CSS",
        wad: "JavaScript",
        ling: "С целью воспитания и уважения к культуре и традициям своего народа, родному\n" +
            "                                    языку в 8Г классе прошел открытый урок – конференция на тему «Язык и культура моего\n" +
            "                                    края». В ходе урока ребята\n" +
            "                                    ближе познакомились с историей, культурой, традициями русского, мордовского и\n" +
            "                                    татарского языков.",
        gag: "Прочитать все",
        Img3: "./images/Vector 4.png"
    },
    {
        Img1: "./images/male.png",
        Img2: "./images/logo 3.png",
        One: "Открытый урок",
        Times: "23.03.2022",
        Lesson: "Приглашаем на открытый урок который состоится",
        Lesson1: "Конференция",
        Web: "Веб разработка",
        Het: "HTML",
        Caa: "CSS",
        wad: "JavaScript",
        ling: "С целью воспитания и уважения к культуре и традициям своего народа, родному\n" +
            "                                    языку в 8Г классе прошел открытый урок – конференция на тему «Язык и культура моего\n" +
            "                                    края». В ходе урока ребята\n" +
            "                                    ближе познакомились с историей, культурой, традициями русского, мордовского и\n" +
            "                                    татарского языков.",
        gag: "Прочитать все",
        Img3: "./images/Vector 4.png"
    },
]

function World() {
    return (
        <div className="container">
            <div className="row">
                <Navbars/>
                <div className="col-11 ">
                    {Basic.map((item, index)=>(
                        <div key={index} className=" d-flex justify-content-between">
                            <div className="new">{item.Array}</div>
                            <div className="come">
                                <Link to="/Lefts">
                                    <div className="me">{item.New}</div>
                                </Link>

                                <div className="the">{item.News}</div>
                            </div>
                        </div>
                    ))}

                    {/*<div className="wont">*/}
                        {IsChanged.map((item, index)=>(
                            <div className="wont">
                                <div className="image">
                                    <img className="eleven" src={item.Img1} alt=""/>
                                    <img className="fourten" src={item.Img2} alt=""/>
                                    <button className="sixten">{item.One}</button>
                                </div>
                                <div className="infor">
                                    <div className="middle">
                                        <div className="data">{item.Times}</div>
                                        <div className="long">{item.Lesson}</div>
                                        <div className="alls">
                                            <div className="con">{item.Lesson1}</div>
                                            <div className="web">{item.Web}</div>
                                            <div className="star">{item.Het}</div>
                                            <div className="continue">{item.Caa}</div>
                                            <div className="finis">{item.wad}</div>
                                        </div>
                                        <div className="kill">{item.ling}</div>
                                        <button className="boxs">{item.gag}
                                            <img src={item.Img3} alt=""/></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <button className="sent">
                        Смотреть еще
                        <img src="./images/Vector2.png" alt=""/>
                    </button>
                    <TwoCaruosel/>
                </div>

            </div>
        </div>
    )
}

export default World
