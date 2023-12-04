import './App.css';
import BackgroundCard from './Components/BackgroundCard';
import StoreListing from './Components/StoreListing';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <BackgroundCard />
      <StoreListing />
    </div>
  );
}

export default App;
