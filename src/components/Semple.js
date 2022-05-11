import React from "react";
import Navbars from "./Navbars";
import {Dropdown, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import Footer from "./Footer";



function Semple() {
    return (
        <div style={{background: "#E5E5E5"}}>
            <div className="container">
                <div className="row">
                    <Navbars/>
                    <div className="col-11">
                        <div className="konst">
                            Добро пожалуйста в наш блог
                        </div>
                        <div className="low">

                            <div className="faild">
                                Все потоки
                                <Link
                                    // to="/Requests"
                                    to="/KursBoshlanishi"
                                >
                                    <span style={{
                                        marginLeft: "10px"
                                    }}> Веб разработка</span>
                                </Link>
                                <span style={{marginLeft: "10px"}}> Мобильная разработка</span>
                                <span style={{marginLeft: "10px"}}>Дизайн</span>
                            </div>
                            <div className="jon">
                                <div className="search">
                                    <input type="text" name="search" placeholder="    Поиск.... " className="search-input"/>
                                    <a href="#" className="search-btn">
                                        <img src="./images/Group.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <Dropdown style={{
                                marginTop: "33px",
                            }}>
                                <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{
                                    border: "none",
                                    hover: "white"
                                }}>
                                    Новые
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown style={{
                                marginTop: "33px",
                            }}>
                                <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{
                                    border: "none",
                                    hover: "white"
                                }}>
                                    Категории
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="d-flex mt-5">
                            <div className="rent">
                                <div className="d-flex">
                                    <div className="bont"></div>
                                    <div className="inbra">Inbrain</div>
                                    <div className="feb">11 февраля в 19:27</div>
                                </div>
                                <div className="das">
                                    От стажировки до оффера в inbrain: три истории выпускников
                                    inbtrain, которые стали рекламными аналитиками
                                </div>
                                <div className="d-flex">
                                    <div className="mainds">
                                        Блог компании *
                                    </div>
                                    <div className="asids">
                                        Inbrain Анализ и проектирование систем *
                                    </div>
                                    <div className="wens">
                                        Учебный процесс в IT Веб-аналитика
                                    </div>
                                </div>
                                <div className="hans">
                                    *Карьера в IT-индустрии
                                </div>
                                <div className="fet">
                                    <img className="w-100" src="./images/girl.png" alt=""/>
                                </div>
                                <div className="dei">
                                    Большую часть времени на стажировке мы изучали Директ с Метрикой как продукт.
                                    А ещё рекламу и то, как она устроена с точки зрения маркетинга и аналитики.
                                    Мне понравилось, что с нами делились опытом сотрудники Яндекса. Было много встреч с
                                    классными ребятами из аналитики, маркетинга и поддержки продукта с экспертизой в разных
                                    областях.
                                </div>
                                <div className="dei mt-5">
                                    Во время стажировки мы работали в командах, но заключительный проект
                                    был задачей для самостоятельного выполнения. По моим ощущениям, я полностью провалил это
                                    задание!
                                    Я не успел закончить исследование вовремя и подключался к защите по Zoom, набрасывая
                                    неструктурированные и не до конца проверенные выводы в плохо оформленную презентацию.
                                    Фидбек был ожидаемый, но при этом ценный: я понял, в каких сферах у меня были очевидные
                                    пробелы
                                    и что именно мне нужно доучить.

                                </div>
                                <div className="slaid">
                                    <img className="w-100" src="./images/slaid.png" alt=""/>
                                </div>
                                <div className="dei">
                                    После окончания учебной части стажировки я выполнял реальные задачи из бэклога.
                                    В процессе выполнения меня курировали наставники — аналитики и тимлид. Параллельно я
                                    подтягивал знания, которых мне не хватило для качественного выполнения тестового
                                    проекта.
                                </div>
                                <div className="dei mt-3">
                                    С поиском вакантных мест мне помогала ментор-руководитель стажировки.
                                    Я успел выполнить три тестовых в разные команды и по итогу получил оффер от
                                    регионального подразделения продаж малого и среднего бизнеса.
                                </div>
                                <div className="dei mt-3">
                                    Тем, кто сейчас учится на аналитиков, я бы советовал как можно раньше понять,
                                    что в работе будет важен не столько скил по инструментам типа Python и Excel,
                                    сколько аналитика сама по себе и ваш способ интерпретации данных. Изучите, как работает
                                    бизнес
                                    , поставив себя на место предпринимателя.
                                </div>
                                <div className="dei mt-3">
                                    Важно понимать, что стажировки невысоко оплачиваются, но главное в них —
                                    шанс показать себя и научиться чему-то новому. Определите для себя цель: например,
                                    попасть в
                                    крупную компанию, где вы будете расти, развиваться и заниматься интересными для себя
                                    задачами.
                                    Тогда стажировка имеет смысл: на ней вы
                                    сможете детально изучить продукт, а заодно получите ценные консультации экспертов и
                                    прокачаете необходимые навыки.
                                </div>
                                <div className="d-flex justify-content-between">
                                    <Link to="/Stajrovka">
                                        <button className="nem text-center ">
                                            <img style={{marginLeft: "-15px", marginRight: "10px"}} src="./images/Ve.png"
                                                 alt=""/>
                                            Назад
                                        </button>
                                    </Link>
                                    <div className="seew">
                                        <img src="./images/ten.png" alt=""/>
                                    </div>

                                </div>
                            </div>
                            <div className="tenss">
                                <div className="sain">
                                    <div className="cate">Категории</div>
                                    <div className="nexts">Веб разработка HTML CSS</div>
                                    <div className="nexts">Прогромирование PHP <span
                                        style={{color: "#1C84FF"}}>Python</span></div>
                                    <div className="nexts">Мобильная разработка</div>
                                    <div className="nexts">Дизайн Figma Photoshop</div>
                                    <div className="nexts"><span style={{color: "#1C84FF"}}>Опыт</span> Техническое задание
                                    </div>
                                    <div className="nexts">Работа в команде</div>
                                    <div className="nexts">Практика</div>
                                    <div className="nexts">Карьера в IT индустрии</div>
                                    <Link to="/Semple">
                                        <button className="allsa">
                                            Смотреть все
                                            <img src="./images/Vector2.png" alt=""/>
                                        </button>
                                    </Link>

                                </div>
                            </div>

                        </div>
                        <div className="d-flex mt-5">
                            <div className="rent">
                                <div className="d-flex justify-content-between">
                                    <div className="keys">
                                        Комментарий:
                                        <span style={{color: "#1C84FF"}}> 18</span>
                                    </div>
                                    <img style={{
                                        width: "41px",
                                        height: "41px",
                                        marginTop: "38px",
                                        marginRight: "30px",
                                        cursor: "pointer"
                                    }} src="./images/image2.png" alt=""/>
                                </div>
                                <hr/>
                                <div className="d-flex">
                                    <div className="bont"></div>
                                    <div className="inbra">Alicherov M</div>
                                    <div className="feb">11 февраля в 19:27</div>
                                </div>
                                <div className="titles">Такие данные есть: до конца обучения доходит 59% студентов.</div>
                                <div className="d-flex mt-5">
                                    <div className="bont"></div>
                                    <div className="inbra">Nigmatulin F</div>
                                    <div className="feb">11 февраля в 19:27</div>
                                </div>
                                <div className="titles">Такие данные есть: до конца обучения доходит 59% студентов.</div>
                                <div className="d-flex mt-5">
                                    <div className="bont"></div>
                                    <div className="inbra">Nigmatulin F</div>
                                    <div className="feb">11 февраля в 19:27</div>
                                </div>
                                <div className="titles">Такие данные есть: до конца обучения доходит 59% студентов.</div>
                                <div className="d-flex mt-5 ">
                                    <div className="bont"></div>
                                    <div className="inbra">Alicherov M</div>
                                    <div className="feb">11 февраля в 19:27</div>
                                </div>
                                <div className="titles mb-5">Такие данные есть: до конца обучения доходит 59% студентов.
                                </div>
                                <hr/>
                                <div className="keys">Написать комментарий</div>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control className="gro" as="textarea" placeholder="Ваш комментарий" rows={3}/>
                                </Form.Group>
                                <button className="saved">
                                    Отправить
                                    <img src="./images/Vector14.png" alt=""/>
                                </button>
                            </div>

                            <div className="tenss1" style={{marginTop:"-125%"}}>
                                <div className="sain1">
                                    <div className="cate1">Ссылки</div>
                                    <div className="lent">Веб разработка</div>
                                    <div className="lents">
                                        От стажировки до оффера в inbrain: три истории выпускников inbtrain, которые стали
                                        рекламными аналитиками
                                    </div>
                                    <div className="lent">Веб разработка</div>
                                    <div className="lents">
                                        От стажировки до оффера в inbrain: три истории выпускников inbtrain, которые стали
                                        рекламными аналитиками
                                    </div>
                                    <div className="lent">Веб разработка</div>
                                    <div className="lents">
                                        От стажировки до оффера в inbrain: три истории выпускников inbtrain, которые стали
                                        рекламными аналитиками
                                    </div>
                                    <div className="lent">Веб разработка</div>
                                    <div className="lents">
                                        От стажировки до оффера в inbrain: три истории выпускников inbtrain, которые стали
                                        рекламными аналитиками
                                    </div>
                                    <div className="lent">Веб разработка</div>
                                    <div className="lents">
                                        От стажировки до оффера в inbrain: три истории выпускников inbtrain, которые стали
                                        рекламными аналитиками
                                    </div>

                                </div>
                            </div>

                        </div>
                        <Footer/>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Semple
