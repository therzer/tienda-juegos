import { useState } from "react";
import {featuredGameData} from "../../../data/featuredGameData";
import "../../../css/inicio/featuredGame.css"

function JuegosDestacados() {

    const [selected, setSelected] = useState(0);
    const fGameLength = featuredGameData.length;
    const tag = featuredGameData[selected].tag;

    return (
        <div className="featured-game">
            <h3 className="title-featured">DESTACADOS Y RECOMENDADOS</h3>
            <div className="container-featured-game">

                <div className="fondo-game">
                        <img src={featuredGameData[selected].img} alt={featuredGameData[selected].title} />

                        <div className="detalles">
                            <div className="detalles-top">
                                <img src={featuredGameData[selected].img} alt={featuredGameData[selected].title} />
                                <div className="detail">
                                    <h2>{featuredGameData[selected].title}</h2>
                                    <p>{featuredGameData[selected].detail}</p>
                                </div>
                            </div>

                            <div className="tags">
                                {tag.map((item)=>(
                                    <li key={item}>{item}</li>
                                    
                                ))}
                            </div>

                            <div className="price">
                                <button className="price-btn">{featuredGameData[selected].price}</button>
                            </div>
                        </div>
                </div>

                <div className="carousel-game">
                    <box-icon name='left-arrow-alt' className="arrow" size="md" color='#ffffff' onClick={()=>{
                        selected === 0
                        ? setSelected(fGameLength -1)
                        : setSelected((prev) => prev -1)
                    }}
                    ></box-icon>

                    <box-icon name='right-arrow-alt' color='#ffffff' size="md" onClick={()=>{
                        selected === fGameLength - 1
                        ? setSelected(0)
                        : setSelected((prev) => prev + 1)
                    }}></box-icon>
    
                </div>
            </div>
        </div>
    )
}

export default JuegosDestacados