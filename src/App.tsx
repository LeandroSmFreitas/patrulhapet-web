import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {

  return (
    <PrimeReactProvider>
      <BrowserRouter>
          <AppRoutes/>
      </BrowserRouter>
    </PrimeReactProvider>
  )
}

export default App
