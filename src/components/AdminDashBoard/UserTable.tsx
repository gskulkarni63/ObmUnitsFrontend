import React from 'react'

import AdminUserListTable from './AdminUserListTable';
import TablePagination from './TablePagination';
export default function UserTable(props:any) {
  return (
    
    <div className='parentDiv'>  
        {/* <AdminUserListTable {...defaultUserTableData} /> */}
        <AdminUserListTable {...props.defaultUserTableData} />
        <TablePagination {...props.pageDetails}/>
    </div>
  )
}
