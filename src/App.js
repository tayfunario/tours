import './App.scss';
import { createContext, useContext } from 'react'
import { data } from './data';

const myContext = createContext()

function App() {
  return (
    <div id='container'>
      <div id='inner-container'>
        <h1>Our Tours</h1>
        <myContext.Provider value={data}>
          {data.map((elem, index) => <Item key={index} index={index} />)}
        </myContext.Provider>
      </div>
      <footer>
        <div id='footer-left'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum repellat, doloribus commodi architecto iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum repellat, doloribus commodi architecto iure?</p></div>
        <div id='footer-right'><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati harum repellat, doloribus commodi architecto iure?</p></div>
      </footer>
    </div>
  );
}

const Item = props => {
  const context = useContext(myContext)
  const obj = context[props.index]
  return (
    <div className='item'>
      <img src={obj.photo} alt={obj.city}></img>
      <div className='info'>
        <div className='info-top'>
          <span className='title'>{obj.city}</span>
          <span className='price'>${obj.price}</span>
        </div>
        <p>
          {obj.info}
        </p>
        <button onClick={event => { event.target.parentNode.parentNode.remove() }}>Not Interested</button>
      </div>
    </div>
  );
}


export default App;
