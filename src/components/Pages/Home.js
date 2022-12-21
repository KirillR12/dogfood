import { Card } from "../Card/card"

const Home = ({data}) => {
return ( 
    <>
<h1>Главная страница</h1>
      <div className="cards">
      {data.map((el,i) => <Card key={"card" + i} text={el} like={(i + 1) % 2 === 0}/>)}
      </div>
      </>
)
}

export {
    Home
}