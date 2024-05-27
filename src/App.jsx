import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import Home from "./pages/home.jsx";
import Error from "./pages/Error.jsx";

const App = () => {
    return (
        <div>

       <BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="product" element={<Product/>} />
    <Route path="pricing" element={<Pricing/>} />
    <Route path='*' element={<Error/>}/>
</Routes>
       </BrowserRouter>
        </div>
    );
};

export default App;