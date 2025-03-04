import Card from "./components/Card.jsx";
import { ALL_DATA } from "./data.js"

// my internet slow

function App() {
  return (
    <>
      <div className="cards-view">
        <div className="cards-grid">
          {ALL_DATA.map((data_user) => (<Card key={data_user.id} data={data_user}/>))}
        </div>
      </div>
      <div><a className="wikipedia" href="https://en.wikipedia.org/wiki/Sinn_Sisamouth">Source: Wikipedia</a></div>
    </>
  );
}

export default App;
