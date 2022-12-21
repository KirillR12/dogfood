import React, {useState} from "react";

const Login = (change) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");


const sendForm = (e) => {
    e.preventDefault();
    const body = {
        email: inp1,
        password: inp2
    }
    console.log(body);
}

    return <form onSubmit={sendForm}>
        <input type="email" placeholder="Введите вашу почту" value={inp1} onChange={(e) => {setInp1(e.target.value)}}/>
        <input type="password" placeholder="Введите пароль" value={inp2} onChange={(e) => {setInp2(e.target.value)}}/>
<button className="btn" type="submit">Войти</button>
<button className="btn link" type="button">Зарегистрироваться</button>
    </form>
}

export {
    Login
}