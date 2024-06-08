import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Product from "././pages/Product/Product";
import AppLayout from "././pages/AppLayout/AppLayout";
import Homepage from "./pages/HomePage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Pricing from "./pages/Product/Pricing.jsx";
import Login from "./pages/Login/Login.jsx";
import CityList from "./Components/CityList/CityList.jsx";
import CountriesList from "./Components/CountriesList/CountriesList.jsx";
import City from "./Components/City/City.jsx";
import Form from "./Components/Form/Form.jsx";
import {CitiesProvider} from "./Contexts/CitiesContex.jsx";
import {AuthProvider} from "./Contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute.jsx";


const App = () => {

    return (
        <AuthProvider>
            <CitiesProvider>
              <BrowserRouter>
                <Routes>
    <Route index element={<Homepage/>}/>
    <Route path="product" element={<Product/>} />
    <Route path="login" element={<Login/>} />
    <Route path="pricing" element={<Pricing/>} />
                    <Route path="app" element={<ProtectedRoute> <AppLayout/></ProtectedRoute>} >
        <Route index element={<Navigate to='cities' replace/>}/>
         <Route path='cities' element={<CityList/>}/>
        <Route path='cities/:id' element={<City/>} />
        <Route path='countries' element={<CountriesList/>}/>
        <Route path='form' element={<Form/>}/>
    </Route>
         <Route path='*' element={<PageNotFound/>}/>
                </Routes>
              </BrowserRouter>
            </CitiesProvider>
          </AuthProvider>
    );
};

export default App;