import React from "react";
import "./Pagination.css";
import less from "./Images/less.png";
import greater from "./Images/greater.png";
export const Pagination1 = ({ nPages, currentPage, setCurrentPage }) => {

  const prevpage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextpage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="page_button">
        {/* {pages.map(page => (
    
      <button
      className=''
        key={page}
        onClick={() => handlePageChange(page)}
        disabled={page === currentPage}
      
      >
        {page}
      </button>
    ))} */}

        <div className="page_button_content">
          <div onClick={prevpage}>
            <img src={less} alt="" />
          </div>
          <div onClick={nextpage}>
            <img src={greater} alt="" />
          </div>
          {/* <button>{">"}</button> */}
        </div>

        {/* {
        pages.map((page, index) => {
            
          return (
              


            <button
              className=''
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}

            >
              {page}
            </button>
          )


        })
      } */}
      </div>
    </>
  );
};
