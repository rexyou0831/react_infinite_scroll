import { useEffect, useState } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

function App() {
  const [dataSource, setDataSource] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(0);
  const [pageNumber, setPageNumber] = useState(2);
  console.log(dataSource)

useEffect(()=>{
  axios.get(process.env.REACT_APP_API_URL).then(response=>{
    console.log(response.data)
    setDataSource(response.data.users.data)
    setTotal(response.data.users.total)
    setCurrentTotal(response.data.users.to)
  })
}, [])

  const style = {
    border: "1px solid blue",
    margin: 12,
    padding: 8
  }

  const fetchMoreData = () => {

    if(currentTotal < 100){ 

      setPageNumber(prev => prev + 1); console.log(pageNumber)

      setTimeout(() => {
        axios.get(process.env.REACT_APP_API_URL+`/?page=${ pageNumber }`).then(response=>{
          console.log(response.data)
          setDataSource(prev => [ ...prev, ...response.data.users.data ])
          setTotal(response.data.users.total)
          setCurrentTotal(response.data.users.to)
        })
        // setDataSource(dataSource.concat(Array.from({ length: 20 })));
      }, 1000);

    }
    else {
      setHasMore(false)
    }

  }

  return (
    <div className="App">
      <InfiniteScroll 
          dataLength={ dataSource.length } 
          next={fetchMoreData} 
          hasMore={ hasMore }
          loader={ <p>Loading</p> }
          endMessage={ <p>End Point</p> }
          >
        {
          dataSource.map((item, index)=>{
            return (
              <div style={ style } key={ index }>{ item.first_name }</div>
            );
          })
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
