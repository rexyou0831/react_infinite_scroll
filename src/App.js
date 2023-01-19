import { useState } from 'react';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [dataSource, setDataSource] = useState(Array.from({ length: 20 }))
  const [hasMore, setHasMore] = useState(true)
  console.log(dataSource)

  const style = {
    border: "1px solid blue",
    margin: 12,
    padding: 8
  }

  const fetchMoreData = () => {

    if(dataSource.length < 100){ 

      setTimeout(() => {
        setDataSource(dataSource.concat(Array.from({ length: 20 })));
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
              <div style={ style } key={ index }>Hi, I'm number { index }</div>
            );
          })
        }
      </InfiniteScroll>
    </div>
  );
}

export default App;
