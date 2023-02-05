import React from "react";
import '../index.css';


export default function Meme() {
    
   
    const [meme , setMeme] = React.useState(
        {
            topText:"",
            bottomText:"",
            memeImage:"http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        }, [])
    
    function getMemeImage() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
        setMeme( (prevMeme) => ({
            ...prevMeme,
            memeImage: url
        }))
        
    }

    function textHandler(event) {
        const {name,value} = event.target
        setMeme( prevMeme => ({
            ...prevMeme,
            [name]:value
        }))
    }

   
    
    return(
        <div className="meme-compo">
            <div className="input">
                <input 
                    type="text" 
                    placeholder="Top text"
                    name="topText"
                    onChange={textHandler}
                    value={FormData.topText}

                />
                <input 
                    type="text" 
                    placeholder="Bottom text"
                    name="bottomText"
                    onChange={textHandler}
                    value={FormData.bottomText}
                />
            </div>

            <button onClick={getMemeImage} className="button">Get a new meme image 🖼</button>
           
             <div className="meme">
                <img src={meme.memeImage} className="meme-image" alt="Meme" />
                <h2 className="meme--text top" >{meme.topText}</h2>
                <h2 className="meme--text bottom" >{meme.bottomText}</h2>
            </div>
        </div>
    )
}