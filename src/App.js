import { useEffect, useState } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { Lists, Loader, Endpage } from './components';
import { FaSearch, FaFilter } from "react-icons/fa";

function App() {

  const [dataSource, setDataSource] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [pageNumber, setPageNumber] = useState(2);
  const [displayPage, setDisplayPage] = useState(1);
  const [totalPage, setTotalPage ] = useState(0);

  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL).then(response=>{
      // console.log(response.data)
      setDataSource(response.data.users.data)
      setTotal(response.data.users.total)
      setCurrentTotal(response.data.users.to)
      setTotalPage(response.data.users.last_page)
      setDisplayPage(1)
      setHasMore(true)
    })
  }, [])

  const fetchMoreData = () => {

    if(currentTotal < total){ 

      setPageNumber(prev => prev + 1);

      setTimeout(() => {
        axios.get(process.env.REACT_APP_API_URL+`/?page=${ pageNumber }`).then(response=>{
          console.log(response.data)
          setDataSource(prev => [ ...prev, ...response.data.users.data ])
          setTotal(response.data.users.total)
          setCurrentTotal(response.data.users.to)
          setTotalPage(response.data.users.last_page)
          setDisplayPage(prev => prev + 1)
        })
        // setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 1500);

    }
    else {
      setHasMore(false)
    }

  }

  return (
    <div className=' w-5/6 mx-auto mt-5'>
      <InfiniteScroll 
          dataLength={ dataSource.length } 
          next={fetchMoreData} 
          hasMore={ hasMore }
          loader={ <Loader /> }
          endMessage={ <Endpage /> }
          // height={ 550 }
      >
        <Lists dataSource={ dataSource } />
      </InfiniteScroll>
      <div className=' fixed w-12 h-12 bg-black bottom-44 right-0 rounded-tl-lg rounded-bl-lg text-white flex items-center justify-center'>
          <FaSearch className='text-2xl' />
      </div>

      <div className=' fixed w-12 h-12 bg-black bottom-28 right-0 rounded-tl-lg rounded-bl-lg text-white flex items-center justify-center'>
          <FaFilter className='text-2xl' />
      </div>

      <div className=' fixed w-12 h-24 bg-black bottom-0 right-0 rounded-tl-lg text-white flex flex-col text-center text-md items-center justify-center'>
          <span>{ displayPage }</span>
          <span>----</span>
          <span>{ totalPage }</span>
      </div>
    </div>
  );
}

export default App;
