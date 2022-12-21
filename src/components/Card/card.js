import "./card.css"

const Card = ({text, like}) => {
    return (
        <card>
        <div className="card">
                        {text}
                        <span className="card__hard">
{
    like
    ? <i className="fa-solid fa-heart"></i>
    : <i className="fa-regular fa-heart"></i>
}
                        </span>
        </div>
        </card>
    )
}

export {
    Card
}