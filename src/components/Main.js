import Blog from './Blog/Blog'
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Pagination from './Pagination/Pagination';

export default function Main() {

    return (
        <>
        <Header/>
        <Pagination RenderComponent={Blog} pageLimit={5} />
        <Footer/>
        </>
    );
}
