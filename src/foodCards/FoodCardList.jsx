import React from 'react';
import FoodCard from './FoodCard';
import img from './img/photo.png';
import './foodCardList.scss'


const FoodCardList = () => {
    const items = [
        { 
            id: 1,
            img: img,
            title: "Item One",
            price: 689,
            weight: "520g."
        },
        { 
            img: img,
            id: 2,
            title: "Item Two",
            price: 750,
            weight: "600g."
        },
        { 
            id: 3,
            title: "Item Three",
            img: img,
            price: 499,
            weight: "450g."
        },
        { 
            id: 4,
            title: "Item Four",
            img: img,
            price: 850,
            weight: "700g."
        },
        { 
            id: 5,
            title: "Item Five",
            img: img,
            price: 999,
            weight: "800g."
        },
        { 
            id: 6,
            title: "Item Six",
            img: img,
            price: 300,
            weight: "300g."
        },
    ];
    
    return (
        <div className='container'>
            <h1>Бургеры</h1>
            <div className='list'>
                {items.map((card) => (
                    <FoodCard 
                    id={card.id} 
                    price={card.price}
                    title={card.title} 
                    img={card.img} 
                    weight={card.weight} 
                    />
                ))}
            </div>
        </div>
    );
};

export default FoodCardList;