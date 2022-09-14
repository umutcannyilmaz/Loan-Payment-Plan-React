import './App.css';
import Container from './components/container';
import { DataProvider } from './context/DataContext';
import { CalculationProvider } from './context/CalculationContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <CalculationProvider>
      <Container/>
      </CalculationProvider>
      </DataProvider>
      
    </div>
  );
}

export default App;
