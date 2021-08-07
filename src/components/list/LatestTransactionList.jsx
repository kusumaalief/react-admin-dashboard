import "./latestransactionlist.scss"

const LatestTransactionList = ({type}) => {

   const Button = ({type}) => {
      return(
         <button className={`btn btn-${type.toLowerCase()}`}>{type}</button>
      )
   }

   return (
      <div className="latestlist-container">
         <img src="https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="photo" />
         <span className="name">Anna Keller</span>
         <span className="date">2 Jun 2021</span>
         <span className="amount">$232.00</span>
         <Button type={type}/>
      </div>
   )
}

export default LatestTransactionList
