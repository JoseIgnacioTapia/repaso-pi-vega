import style from "./Card.module.css"

const Card = ({name,email,phone})=>{
    return(
        <div className={style.card}>
            <h4>{name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}

export default Card;