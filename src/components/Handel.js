import React, {Component, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import Carousel from "react-elastic-carousel";
import Item  from "../Item";
import TwoCaruosel from "./TwoCaruosel";
import Navbars from "./Navbars";
import axios from "axios";

const Changes = [
    {
        name: './images/Group01.png',
        title: 'HTML5',
        text: 'Начать обучение'
    },
    {
        name: './images/CSS.png',
        title: 'CSS',
        text: 'Начать обучение'
    },
    {
        name: './images/java.png',
        title: 'JavaScript',
        text: 'Начать обучение'
    }
]
const Said = [
    {
        name: './images/dd.png',
        title: 'PHP',
        text: 'Совсем скоро'
    },
    {
        name: './images/pre.png',
        title: 'JAVA',
        text: 'Совсем скоро'
    },
    {
        name: './images/deve.png',
        title: 'Mobile Dev.',
        text: 'Совсем скоро'
    }
]

const Hendel = [
    {
        user: "./images/male.png",
        myUser: "./images/logo 3.png",
        bot: "Открытый урок",
        data: "23.03.2022",
        title: "Приглашаем на открытый урок который состоится",
        text: "Анонс новости небольшое описание читай не читай а лучше почитай.\n" +
            "Анонс новости небольшое описание читай не читай а лучше почитай."
    },
    {
        user: "./images/male.png",
        myUser: "./images/logo 3.png",
        bot: "Открытый урок",
        data: "23.03.2022",
        title: "Приглашаем на открытый урок который состоится",
        text: "Анонс новости небольшое описание читай не читай а лучше почитай.\n" +
            "Анонс новости небольшое описание читай не читай а лучше почитай."
    },
    {
        user: "./images/male.png",
        myUser: "./images/logo 3.png",
        bot: "Открытый урок",
        data: "23.03.2022",
        title: "Приглашаем на открытый урок который состоится",
        text: "Анонс новости небольшое описание читай не читай а лучше почитай.\n" +
            "Анонс новости небольшое описание читай не читай а лучше почитай."
    },
    {
        user: "./images/male.png",
        myUser: "./images/logo 3.png",
        bot: "Открытый урок",
        data: "23.03.2022",
        title: "Приглашаем на открытый урок который состоится",
        text: "Анонс новости небольшое описание читай не читай а лучше почитай.\n" +
            "Анонс новости небольшое описание читай не читай а лучше почитай."
    },
    {
        user: "./images/male.png",
        myUser: "./images/logo 3.png",
        bot: "Открытый урок",
        data: "23.03.2022",
        title: "Приглашаем на открытый урок который состоится",
        text: "Анонс новости небольшое описание читай не читай а лучше почитай.\n" +
            "Анонс новости небольшое описание читай не читай а лучше почитай."
    },
    {
        user: "./images/male.png",
        myUser: "./images/logo 3.png",
        bot: "Открытый урок",
        data: "23.03.2022",
        title: "Приглашаем на открытый урок который состоится",
        text: "Анонс новости небольшое описание читай не читай а лучше почитай.\n" +
            "Анонс новости небольшое описание читай не читай а лучше почитай."
    },
    {
        user: "./images/male.png",
        myUser: "./images/logo 3.png",
        bot: "Открытый урок",
        data: "23.03.2022",
        title: "Приглашаем на открытый урок который состоится",
        text: "Анонс новости небольшое описание читай не читай а лучше почитай.\n" +
            "Анонс новости небольшое описание читай не читай а лучше почитай."
    }
]
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
];
function Handel() {

    // const [course, setCourse] =useState([]);
    // useEffect(() => {
    //     axios.get('https://inbarinn.herokuapp.com/course/getCourse/:${course_id}',{
    //         headers: {
    //             Authorization: localStorage.getItem("token"),
    //         },
    //     }).then((response)=>{
    //         // console.log(response.data.data)
    //         setCourse(response.data.data)
    //     }).catch((error)=>{
    //         console.error("error !")
    //     })
    // }, []);

    return (
        <div className="row">
            <div className="col-11">
                <div className="d-flex">
                    <div className="one">
                        <div className="chem">Чему мы учим ?</div>
                        <div className="sloce">
                            Если вы хотите получить знания и поменять специализацию, или освоить
                            самую востребованную профессию во всем мире то вы правильно
                            сделали что выбрали нас !
                        </div>
                    </div>
                    <div className="two">
                        <div className="chem">Давайте знакомится</div>
                        <div className="box1">
                            <div className="bos">
                                Жми сюда :)
                            </div>
                            <img src="./images/layer.png"/>
                        </div>
                    </div>
                </div>
                <div className="log">
                    <div className="bo2">
                        <div className="img">
                            <img src="./images/gd.png"/>
                        </div>
                    </div>
                    <div className="bo3">
                        <div className="cuors">Курс</div>
                        <div className="main">
                            Веб-разработчик с нуля до PRO
                        </div>
                        <div className="feed">
                            Вы научитесь верстать сайты на HTML и CSS, изучите JavaScript.
                            И сделаете первые проекты для портфолио.
                        </div>
                        <div className="d-flex">
                            <button type="button" className="send">
                                Начать вводный курс
                            </button>
                            <div className="ten">10 месяцев</div>
                        </div>
                    </div>
                </div>
                <div className="ascid">
                    <div className="just">
                        <div className="technical">Технологии</div>
                        <button type="button" className="want">
                            Начать обучение

                        </button>
                    </div>
                    <div className="need">Обучение с нуля</div>
                    <div className="code">А вот технологии, которые будете использовать.</div>
                    <div className="hood">Мы регулярно сверяемся с действующими разработчиками и руководителями
                        из индустрии, чтобы в программе оставались только актуальные навыки и инструменты.
                    </div>

                    <div className="d-flex justify-content-between">
                        {Changes.map((item, index) => (
                            <div key={index} className="good">
                                <div className="and">
                                    <img src={item.name} alt=""/>
                                </div>
                                <div className="ones">{item.title}</div>
                                <div className="gold">
                                    <button>{item.text}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between">
                        {Said.map((item, index) => (
                            <div key={index} className="good mt-5">
                                <div className="and">
                                    <img src={item.name} alt=""/>
                                </div>
                                <div className="ones">{item.title}</div>
                                <div className="gold">
                                    <button>{item.text}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bor">
                    <div className="lenght">
                        Что именно вы будете делать, когда станете веб-разработчиком
                    </div>
                    <div className="d-flex mt-5">
                        <div className="two">
                            <div className="twe">Писать код на HTML, CSS и JavaScript</div>
                            <div className="tw">Разрабатывать сайты и веб-приложения</div>
                            <div className="tws">Работать над продуктом вместе с командой</div>
                            <div className="tww">Помогать бизнесу развиваться,
                                а пользователям — становиться счастливее
                            </div>
                        </div>
                        <div className="three">
                            <img className="wad" src="./images/window.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="gour">
                    <div className="title">
                        <div className="fer">Поможем в выборе!</div>
                        <div className="d-flex">
                            <img src="./images/Gro02.png" alt=""/>
                            <div className="too">Если у вас есть вопросы о формате или вы не
                                знаете, что выбрать, оставьте свой номер — мы позвоним, чтобы ответить на все ваши
                                опросы.
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <input type="name" name="name" placeholder="Имя"/>
                        <input type="number" name="number" placeholder="Телефон"/>
                        <input type="email" name="email" placeholder="Почта"/>
                        <div className="d-flex m-auto">
                            <div className="four">
                                Нажимая на кнопку, я соглашаюсь на обработку <span>персональных
                            данных</span> и с <span>правилами пользования платформой</span>
                            </div>
                            <button type="button">ОТПРАВИТЬ</button>
                        </div>
                    </div>
                </div>
                <div className="saul">
                    <div className="efl">
                        <div className="dad">Новости компании</div>


                        <Link to="/World">
                            <button>
                                Читать все новости
                                <img src="./images/Vector3.png" alt=""/>
                            </button>
                        </Link>
                    </div>
                    <div className="wool">
                        <Carousel breakPoints={breakPoints}>
                            {Hendel.map((item, index) => (
                           <div key={index}>
                               <Item className="card">
                                   <img className=" sauo w-100" src={item.user} alt=""/>
                                   <img className="daew" src={item.myUser} alt=""/>
                                   <button className="posi">{item.bot}</button>
                                   <div className="datee">{item.data}</div>
                                   <div className="animal">{item.title}</div>
                                   <div className="fog">{item.text}</div>
                               </  Item>
                           </div>
                            ))}
                        </Carousel>
                    </div>

                </div>

                <TwoCaruosel/>
            </div>

        </div>
    )

}

export default Handel
