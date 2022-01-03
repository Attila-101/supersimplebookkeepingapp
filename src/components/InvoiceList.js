import React, {useState, useEffect, useContext} from 'react';
import ExpenseItem from './InvoiceItem';
import { AppContext } from '../context/AppContext';

const InvoiceList = () => {
    const {expenses} = useContext(AppContext);

    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
        
		setfilteredExpenses(searchResults);
	};

 return (
    <>
    <input
        type='text'
        placeholder='search by company name'
        onChange={handleChange}
    />
    <ul>
        <li>
        {filteredExpenses.map((expense) => (
            <ExpenseItem
                id={expense.id}
                name={expense.name}
                cost={expense.cost}
            />
        ))}
        </li>
    </ul>
</>
);
};

export default InvoiceList;