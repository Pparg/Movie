import { useState, useEffect } from 'react'
import './Movie.css'
import {Movie} from './Movie'

function MovieReveler(){
    let [page, changePage]= useState(1)
    let [data, changeData]= useState([])
    

    useEffect(()=>{
        // Paste your API Key Here
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${"enter your api key"}&page=${page}`)
            .then(response => {
                if(response.ok) return response.json()
                else throw new Error("Status error: "+response.status)})
            .then(newdata => changeData(newdata.results))
            .catch(error => console.log(error))
    },[page])

    function handlePlus(e){
        if(e.target.id ==="increment" && page<1000){
            changePage(page+1)
        }
        else if(e.target.id==="decrement"&& page>1){
            changePage(page-1)
        }
    }
    /*function handleKeydown(e){
        if(e.code ==="ArrowRight" && page<1000) return changePage(page+1)
        else if(e.code==="ArrowLeft" && page>1) return changeData(page-1)
    }*/
    
    return(<div>
        <h2 className='title'>Popular Movies</h2>
        <div className='movies' id="movies">
            {data.map(movie =>
                <Movie key={movie.id} poster={movie.poster_path} title={movie.original_title} overview={movie.overview}/>)}

        </div>
        <div className='btn_container'>
            <button className='btn' id="decrement" onClick={handlePlus} >Previus</button>
            <p>{page}</p>
            <button className='btn' id="increment" onClick={handlePlus} >Next</button>
        </div>
        
    </div>)
}

export {MovieReveler}