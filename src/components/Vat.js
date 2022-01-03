import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Vat = () => {
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    return (
        <div> 
            <span>VAT: ISK {totalExpenses - (totalExpenses/1.24).toFixed(0)} </span>
        </div>
    );
};

export default Vat;