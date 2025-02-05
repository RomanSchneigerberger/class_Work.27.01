import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";


const SingleItem = () => {
    let {id} = useParams(); // достань мне параметр id из адреснпй строки
    const [menuItem, setMenuItem] = useState('');

    useEffect(() => {
        const getDataItem = async () => {
            let dataItem = localStorage.getItem('singleItem');
            const obj = await JSON.parse(dataItem);
            setMenuItem(obj);
        }
        getDataItem();
    }, []);


    return (
        <div>
            <img src={menuItem.img} alt="" />
            <h2>{menuItem.title}</h2>
            <p>Сумма {menuItem.price}₽</p>
            <p>Вес {menuItem.weight}г</p>

        </div>
    );
};

export default SingleItem;