import { useEffect, useRef, useState } from "react";
import './Pagination.scss'
import data from '../../../data.json'

export default function Pagination({ RenderComponent, pageLimit }) {
    const [dataLimit, setDataLimit] = useState(1);
    const [pages, setPages] = useState(Math.round(data.length / dataLimit));
    const myClassName = useRef("DL1");

    useEffect(()=> {
      setPages(Math.round(data.length / dataLimit));
      setCurrentPage(1);
    }, [dataLimit]);

    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
      }
    
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + parseInt(dataLimit);
      return data.slice(startIndex, endIndex);
  }

    const getPaginationGroup = () => {
        if(dataLimit>=5)
        pageLimit = Math.round(data.length / dataLimit);

        if(dataLimit===1)
        return [1,7,8,9,10];
        else{
          let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
          return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
        }
    }

    return (
      <>
      <nav>
        <div>
          <div className="dropdown">
            <button className="dropbtn">Pages</button>
            <div className="dropdown-content">
              {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
            </div>
          </div>
          <h1 className='special'>T. Arora</h1>
          <a href="#" className='anchorStyle'>About</a>
          <a href="/login" className='anchorStyle'>Login</a>
        </div>
      </nav>
      <div className="Main">
        <label>No of blogs per page</label>
          
          <div className="dropdown">
            <button className="dropbtn">{dataLimit}</button>
            <div className="dropdown-content">
              <button onClick={e => {
                setDataLimit(e.target.value);
                myClassName.current = "DL1";
              }
            }value={1}
            className={`active ${myClassName.current==="DL1" ? myClassName.current : null}`}>1</button>
            <button onClick={e => {
                setDataLimit(e.target.value);
                myClassName.current = "DL2";
              }
            }value={2}
            className={`active ${myClassName.current==="DL2" ? myClassName.current : null}`}>2</button>
            <button onClick={e => {
                setDataLimit(e.target.value);
                myClassName.current = "DL5";
              }
            }value={5}
            className={`active ${myClassName.current==="DL5" ? myClassName.current : null}`}>5</button>
            <button onClick={e => {
                setDataLimit(e.target.value);
                myClassName.current = "DL10";
              }
            }value={10}
            className={`active ${myClassName.current==="DL10" ? myClassName.current : null}`}>10</button>
            </div>
          </div>
      
          <div className="dataContainer">
            {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
            ))}
          </div>
      
          {/* show the pagination buttons
              it consists of next, previous,
              first and last buttons
          */}
          
          <div className="pagination">
            
            {/* first button */}
            <button
            onClick={()=>setCurrentPage(1)}
            className={`first ${currentPage === 1 ? 'disabled' : ''}`}>
              First
            </button>

            {/* previous button */}
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              Previous
            </button>
      
            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              Next
            </button>
            
            {/* last button */}
            <button
            onClick={()=>setCurrentPage(pages)}
            className={`last ${currentPage === pages ? 'disabled' : ''}`}>
              Last
            </button>
          </div>
        </div>
      </>
        );
}
