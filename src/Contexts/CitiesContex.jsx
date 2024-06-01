import {createContext, useEffect, useState} from "react";

const CitiesContext= createContext()

const BASE_URL='http://localhost:9000'


function CitiesProvider({children}){
    const [cities,setCities]=useState([])
    const [isLoading,setIsLoading]= useState(false)
    const [currentCity,setCurrentCity]=useState({})


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

   async function getCity(id){
            try {
                setIsLoading(true)
                const res=await fetch(`${BASE_URL}/cities/${id}`)
                const data=await res.json()
                setCurrentCity(data);
            }  catch {
                alert('There was an error loading data')
            }finally {
                setIsLoading(false)
            }
        }


    return <CitiesContext.Provider value={{
        cities,isLoading,getCity,currentCity,
    }}>
        {children}
    </CitiesContext.Provider>
}

export {CitiesProvider,CitiesContext}