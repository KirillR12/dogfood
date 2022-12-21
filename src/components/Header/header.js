import "./header.css"
import React, {useState} from "react";
import { Search } from "../Search/search";

const Header = ({user, setUser, products, setModalActive}) => {
    
    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("kirill");
        setUser("");
    }
    return (
    <header>
        <a className="logo" href="">
        <i className="fa-solid fa-dog">DogFood</i>
        <i className="fa-solid fa-dog"></i>
        </a>
        <Search data={products}/>
<nav className="menu">
    {user && <a href="">{user}</a>}
    {!user && <a href="" onClick={logIn}>Войти</a>}
    {user && <a href="" onClick={logOut}>Выйти</a>}
</nav>
    </header>
    )
}

export {
Header
}