import React,{useState,useEffect} from 'react';
import InbrainLayout from "./InbrainLayout";
import useCollapse from "react-collapsed";
import {Accordion, Collapse, Button, Card,Row,Col} from "react-bootstrap";
import Basic from "./Basic";
import {Route, Routes} from "react-router";
import World from "./World";
import Lefts from "./Lefts";
import Stajrovka from "./Stajrovka";
import Semple from "./Semple";
import HeaderKurs from "./HeaderKurs";
import CourseStartone from "./html/CourseStartone";
import CourseStarttwo from "./html/CourseStarttwo";
import Courseyou from "./html/CourseYou"
import Footer from "./Footer";
import "../scss/locale.scss"
import KursBoshlanishi from "./html/KursBoshlanishi";
import StudentCard from "./html/StudentCard";
import CourseHtml1 from "./html/CourseHtml1";
import CourseHtml1Check from "./html/CourseHtml1Check";
import Requests from "../Requests";




const Home = (props) => {


    return (
        <>
        <InbrainLayout history={props.history}>
            <div>
                {/*<Basic/>*/}
                <Routes>
                    <Route path="/" element={<Basic/>}/>
                    <Route path="/World" element={<World/>}/>
                    <Route path="/Lefts" element={<Lefts/>}/>
                    <Route path="/Stajrovka" element={<Stajrovka/>}/>
                    {/*<Route path="/Profile" element={<Profile/>}/>*/}
                    {/*<Route path="/Lesson" element={<Lesson/>}/>*/}
                    {/*<Route path="/Education" element={<Education/>}/>*/}
                    <Route path="/Semple" element={<Semple/>}/>
                    <Route path="/KursBoshlanishi" element={<KursBoshlanishi/>}/>
                    <Route path="/CourseStartone" element={<CourseStartone/>}/>
                    <Route path="/CourseStarttwo" element={<CourseStarttwo/>}/>
                    <Route path="/Courseyou" element={<Courseyou/>}/>
                    <Route path="/StudentCard" element={<StudentCard/>}/>
                    <Route path="/CourseHtml1" element={<CourseHtml1/>}/>
                    <Route path="/CourseHtml1Check" element={<CourseHtml1Check/>}/>
                    <Route path="/Requests" element={<Requests/>}/>

                </Routes>
            </div>

        </InbrainLayout>

        </>
    );
};

export default Home;
