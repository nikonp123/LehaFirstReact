import '.././scss/normalize.css';
import '.././App.css';
import Header from '.././components/Header';
import '.././scss/style.scss';
import TopImage from '.././components/TopImage';
import Context from '.././components/Context';
import Footer from '.././components/Footer';
import Arrow from '.././components/common/Arrow';
import Fetch from '.././components/Fetch';
import Pagination from '.././components/common/Pagination';
import Pa from '../'


function Posts() {
  return (
    <div className="App">
      <Header />
      <TopImage />
      <Context />
      <Fetch />
      <Pagination />
      <Footer />
      <Arrow/>
    </div>
  );
}

export default Posts;
