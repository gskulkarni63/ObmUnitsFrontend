import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SampleData from './components/Data/SampleData';
import UserTable from './components/AdminDashBoard/UserTable';


function App() {
  const defaultUserTableData = SampleData();
  
  const pageDetails={limitOfPagination:5,totalPages:4}
  const userDetails={
    defaultUserTableData:defaultUserTableData,
    pageDetails:pageDetails
  }
  return (
    <UserTable {...userDetails}/>
  )
}

export default App
