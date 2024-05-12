import './App.css';
import Slide from './components/slide/slide';
import { SlideContextProvider } from './components/slideContext/slideContext';

function App() {
  return (
    <div className="App">
      <SlideContextProvider>
        <Slide />
      </SlideContextProvider>
    </div>
  );
}

export default App;
