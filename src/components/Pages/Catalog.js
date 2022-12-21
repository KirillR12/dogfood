import { Card } from "../Card/card"

const Catalog = ({data}) => {
    return ( 
        <>
    <h1>Каталог товаров</h1>
          <div className="cards">
          {data.map((el,i) => <Card key={"card" + i} text={el.name} like={(i + 1) % 2 === 0}/>)}
          </div>
          </>
    )
    }
    
    export {
        Catalog
    }