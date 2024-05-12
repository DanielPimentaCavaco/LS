import './App.css';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';

function App() {
  return (
    <div id='container'>
      <Header></Header>
      <div>
        <ControlPanel></ControlPanel>
      </div>

    </div>
  );
}

export default App;
