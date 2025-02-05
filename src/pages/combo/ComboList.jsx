import React from 'react';
import Combo from './Combo';
import img from './img/img4.jpeg';
import './comboList.scss'


const ComboList = () => {
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
            url: "item-Two-600-gramm",
            price: 750,
            weight: "600"
        },
        { 
            id: 3,
            title: "Item Three",
            url: "item-Three-450-gramm",
            img: img,
            price: 499,
            weight: "450"
        },
        { 
            id: 4,
            title: "Item Four",
            url: "item-Four-700-gramm",
            img: img,
            price: 850,
            weight: "700"
        },
        { 
            id: 5,
            title: "Item Five",
            url: "item-Five-800-gramm",
            img: img,
            price: 999,
            weight: "800"
        },
        { 
            id: 6,
            title: "Item Six",
            url: "item-Six-300-gramm",
            img: img,
            price: 300,
            weight: "300"
        },
    ];
    
    return (
        <div className='container'>
            <h1>Комбо</h1>
            <div className='list'>
                {items.map((card) => (
                    <Combo 
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

export default ComboList;