import React from 'react';
import {useParams} from "react-router-dom";

const SingleItem = () => {
    let {id} = useParams(); // достань мне параметр id из адреснпй строки

    return (
        <div>
            One item: {id}
        </div>
    );
};

export default SingleItem;