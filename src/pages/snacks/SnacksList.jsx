import React from 'react';
import Snacks from './Snacks'
import img from './img/photo2.png';
import './snacksList.scss'


const SnacksList = () => {
    const items = [
        { 
            id: 1,
            img: img,
            title: "Item One",
            url: "item-one-520-gramm",
            price: 689,
            weight: "520"
        },
        { 
            img: img,
            id: 2,
            title: "Item Two",
            url: "item-two-600-gramm",
            price: 750,
            weight: "600"
        },
        { 
            id: 3,
            title: "Item Three",
            img: img,
            url: "item-three-450-gramm",
            price: 499,
            weight: "450"
        },
        { 
            id: 4,
            title: "Item Four",
            img: img,
            url: "item-four-700-gramm",
            price: 850,
            weight: "700"
        },
        { 
            id: 5,
            title: "Item Five",
            url: "item-five-800-gramm",
            img: img,
            price: 999,
            weight: "800"
        },
        { 
            id: 6,
            title: "Item Six",
            img: img,
            url: "item-six-300-gramm",
            price: 300,
            weight: "300"
        },
    ];
    
    return (
        <div className='container'>
            <h1>Закуски</h1>
            <div className='list'>
                {items.map((card) => (
                    <Snacks
                        id={card.id} 
                        price={card.price}
                        title={card.title} 
                        img={card.img} 
                        weight={card.weight}
                        url={card.url} 
                    />
                ))}
            </div>
        </div>
    );
};

export default SnacksList;