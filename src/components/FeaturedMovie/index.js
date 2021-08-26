import React from 'react';
import './style.css';

function featuredMovie({item}) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    };

    let description = item.overview;
    if(description.length > 200) {
        description = description.substring(0, 200)+'...';
    }

    return(
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: item.backdrop_path === null ? `url('/images/backdrop.jpg')`  : `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featuredVertical">
                <div className="featuredHorizontal">
                    <div className="featuredName">{item.original_name}</div>
                    <div className="featuredInfo">
                        <div className="featuredPoints">{item.vote_average} pontos</div>
                        <div className="featuredYear">{firstDate.getFullYear()}</div>
                        <div className="featuredSeasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featuredDescription">{description}</div>
                    <div className="featuredButtons">
                        <a href={`/watch/${item.id}`} className="featuredWatchButton">&#9654; Assistir</a>
                        <a href={`/list/add/${item.id}`} className="featuredMyListButton">+ Minha Lista</a>
                    </div>
                    <div className="featuredGenres"><strong>Gêneros: {genres.join(', ')}</strong></div>
                </div>
            </div>
        </section>
    );
};
export default featuredMovie;