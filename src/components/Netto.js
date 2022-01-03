import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Netto = () => {
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div> 
            <span>Netto: ISK {(totalExpenses/1.24).toFixed(0)} </span>
        </div>
    );
};

export default Netto;