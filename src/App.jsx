
import {HashRouter, Route, Routes} from "react-router-dom";
import {Menu} from "./components/Menu"
import {Home} from "./components/Home";

import {PagesEmployee} from "./pages/PagesEmployee";
import {EmployeeFrom} from "./pages/EmployeeFrom";
import {EmployeeDetail} from "./pages/EmployeeDetail";
import {DiaryForm} from "./pages/DiaryFrom";
import {PagesDiary} from "./pages/PagesDiary";
import {ProductDetail} from "./pages/ProductDetail.jsx";
import {ProductForm} from "./pages/ProductFrom.jsx";
import {PagesProduct} from "./pages/PagesProdcut.jsx";
import {ClientFrom} from "./pages/ClientFrom.jsx";
import {ClientDetail} from "./pages/ClientDetail.jsx";
import {PagesClient} from "./pages/PagesClient.jsx";
import {PagesAppointment} from "./pages/PagesAppointment";
import {AppointmentPages} from "./pages/AppointmentPages";





function App() {


  return (
      <div>
          <HashRouter>
              <Menu/>
              <Routes>
              <Route path="/" element={<Home/>}/>

                  <Route path="/empleado" element={<PagesEmployee/>}/>

                  <Route path="/employee/form" element={<EmployeeFrom/>}/>
                  <Route path="/employee/:id" element={<EmployeeDetail/>}/>
                  <Route path="/agenda" element={<PagesDiary/>}/>
                  <Route path="/agenda/:id" element={<DiaryForm/>}/>
                  <Route path="/agenda/form" element={<DiaryForm/>}/>
                  <Route path="/servicios/:id" element={<ProductDetail/>}/>
                  <Route path="/servicios/form" element={<ProductForm/>}/>
                  <Route path="/servicios" element={<PagesProduct/>}/>
                  <Route path="/client/form" element={<ClientFrom/>}/>
                  <Route path="/client/:id" element={<ClientDetail/>}/>
                  <Route path="/cliente" element={<PagesClient/>}/>
                  <Route path="/citas" element={<PagesAppointment/>}/>
                  <Route path="/agenda/citas/:id" element={<AppointmentPages/>}/>

              </Routes>

          </HashRouter>




    </div>
  )
}

export default App
