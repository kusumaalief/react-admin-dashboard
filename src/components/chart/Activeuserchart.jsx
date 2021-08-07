import "./activeuserchart.scss"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
   {
      name: 'Jan',
      activeuser: 4000,
   },
   {
      name: 'Feb',
      activeuser: 3000,
   },
   {
      name: 'Mar',
      activeuser: 2000,
   },
   {
      name: 'Apr',
      activeuser: 2780,
   },
   {
      name: 'Mei',
      activeuser: 1252,
   },
   {
      name: 'Jun',
      activeuser: 5321,
   },
   {
      name: 'Jul',
      activeuser: 3211,
   },
   {
      name: 'Aug',
      activeuser: 7512,
   },
   {
      name: 'Sep',
      activeuser: 2780,
   },
   {
      name: 'Oct',
      activeuser: 4213,
   },
   {
      name: 'Nov',
      activeuser: 341,
   },
   {
      name: 'Dec',
      activeuser: 786,
   },
];

const ActiveUserChart = () => {
   return (
      <div className="chart-container card">
         <h3>User Analytic</h3>
         <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart
               data={data}
               margin={{
               top: 10,
               right: 20,
               left: 20,
               bottom: 0,
               }}
            >
               <CartesianGrid strokeDasharray="4 4" />
               <XAxis dataKey="name" />
               <Tooltip />
               <Line type="monotone" dataKey="activeuser" stroke="#82ca9d" />
            </LineChart>
         </ResponsiveContainer>
      </div>
   )
}

export default ActiveUserChart
