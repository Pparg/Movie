import { useState } from "react"

function Movie({poster , title, overview}) {
    let [disable, setDisable] = useState(true)
    
    let witchClass = disable? "div_small": "div_expand"
    return(
        <div id="wrapper" className={witchClass} onClick={()=>setDisable(!disable)}>
            <img src={"https://image.tmdb.org/t/p/w500/"+poster} alt={title}></img>
            <div className="info_container">
                <h3>{title}</h3>
                <p>{overview}</p>
            </div>
            
        </div>
    )
}

export {Movie}