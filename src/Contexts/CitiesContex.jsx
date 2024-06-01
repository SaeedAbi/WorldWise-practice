import {createContext, useEffect, useState} from "react";

const CitiesContext= createContext()

const BASE_URL='http://localhost:9000'


function CitiesProvider({children}){
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

    return <CitiesContext.Provider value={{
        cities,isLoading,
    }}>
        {children}
    </CitiesContext.Provider>
}

export {CitiesProvider,CitiesContext}