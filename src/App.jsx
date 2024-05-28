import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "././pages/Product/Product";
import AppLayout from "././pages/AppLayout/AppLayout";
import Homepage from "./pages/HomePage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Pricing from "./pages/Product/Pricing.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => {
    return (
        <div>

       <BrowserRouter>
<Routes>
    <Route index element={<Homepage/>}/>
    <Route path="product" element={<Product/>} />
    <Route path="login" element={<Login/>} />
    <Route path="pricing" element={<Pricing/>} />
    <Route path="app" element={<AppLayout/>} >
        <Route index element={<p>List</p>}/>
         <Route path='cities' element={<p>City</p>}/>
        <Route path='countries' element={<p>Country</p>}/>
        <Route path='form' element={<p>Form</p>}/>
    </Route>
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
       </BrowserRouter>
        </div>
    );
};

export default App;