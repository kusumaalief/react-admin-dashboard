import LatestTransactionList from "../list/LatestTransactionList"
import "./latesttransaction.scss"

const LatestTransaction = () => {
   return (
      <div className="latest-container card">
         <h3>Latest Transaction</h3>
         <div className="wrapper">
            <div className="wrapper-title">
               <span>Customer</span>
               <span>Date</span>
               <span>Amount</span>
               <span>Status</span>
            </div>
            <div className="wrapper-list">
               <LatestTransactionList type="Approved"/>
               <LatestTransactionList type="Pending"/>
               <LatestTransactionList type="Declined"/>
               <LatestTransactionList type="Declined"/>
               <LatestTransactionList type="Pending"/>
            </div>
         </div>
      </div>
   )
}

export default LatestTransaction
