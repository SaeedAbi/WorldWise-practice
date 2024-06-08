import {useContext} from "react";

function useAuth(){
    const context=useContext(AudioContext)
    if (context===undefined) throw new Error('AuthContext was used outside AuthProvider ')
}

export default useAuth