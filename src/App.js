import React, { useEffect, useState } from 'react';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Lists from './components/Lists';
import Requests from './Requests';
import './App.css';

function App() {

    const [movieList , setMovieList] = useState([]);
    const [featureData , setFeaturedMovie] = useState(null);
    
    useEffect(() =>{
        const loadAll = async () =>{

            //Get all results of Requests.js 
            let list = await Requests.getHomeList();
            setMovieList(list);
            
            //Get a single movie or tv show
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Requests.getMovieInfo(chosen.id, originals[0].type);
            console.log(chosenInfo)
            setFeaturedMovie(chosenInfo);
        }

        loadAll();
    }, [])
    
    return (
        <div>
            <Header/>
            {featureData && <FeaturedMovie item={featureData}/>}
            <section className="lists">
                {movieList.map((item, key) =>(
                    <Lists key={key} title={item.title} items={item.items}/>
                ))}
            </section>
        </div>    
    );
}
export default App;