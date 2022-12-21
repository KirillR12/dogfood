import './App.css';
import React, {useState} from "react";
import products from "./assets/data.json";
import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import { Catalog } from './components/Pages/Catalog';
import { Home } from './components/Pages/Home';
import { Modal } from './components/Modal/Modal';



const Dog = [1, 2, 3, 4, 5, 6]

function App() {
 const [user, setUser] = useState(localStorage.getItem("kirill"));
 const [modalActive, setModalActive] = useState(true);
  return (
    <>
    <div className="container">
    <Header 
    user={user} 
    setUser={setUser} 
    products={products} 
    setModalActive={setModalActive}
    />
    <main>
{user ? <Catalog data={products}/> : <Home data={Dog}/>}
    </main>
    <Footer />
    </div>
    <Modal isActive={modalActive} setState={setModalActive}/>
    </>
  );
}

export default App;
