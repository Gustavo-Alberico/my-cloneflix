import React from 'react';
import './style.css';



function Lists ({title, items}) {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRowArea">
                <div className="movieRowList">
                    {items.results.length > 0 && items.results.map((item, key) =>
                        <div key={key} className="movieRowItem">

                            {item.poster_path == null ? 
                            <img src='/images/poster.png' alt={item.original_title} /> : 

                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />}

                            

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Lists;