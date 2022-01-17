import Blog from './Blog/Blog'
import Footer from './Footer/Footer';
import Pagination from './Pagination/Pagination';

export default function Main() {

    return (
        <>
        <Pagination RenderComponent={Blog} pageLimit={5} />
        <Footer/>
        </>
    );
}
