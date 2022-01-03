import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const {expenses} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div> 
            <span>Brutto: ISK {totalExpenses.toFixed(0)} </span>
        </div>
    );
};

export default ExpenseTotal;