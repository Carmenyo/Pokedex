// import sirve para enlazar /traer las dependencias que necesitamos.
// Librerías JS
// CSS
// Imágenes
// JSON

import "../styles/App.scss";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import reset from "../styles/core/_reset.scss"

// Función principal.
function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Searchbar/>
      </div>
    </>
  );
}

export default App;
