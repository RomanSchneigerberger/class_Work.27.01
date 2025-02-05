import React, { useContext, useState } from "react";
import "./shawarma.scss";
import { CartContext } from "../../CartContext"; 
import { useNavigate } from 'react-router-dom';

const Shawarma = (props) => {
    const { addToCart } = useContext(CartContext); 
    const [isAdded, setIsAdded] = useState(false);
    let navigate = useNavigate(); // функция для изменения адресной строки, или переадресация


    const handleAddToCart = () => {
        addToCart(props.id); 
        setIsAdded(true);
    };

    const handleCLick = (url) => {
        localStorage.setItem('singleItem', JSON.stringify(props));
        navigate(`/shawerma/${url}`); // here we nagigate user to some route
    }

    return (
        <div className="card" onClick={() => handleCLick(props.url)}>
            <img src={props.img} alt={props.title} />

            <div>
                <h2>{props.price} ₽</h2>
                <p>{props.title}</p>
                <p className="weight">{props.weight} г</p>
            </div>

            <div className="button_p">
                <button className='button' onClick={handleAddToCart}>
                    {isAdded ? "Добавлено" : "Добавить"}
                </button>
            </div>
        </div>
    );
};

export default Shawarma;
