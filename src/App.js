import { useState } from 'react';
import { data} from "./data"
import Slides from './Slides';
import './App.css';

function App() {
  const [country, setCountry] = useState(data);
  const [showMore, setShowMore] = useState(false);


  const removeCountry = (id) => {
    let newCountry = country.filter( name =>  name.id !==id);
    setCountry(newCountry)
  }

  const showMoreClick = (element) => {
    element.showMore = !element.showMore
    setShowMore(!showMore)
  }

  return (<div>
      <div className="container">
        <h1>Top {country.length} countries I would like to visit</h1>
      </div>

      {country.map((element => {
        const {id, name, description, image} = element;

        return(<div key= {id}>
          <div className='container'>
            <h2>{name}</h2>
          </div>
          <Slides imageProps={image}/>
          <div className='container'>
          <p>{showMore ? description : description.substring(0, 100) + "..."}
              <button onClick={() => showMoreClick(element)}>{showMore ? "Show less" : "Show more"}</button>
              </p>
          </div>
          <div className="container">
            <button className="btn" onClick={() => removeCountry(id)}>remove</button>
          </div>
        </div>)
      }))}

<div className="container">
        <button className="btn" onClick={() =>setCountry([])}>delete all</button>
      </div>
    </div>
  );
}

export default App;
