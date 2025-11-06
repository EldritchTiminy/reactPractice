import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import App from './App.jsx';
import Greeting from './Greeting.jsx';
import {NavBar} from './navbar';
import {ArmoryCatalog} from './dndweapons';

const container = document.getElementById('root');
const root = createRoot(container);

let cCount = 0;

const animals = ["Lion", "Cow", "Snake", "Lizard", "Dragon"];

function clickCounter () {
  cCount++;
  console.log("cCount + 1");
  console.log(cCount);
  renderPage();
};

function ListItem (props) {
  return <li>{props.animal}</li>;
};

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
};

function App () {
  const animals = ["Lion", "Cow", "Snake", "Lizard", "Pangolin"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
};



function renderPage () {
  root.render(
    <StrictMode>
      <App />
      <ArmoryCatalog />
      <Greeting />
      <NavBar />
      <div>
        <p onClick={clickCounter}>{cCount}</p>
      </div>
      {animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </StrictMode>,
  );
};

renderPage();