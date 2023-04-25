import React, { useState } from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import s from "./form.module.scss"
import { Button } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../BASE_URL/BASE_URL';

const Form = () => {
    const [user, setUser] = useState({
        name: "Artem",
        password: ""
    })

    const navigate = useNavigate()

    const registration = () => {
        console.log(user)
        axios
        .post(`${BASE_URL}/user`, {
            ...user,
            id: Date.now()
        })
        .then((res) => {
            localStorage.setItem("token", res.data.id)
            if(res.data.id) {
                navigate("/")
            }
        })
    }
    
    return (
        <div className={s.container}>
            <div>
                <Input className={s.form_input} size="large" placeholder="large size" value={user.name} prefix={<UserOutlined />} onChange={(e)=>setUser({...user, name: e.target.value})} />
                <Input type="password" className={s.form_input} size="large" placeholder="large size" value={user.password} prefix={<UserOutlined />} onChange={(e)=>setUser({...user, password: e.target.value})} />
                <Button onClick={registration} className={s.form_button}>Add user</Button>
            </div>
        </div>
    );
};

export default Form;