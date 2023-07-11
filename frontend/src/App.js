//old version
// import Form from ".older/form";


import "./app.css"
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Landing from "./newComponents/starter/Landing";
import Choice from "./newComponents/Details/Choice";
import FormInput from "./newComponents/Details/formInput";
import Temp_page from "./newComponents/Templates/template_page";
import DownloadPage from "./newComponents/Download/download";

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dataChoice' element={<Choice/>}/>
        <Route path='/dataForm' element={<FormInput/>}/>
        <Route path='/temp' element={<Temp_page/>}/>
        <Route path='/download' element={<DownloadPage/>}/>
      </Routes>
    </main>
    </BrowserRouter>

    //old version
    
    // <div>
    //   {/* <Form></Form> */}  
    // </div>


    
  );
}

export default App;
