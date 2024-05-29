import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "././pages/Product/Product";
import AppLayout from "././pages/AppLayout/AppLayout";
import Homepage from "./pages/HomePage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Pricing from "./pages/Product/Pricing.jsx";
import Login from "./pages/Login/Login.jsx";
import CityList from "./Components/CityList/CityList.jsx";
import {useEffect, useState} from "react";
import CountriesList from "./Components/CountriesList/CountriesList.jsx";
import City from "./Components/City/City.jsx";

const BASE_URL='http://localhost:9000'

const App = () => {
    const [cities,setCities]=useState([])
    const [isLoading,setIsLoading]= useState(false)


    useEffect(() => {
       async function fetchCities(){
          try {
              setIsLoading(true)
             const res=await fetch(`${BASE_URL}/cities`)
             const data=await res.json()
             setCities(data);
       }  catch {
              alert('There was an error')
       }finally {
              setIsLoading(false)
          }
       }
fetchCities()
    }, []);
    return (
        <div>

       <BrowserRouter>
<Routes>
    <Route index element={<Homepage/>}/>
    <Route path="product" element={<Product/>} />
    <Route path="login" element={<Login/>} />
    <Route path="pricing" element={<Pricing/>} />
    <Route path="app" element={<AppLayout/>} >
        <Route index element={<CityList cities={cities} isLoading={isLoading}/>}/>
         <Route path='cities' element={<CityList cities={cities} isLoading={isLoading}/>}/>
        <Route path='cities/:id' element={<City/>} />
        <Route path='countries' element={<CountriesList cities={cities} isLoading={isLoading}/>}/>
        <Route path='form' element={<p>Form</p>}/>
    </Route>
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
       </BrowserRouter>
        </div>
    );
};

export default App;