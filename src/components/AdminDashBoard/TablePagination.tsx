import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

import Deque from "../service/Deque";

interface pageDetails{
  limitOfPagination:number,
  totalPages:number,
  activePage:number,
  changeActivePage:(activePage:number)=>void,
  actionWhenNextClicked:(activePage:number)=>Array<number>
}

export default function TablePagination(props:pageDetails) {
  
  // const [activePage, changeActivePage] = useState(1);
  const [pageQ, changePageQ] = useState<Deque<number>>(new Deque<number>());

  const {limitOfPagination,totalPages,activePage,changeActivePage}=props
  // Initialize the pageQ
  useEffect(() => {
    changeActivePage(1);

    const pageQueue = new Deque<number>();
    for (let i = 1; i <= limitOfPagination; i++) {
      pageQueue.addEnd(i);
    }
    changePageQ(pageQueue);
  }, [limitOfPagination]);

  // If prevButton is Clicked
  // change active page
  // remove one element from queue in end and add one to beggining  
  const handlePrevButton = () => {
    const pageQueue = new Deque<number>(...pageQ.toArray());
    changeActivePage(activePage - 1 > 1 ? activePage - 1 : 1);
    if (pageQueue.peekFront() > 1) {
      pageQueue.addFront(pageQueue.peekFront() - 1);
      pageQueue.removeEnd();
    }

    changePageQ(pageQueue);

  };

  // If prevButton is Clicked
  // change active page
  // remove one element from queue in beginning and add one to end 
  const handleNextButton = () => {
    changeActivePage(activePage + 1 > totalPages ? activePage : activePage + 1);
    const pageQueue = new Deque<number>(...pageQ.toArray());
    if (pageQueue.peekEnd() < totalPages) {
      pageQueue.addEnd(pageQueue.peekEnd() + 1);
      pageQueue.removeFront();
    }

    changePageQ(pageQueue);

  };

  const handleFirstButton=()=>{
    changeActivePage(1);
    const pageQueue = new Deque<number>();
    for (let i = 1; i <= limitOfPagination; i++) {
      pageQueue.addEnd(i);
    }
    changePageQ(pageQueue);

  };

  const handleLastButton=()=>{
    changeActivePage(totalPages);
    const pageQueue = new Deque<number>();
    for(let i=totalPages-limitOfPagination+1;i<=totalPages;i++){
      pageQueue.addEnd(i);
    }
    changePageQ(pageQueue);

  }




  return (
    <div>
      <Pagination>
        <Pagination.First
          onClick={() => {
            handleFirstButton();
          }}
        />
        <Pagination.Prev
          onClick={() => {
            handlePrevButton();
          }}
        />
        {pageQ.toArray().map((page) => (
          <Pagination.Item onClick={() => {changeActivePage(page)}} active={page===activePage}>{page}</Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => {
            handleNextButton();
          }}
        />
        <Pagination.Last
          onClick={() => {
            handleLastButton();
          }}
        />
      </Pagination>
    </div>
  );
}
