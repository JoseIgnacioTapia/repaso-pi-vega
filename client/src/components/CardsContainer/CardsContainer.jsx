import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/actions";



const CardsContainer = () => {
    
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsers());       

    }, []);

    return(
        <div className={style.cardsContainer}>
            {
                users.length ?
                users.map((user)=>{
                    return(
                        <Card
                            name={user.name}
                            phone={user.phone}
                            email={user.email}
                        />
                    )
                }):
                "Loading..."
            }
        </div>
    )
}

export default CardsContainer;

