import React, {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const InvoiceItem = (props) => {
    const {dispatch} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE', 
            payload: props.id, 
        });
    };
    return (
        <li>
            {props.name} ISK {props.cost} 
            <span class="deleteButton"><TiDelete size='1rem' onClick={handleDeleteExpense}></TiDelete></span>
        </li>
    );
};

export default InvoiceItem;