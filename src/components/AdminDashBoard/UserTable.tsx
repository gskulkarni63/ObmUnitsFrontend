import React, { useState } from "react";

import AdminUserListTable from "./AdminUserListTable";
import TablePagination from "./TablePagination";
import Deque from "../service/Deque";

export default function UserTable(props: any) {
  const pageSize = 6;
  const [activePage, changeActivePage] = useState(1);
  const [pageQ, changePageQ] = useState<Deque<number>>(new Deque<number>());

  const convertToPage = (data: any, totalItems: number, pageSize: number) => {
    const pagedInformation = [];
    var start = 0;
    var end = pageSize - 1;
    while (start < totalItems) {
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(data[i]);
      }
      start += pageSize;
      end = end + pageSize <= totalItems ? end + pageSize : totalItems;

      pagedInformation.push(arr);
    }
    return pagedInformation;
  };

  const { defaultUserTableData, pageDetails } = props;
  const { headings, users } = defaultUserTableData;
  const arrayUsers = [...users];
  const page = convertToPage(arrayUsers, arrayUsers.length, pageSize);
  
  console.log(page[activePage])
  
  const data={
    headings:headings,
    users:page[activePage]
  }


  const actionWhenNextClicked = () => {
    return page[activePage];
  };
  
  return (
  <div className="parentDiv">
      <AdminUserListTable {...data} />
      <TablePagination
        {...pageDetails}
        changeActivePage={changeActivePage}
        activePage={activePage}
        actionWhenNextClicked={actionWhenNextClicked}
      />
    </div>
  );
}
