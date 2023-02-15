import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

export function useCapturaNome() {

    const [nomeUsuarios, setNomeUsuarios] = useState([]);
    
    const buscaNomes = async () => {
        try {
            const result = await axios.get(`${BASE_URL}users`)
            setNomeUsuarios(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        buscaNomes()
    }, []);

    return nomeUsuarios;
}