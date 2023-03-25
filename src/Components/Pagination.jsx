import React from 'react'
import "./Pagination.css"
import less from "./Images/less.png"
import greater from "./Images/greater.png"
import { Link } from 'react-router-dom'

export const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  console.log(nPages, currentPage, setCurrentPage);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <>
    <nav style={{display:"flex",justifyContent:"center"}}>
      {currentPage === 1 ? (
          <ul className="pagination justify-content-center">     
        </ul>
      ) : (
          <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link className="page-link" onClick={prevPage} to="#">
              Previous
            </Link>
          </li>
          
        </ul>
      )}
     
    {currentPage===nPages?(<> </>):(<> <ul className="pagination justify-content-center">
          
          <li className="page-item">
            <Link className="page-link" onClick={nextPage} to="#">
              Next
            </Link>
          </li>
        </ul></>)}
    </nav>
  </>
  )
}
