import Header from "./Components/Header/";
import Cards from "./Components/Cards/";
import { ContextWrapper } from './ApiContext';

function App() {

  return (
    <div className="App">
      <ContextWrapper>
        <Header />
        <Cards />
      </ContextWrapper>
        {/* {loading && <div>Loading...</div>} */}
        {/* {data && <div>{data.map(item => <div>{item.name}</div>)}</div>} */}
    </div>
  );
}

export default App;
