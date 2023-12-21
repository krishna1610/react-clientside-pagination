import './App.css';
import Pagination from './Pagination';
import {data} from './data';

function App() {
  return (
    <div>
      <Pagination data={data}/>
    </div>
  );
}

export default App;
