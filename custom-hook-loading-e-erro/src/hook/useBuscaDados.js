import axios from "axios";
import { useEffect, useState } from "react";

// const nomeUsuarios = useBuscaDados(`${BASE_URL}users`,[])

export function useBuscaDados(urlApi, estadoInicial) {

    const [dados, setDados] = useState(estadoInicial);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false)

    const buscaDados = async () => {
        try {
            setLoading(true)
            const result = await axios.get(urlApi)
            setLoading(false) 
            setDados(result.data)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(true)
        }
    }

    useEffect(() => {
        buscaDados();
    }, [])

    return [dados,loading,error];
}
