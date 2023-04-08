
import './App.css';
import { Finder } from './Component/finder';
import {MovieReveler} from './Component/MovieContainer'

function MyApp ( ){

    return(<div className="container">
        <Finder/>
        <MovieReveler/>
        
    </div>)
}

export {MyApp} 
