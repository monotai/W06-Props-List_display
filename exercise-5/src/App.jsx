import Card from "./components/Card.jsx";
import { ALL_DATA } from "./data.js"


function App() {
  return <>{/* Your code  here */}
    <div className="cards-view">
      <div className="cards-grid">
        {ALL_DATA.map((data_user) => (<Card data={data_user}/>))}
      </div>
    </div>
  </>;
}

export default App;
