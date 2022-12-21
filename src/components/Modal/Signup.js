import React, {useState} from "react";

const Signup = (change) => {
    const [inp1, setInp1] = useState("");
    const [inp2, setInp2] = useState("");
    const [inp3, setInp3] = useState("");
    const [test, setTest] = useState(true);

    const checkPass = (val, type="main") => {
type === "main" ? setInp2(val) : setInp3(val);

if (val) {
        if (type === "main") {
    setTest(val !== inp3);
    setInp2(val) 
        } else {
        setTest(val !== inp2);
        setInp3(val)
        }
    }
}

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
        <input type="password" placeholder="Введите пароль" value={inp2} onChange={(e) => {checkPass(e.target.value)}}/>
        <input type="password" placeholder="Введите пароль ещё раз" value={inp3} onChange={(e) => {checkPass(e.target.value, "secondary")}}/>
<button className="btn" type="submit" disabled={test}>Зарегистрироваться</button>
<button className="btn link" type="button" onClick={() => {change(prev => !prev)}}>Войти</button>
    </form>
}

export {
    Signup
}