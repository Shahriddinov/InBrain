import React, {useState} from "react";
import Navbars from "./Navbars";
import {Dropdown} from "react-bootstrap";
import Footer from "./Footer";
import {Link} from "react-router-dom";


function Stajrovka() {
    const [isButton, setIsButton] = useState(false)
    return (
       <div style={{background: "#E5E5E5", width:"100%"}}>
           <div className="container" >
               <Navbars/>
               <div className="row">

                   <div className="col-11">
                       <div className="konst">
                           Добро пожалуйста в наш блог
                       </div>
                       <div className="low">
                           <div className="faild">
                               Все потоки <span style={{
                               marginLeft: "10px"
                           }}> Веб разработка</span>
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
                           <Dropdown style={{marginTop: "33px",
                           }}>
                               <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{border:"none",
                                   hover:"white"}}>
                                   Новые
                               </Dropdown.Toggle>

                               <Dropdown.Menu>
                                   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                               </Dropdown.Menu>
                           </Dropdown>
                           <Dropdown style={{marginTop: "33px",
                           }}>
                               <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{border:"none",
                                   hover:"white"}}>
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
                                   <div className="inbra">Inbrain </div>
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
                              <div className="d-flex justify-content-between">
                                  <button className="nem">
                                      Читать дальше
                                      <img src="./images/Vector14.png" alt=""/>
                                  </button>
                                  <div className="seew">
                                      <img src="./images/im.png" alt=""/>
                                  </div>

                              </div>
                           </div>
                           <div className="tenss">
                               <div className="sain">
                                   <div className="cate">Категории</div>
                                   <div className="nexts">Веб разработка HTML CSS</div>
                                   <div className="nexts">Прогромирование PHP <span style={{color:"#1C84FF"}}>Python</span></div>
                                   <div className="nexts">Мобильная разработка</div>
                                   <div className="nexts">Дизайн Figma Photoshop</div>
                                   <div className="nexts"><span style={{color: "#1C84FF"}}>Опыт</span> Техническое задание</div>
                                   <div className="nexts">Работа в команде</div>
                                   <div className="nexts">Практика</div>
                                   <div className="nexts">Карьера в IT индустрии</div>
                                   <Link to="/Semple"
                                         // to="/Requests"
                                   >
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
                               <div className="d-flex">
                                   <div className="bont"></div>
                                   <div className="inbra">Inbrain </div>
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
                               <div className="d-flex justify-content-between">
                                   <button className="nem">
                                       Читать дальше
                                       <img src="./images/Vector14.png" alt=""/>
                                   </button>
                                   <div className="seew">
                                       <img src="./images/im.png" alt=""/>
                                   </div>

                               </div>
                           </div>
                           <div className="tenss1">
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
                       <div className="d-flex mt-5">
                           <div className="rent">
                               <div className="d-flex">
                                   <div className="bont"></div>
                                   <div className="inbra">Inbrain </div>
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
                               <div className="d-flex justify-content-between">
                                   <button className="nem">
                                       Читать дальше
                                       <img src="./images/Vector14.png" alt=""/>
                                   </button>
                                   <div className="seew">
                                       <img src="./images/im.png" alt=""/>
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

export default Stajrovka
