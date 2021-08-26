import React, { useEffect, useState } from 'react';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Lists from './components/Lists';
import Requests from './Requests';
import './App.css';

function App() {

    const [movieList , setMovieList] = useState([]);
    const [featureData , setFeaturedMovie] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);
    
    useEffect(() => {
        const loadAll = async () => {

            //Get all results of Requests.js 
            let list = await Requests.getHomeList();
            
            setTimeout(function(){ 
                setMovieList(list); 
            }, 3000);
                        
            
            //Get a single movie or tv show
            let originals = list.filter(i => i.slug === 'originals');
            let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let chosen = originals[0].items.results[randomChosen];
            let chosenInfo = await Requests.getMovieInfo(chosen.id, 'tv');
            setFeaturedMovie(chosenInfo);
        }

        loadAll();
    }, [])

    useEffect(() => {
        const scrollPage = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollPage);

        return () => {
            window.removeEventListener('scroll', scrollPage);
        }

    },[])

    
    return (
        <div>
            
            <Header black={blackHeader}/>

            {featureData && <FeaturedMovie item={featureData}/>}

            <section className="lists">
                {movieList.map((item, key) =>(
                    <Lists key={key} title={item.title} items={item.items}/>
                ))}
            </section>

            <footer>
                Clone Netflix feito por: Gustavo Davi Alberico <br/>
                Imagens e dados de filmes e séries: <a href="https://www.themoviedb.org/" target='_blank' rel="noreferrer">The Movie DB</a><br/>
                Direitos de imagens Netflix Logo e User Netflix Logo: <a href="https://www.netflix.com/br/" target='_blank' rel="noreferrer">Netflix</a>

            </footer>
            {
                movieList.length <= 0 && 
                <div className="loading">
                    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="" />
                </div> 
            }
        </div>    
    );
}
export default App;