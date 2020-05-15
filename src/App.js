import React from 'react';
import axios from 'axios';


class App extends React.Component{

  /* 버튼에는 기본적으로 onClick을 가지고 있다. */

  /* React.Component가 가지고 있는 object 중 하나
   직접 변경 X, setState로 값을 변경한다.*/
  state = { 
    isLoading : true,
    movies:[]
  };

  // async function() 기다리게 하는 메서드, async를 써야 await 사용 가능
  getMovies = async() =>{
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json"); 
  }

  componentDidMount(){
    this.getMovies()
  }

    render(){
      const { isLoading } = this.state;
    return <div>{isLoading ? "Loading.." : "We are ready"}</div>
    }
    
}

export default App;
