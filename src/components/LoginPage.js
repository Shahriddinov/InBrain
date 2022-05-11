import React, {useEffect, useState} from 'react';
import axios from "axios";

function LoginPage(props) {

    const [login, setLogin] = useState({
        "phone": "",
        "user_name": ""
    })
    const [phone, setPhone] = useState('');
    const [user_name, setUser_Name] = useState('');
    useEffect(() => {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIwNTM4NzM3LTlkZTItNDE4Ny1hNzg2LWRiOGM1NTliZjVkNCIsImlhdCI6MTY0OTY4OTk1MH0.mq_Vk1wQAun45YqKUJCAEnVQLLRakiC2JSQ9nDeEMMk")
    }, []);

    function InLogin() {
        console.log({phone: phone, user_name: user_name})
        axios.post('https://inbarinn.herokuapp.com/user/sign-up', {phone: phone, user_name: user_name})
            .then(res => {
                // console.log(res.data.data)
            })
            .catch(error => {
                // console.log(error)
            })
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <input onChange={(e) => setPhone(e.target.value)} type="text" name="text" placeholder="Name"/>
            <input onChange={(e) => setUser_Name(e.target.value)} type="text" name="text" placeholder="Massage"/>
            <button onClick={InLogin}>Sign up</button>
        </div>
    );
}

export default LoginPage;
