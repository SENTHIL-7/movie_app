import React, { useEffect, useState } from 'react'
import './App.css';
import { MovieCard } from './MovieCard';
import SearchIcon from './search.svg'
const API_URL ='https://www.omdbapi.com?apikey=22c0b2f7'
const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSerachTerm] = useState('')
    const searchMovies =async(title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
        console.log(data.Search);
    }
    // const movie1={
    //     "Title": "Amazing Spiderman Syndrome",
    //     "Year": "2012",
    //     "imdbID": "tt2586634",
    //     "Type": "movie",
    //     "Poster": "N/A"
    // }
 useEffect(()=>{
    searchMovies("iron man")
 },[])

   
  return (
   <div className='app'>
        <h1>Movie for You</h1>
        <div className='search'>
         <input
         placeholder='Search for movies'
         value={searchTerm}
         onChange={(e)=>{setSerachTerm(e.target.value)}}
         />
         <img 
         src={SearchIcon}
         alt="search"
         onClick={()=>{searchMovies(searchTerm)}}
         />
        </div>
        {
            movies?.length>0
            ?
            (
                <div className='container'>
                    {
                        movies.map(
                            (movie)=><MovieCard movie={movie}/>
                        )
                    }
                </div>
            ):(
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>    
            )
        }
   </div>
  );
}

export default App;