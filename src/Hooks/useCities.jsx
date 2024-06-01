import React, {useContext} from 'react';
import {CitiesContext} from "../Contexts/CitiesContex.jsx";

const UseCities = () => {
const context= useContext(CitiesContext)
   if (context === undefined) throw new Error('CitiesContext was used outside the CitiesProvider')
    return context
};

export default UseCities;