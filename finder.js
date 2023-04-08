import { useEffect, useState } from "react";
import { Movie } from "./Movie";

export function Finder(){
    let [InputValue, setInputValue] = useState("")
    let [search,setSearch]= useState("")
    let [answer, changeAnswer] = useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${"enter your api key"}&query=${search}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                }else throw new Error("Status code error:"+response.status);
            })
            .then(data => changeAnswer(data.results)) 
            .catch(error => console.log("This is the error: "+error))
    },[search])

    return(<div>
        
        <div className="form_container">
            <form className="form" onSubmit={(e)=>{e.preventDefault(); setSearch(InputValue);setInputValue("")}}>
                <div className="input_field">
                    <input type="text" placeholder="Search your movie" value={InputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
                    <i onClick={()=> setInputValue("")} class="fa-solid fa-xmark fa-xl"></i>
                </div>
                <button type="submit">Find</button>
            </form>
        </div>
        <h2 className={answer.length===0? "off": "title"}>Search Results</h2>
        <div className="movies">

            {answer.map(pelicula =><Movie key={pelicula.id} poster={pelicula.poster_path} title={pelicula.original_title} overview={pelicula.overview}/>)}</div>
    </div>)
}