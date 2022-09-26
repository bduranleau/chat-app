import './styles/App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='root-container'>
          <Navbar />
          <Main />
        </div>
      </header>
    </div>
  );
}

export default App;
