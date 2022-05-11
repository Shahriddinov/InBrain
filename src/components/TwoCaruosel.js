import React from "react"
import Carousel from "react-elastic-carousel";
import Item from "../Item";
import Footer from "./Footer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Taim = [
    {
        name: "Петров. И",
        pho: "./images/Frame.png",
        text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная\n" +
            "                            возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь\n" +
            "                            ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который\n" +
            "                            я полностью завершила. Я очень довольна\n" +
            "                            своим решением взять этот курс."
    },
    {
        name: "Петров. И",
        pho: "./images/Frame.png",
        text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная\n" +
            "                            возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь\n" +
            "                            ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который\n" +
            "                            я полностью завершила. Я очень довольна\n" +
            "                            своим решением взять этот курс."
    },
    {
        name: "Петров. И",
        pho: "./images/Frame.png",
        text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная\n" +
            "                            возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь\n" +
            "                            ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который\n" +
            "                            я полностью завершила. Я очень довольна\n" +
            "                            своим решением взять этот курс. "
    },
    {
        name: "Петров. И",
        pho: "./images/Frame.png",
        text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная\n" +
            "                            возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь\n" +
            "                            ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который\n" +
            "                            я полностью завершила. Я очень довольна\n" +
            "                            своим решением взять этот курс. "
    },
    {
        name: "Петров. И",
        pho: "./images/Frame.png",
        text: "Давно уже брожу по курсам inbrain, потому что здесь есть очень ценная\n" +
            "                            возможность попробовать изучить бесплатную часть с тем, чтобы понять, хочешь\n" +
            "                            ты заниматься этим или нет. Курс по критическому мышлению - первый курс, который\n" +
            "                            я полностью завершила. Я очень довольна\n" +
            "                            своим решением взять этот курс. "
    }

]

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 576, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
];

function





TwoCaruosel() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    }
    return(
        <div>
            <div className="hunt">
                <div className="you">Что говорят о нас студенты ?</div>
                <div className="we">Если вы хотите получить знания
                    и поменять специализацию, или освоить самую востребованную профессию во всем мире то вы правильно
                    сделали что выбрали нас ! </div>
               <div className="into">
                   <Carousel breakPoints={breakPoints}>
                       {Taim.map((item, index) => (

                           <Item key={index} className="card">
                               <div className="d-flex">
                                   <img src={item.pho} alt=""/>
                                   <div className="fami">{item.name}</div>

                               </div>
                               <div className="foul">
                                   <div className="coal">
                                       {item.text}
                                   </div>
                               </div>
                           </Item>

                       ))}
                   </Carousel>

               </div>
            </div>
            <Footer/>
        </div>
    )
}
export default TwoCaruosel
