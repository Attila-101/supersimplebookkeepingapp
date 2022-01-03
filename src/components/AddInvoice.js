import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddInvoice = () => {
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const onSubmit = (event) => {
        //stops page from reloading whenever the button is clicked
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name, 
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense, 
        })
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Company Name:</label>
                    <input 
                        required='required'
						type='text'
						id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        >
                    </input>
                <label>Amount:</label>
                    <input
                    required='required'
                    type='text'
                    id='name'
                    value={cost}
                    onChange={(event) => setCost(event.target.value)}
                    >
                    </input>
                    <button>Save</button>	
            </div>
        </form>
    );
};

export default AddInvoice;