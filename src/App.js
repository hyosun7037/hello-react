import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";
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
    const {
      data:{
        data:{movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false})
  };

  componentDidMount(){
    this.getMovies();
  }

    render(){
      const { isLoading, movies } = this.state;
    return (
             <section className="container">
               {isLoading  ? (
               <div className="loader">
                <span className="loader__text">Loading..</span>
               </div>
               ) : (
                 <div className="movies">
                   {movies.map(movie =>(
              <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
              />  
         ))}
           </div>
               )}
         </section>
          );
    }
}

export default App;
