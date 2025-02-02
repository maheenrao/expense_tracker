import React, {useContext} from 'react';
import {Transaction} from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const{ transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
        <ul  className="list">
            {transactions.map(transactions=>(<Transaction key={transactions.id} transaction={transactions}/>))}
         </ul>
            
        </div>
    )
}
