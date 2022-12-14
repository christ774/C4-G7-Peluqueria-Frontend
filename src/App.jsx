
import {HashRouter, Route, Routes} from "react-router-dom";
import {Menu} from "./components/Menu"
import {Home} from "./components/Home";
import {PagesClient} from "./pages/PagesClient";
import {PagesDiary} from "./pages/PagesDiary";
import {DiaryDetail} from "./pages/DiaryDetail";
import {ClientFrom} from "./pages/ClientFrom";
import {ClientDetail} from "./pages/ClientDetail";
import {PagesEmployee} from "./pages/PagesEmployee";
import {EmployeeFrom} from "./pages/EmployeeFrom";
import {EmployeeDetail} from "./pages/EmployeeDetail";
import {ProductDetail} from "./pages/ProductDetail";
import {ProductForm} from "./pages/ProductForm";
import {PagesProduct} from "./pages/PagesProduct";


function App() {


  return (
      <div>
          <HashRouter>
              <Menu/>
              <Routes>
              <Route path="/" element={<Home/>}/>

                  <Route path="/empleado" element={<PagesEmployee/>}/>
                  <Route path="/agenda" element={<PagesDiary/>}/>
                  <Route path="/diary/:id" element={<DiaryDetail/>}/>
                  <Route path="/employee/form" element={<EmployeeFrom/>}/>
                  <Route path="/employee/:id" element={<EmployeeDetail/>}/>
                  <Route path="/product/:id" element={<ProductDetail/>}/>
                  <Route path="/product/form" element={<ProductForm/>}/>
                  <Route path="/product" element={<PagesProduct/>}/>
                  


              </Routes>

          </HashRouter>

    </div>
  )
}

export default App
