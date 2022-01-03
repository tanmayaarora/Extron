import { useEffect, useState } from "react";
import './Pagination.scss'
import data from '../../data.json'

export default function Pagination({ RenderComponent, pageLimit }) {
    const [dataLimit, setDataLimit] = useState(1);
    
    const [pages, setPages] = useState(Math.round(data.length / dataLimit));

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
          <a href="/" className='anchorStyle'>Home</a>
          <div className="dropdown">
            <button className="dropbtn">Pages</button>
            <div className="dropdown-content">
              {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
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
              <button onClick={e => setDataLimit(e.target.value)} value={1}>1</button>
              <button onClick={e => setDataLimit(e.target.value)} value={2}>2</button>
              <button onClick={e => setDataLimit(e.target.value)} value={5}>5</button>
              <button onClick={e => setDataLimit(e.target.value)} value={10}>10</button>
            </div>
          </div>
      
          <div className="dataContainer">
            {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d} />
            ))}
          </div>
      
          {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
          <div className="pagination">
            
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
