import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import './App.css';

function Home() {
  return <h1 style={{textAlign:'center'}}>Bienvenidos a la Página de Inicio</h1>;
}
function About() {
  return (
  <div>
    <h2>Acerca de Nosotros</h2>
    <h3>Hola soy Dalia del Carmen Mendiola Soto</h3>
  </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;