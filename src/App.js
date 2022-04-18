import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';

function App() {
  return (
    <div className="App">
      <h1>Redux App</h1>
      <div className='box-wrapper'>
        <CompA></CompA>
        <CompB></CompB>
        <CompC></CompC>
      </div>
    </div>
  );
}

export default App;
