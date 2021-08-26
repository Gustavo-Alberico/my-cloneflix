import React, {useState} from 'react';
import './style.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



function Lists ({title, items}) {

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        
        if(x > 0 ){
            x = 0
        }
        setScrollX(x)

    }


    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2); 
        let listW = items.results.length * 230;

        if((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x)
    }



    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRowLeft" onClick={handleLeftArrow}>
                <NavigateBeforeIcon  style={{fontSize: 50}} />
            </div>

            <div className="movieRowRight" onClick={handleRightArrow}>
                <NavigateNextIcon  style={{fontSize: 50}} />
            </div>


            <div className="movieRowArea">
                <div className="movieRowList" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 230
                    
                    }}>
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