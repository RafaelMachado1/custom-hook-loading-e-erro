import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/constants"

// Funcao Custom hook
export function useExemplos(){

    const [nomeUsuarios,setNomeUsuarios] = useState([])

    useEffect(()=>{
      axios.get(`${BASE_URL}users`)
      .then((response)=>{
        setNomeUsuarios(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    },[])

    return nomeUsuarios;
}

// Funcao Generica custom hook
export function useGenerico(urlApi,valorEstadoInicial){

    const [dados,setDados] = useState(valorEstadoInicial)

    useEffect(async()=>{
        await axios.get(urlApi)
        .then((response)=>{
            setDados(response.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    return dados;
}