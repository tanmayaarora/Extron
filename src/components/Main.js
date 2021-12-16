import Blog from './Blog/Blog'
import Header from './Header';
import Pagination from './Pagination/Pagination';

export default function Main() {

    return (
        <>
        <Header/>
        <Pagination RenderComponent={Blog} pageLimit={5} dataLimit={2} />
        </>
    );
}