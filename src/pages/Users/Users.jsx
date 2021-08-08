import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./users.scss"

const Users = () => {

   const userData = [
      { id: 1, username: 'Jhon Snow', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'jhonsnow@gmail.com', status: 'active', transaction: '$150.00' },
      { id: 2, username: 'Thomas Shelby', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'thomasshelby@gmail.com', status: 'active', transaction: '$9500.00' },
      { id: 3, username: 'Arthur Watch', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'arturw@gmail.com', status: 'active', transaction: '$850.00' },
      { id: 4, username: 'Ada Smith', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'adasmith@gmail.com', status: 'active', transaction: '$450.00' },
      { id: 5, username: 'Luca Brian', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'lucabrian@gmail.com', status: 'active', transaction: '$650.00' },
      { id: 6, username: 'Luca Brian', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'lucabrian@gmail.com', status: 'active', transaction: '$650.00' },
      { id: 7, username: 'Luca Brian', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'lucabrian@gmail.com', status: 'active', transaction: '$650.00' },
      { id: 8, username: 'Luca Brian', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'lucabrian@gmail.com', status: 'active', transaction: '$650.00' },
      { id: 9, username: 'Luca Brian', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'lucabrian@gmail.com', status: 'active', transaction: '$650.00' },
      { id: 10, username: 'Luca Brian', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', email: 'lucabrian@gmail.com', status: 'active', transaction: '$650.00' },
   ];

   const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      {
         field: 'avatar',
         headerName: 'User',
         width: 250,
         renderCell: (params) => {
            return(
               <div className="user-list">
                  <img src={params.row.avatar} alt="" className="user-photo"/>
                  {params.row.username}
               </div>
            )
         }
      },
      {
         field: 'email',
         headerName: 'Email',
         width: 220,
      },
      {
         field: 'status',
         headerName: 'Status',
         sortable: false,
         width: 100

      },
      {
         field: 'transaction',
         headerName: 'Transaction',
         sortable: false,
         width: 160,
      },
      {
         field: 'action',
         headerName: 'Action',
         sortable: false,
         width: 100,
         renderCell: (params) => {
            return(
               <div className="button-wrapper">
                  <Link to={`/user/${params.row.id}`}>
                     <button className="btn btn-approved">Edit</button>
                  </Link>
                  <button className="btn btn-declined" onClick={()=> handleDelete(params.row.id)}>Delete</button>
               </div>

            )
         }
      },
   ];

   const [data, setData] = useState(userData)

   const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id) )
   }

   return (
      <div className="container">
         <DataGrid
         rows={data}
         columns={columns}
         checkboxSelection
         disableSelectionOnClick
         />
      </div>
   )
}

export default Users
