import { useState } from "react";

function Slides({imageProps}) {
    const [foto, setFoto] = useState(0);
    console.log(imageProps);

    const nextBtn = () => {
        setFoto((foto => {
            foto ++;
            if(foto > imageProps.length -1){
                foto = 0
            }
            return foto
        }))
    }
    const prevBtn = () => {
        setFoto((foto => {
            foto --;
            if(foto < 0) {
                return imageProps.length -1
            }
            return foto;
        }))
    }
    return(
        <div>
            <div className="container">
                <button className="one" onClick={prevBtn}>❮</button>
                <img src={imageProps[foto]}alt="country" width="500px"/>
                <button className="one" onClick={nextBtn}>❯</button>
            </div>
            
        </div>
    )
}

export default Slides;