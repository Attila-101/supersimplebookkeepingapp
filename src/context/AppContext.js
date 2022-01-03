import { createContext, useReducer } from "react";

//updates the state based on the action 
const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload 
                ),
            };
        default: 
            return state; 
    }
};

//initial state when the app loads 
const initialState = {
    expenses: [
        {id: 12, name: 'Bonus', cost: 4000}, 
        {id: 13, name: 'Costco', cost: 15000}, 
        {id: 14, name: 'N1', cost: 9500}, 
    ],
};

//create context and assign it to the AppContext variable and export it
export const AppContext = createContext();

//holds the state and passes it to the components
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider 
        value={{
        expenses: state.expenses, 
        dispatch, 
    }}>
        {props.children}
    </AppContext.Provider>)
};
