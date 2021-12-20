import { useEffect, useState } from "react";
import './Pagination.css'
import data from '../../data.json'

export default function Pagination({ RenderComponent, pageLimit }) {
    const [dataLimit, setDataLimit] = useState(1);
    
    const [pages, setPages] = useState(Math.round(data.length / dataLimit));

    useEffect(()=> {
      setPages(Math.round(data.length / dataLimit));
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
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    }

    const getPaginationGroup = () => {
        if(dataLimit>=5)
        pageLimit = Math.round(data.length / dataLimit);

        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    return (
        <div>
          <label>No of blogs per page</label>
          <select value={dataLimit} onChange={e => setDataLimit(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>5</option>
            <option>10</option>
          </select>
      
          {/* show the posts, 2 posts at a time */}
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
            {/* previous button */}
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              Previous
            </button>
      
            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </button>
            ))}
      
            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              Next
            </button>
          </div>
        </div>
        );
}