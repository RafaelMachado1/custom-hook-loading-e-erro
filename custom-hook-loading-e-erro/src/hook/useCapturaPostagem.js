import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

// custom hook é uma funcao
export function useCapturaPostagem() {
  const [postagens, setPostagens] = useState([]);


  const buscaPostagem = async () => {
    try {
      const result = await axios.get(`${BASE_URL}comments`)
      setPostagens(result.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    buscaPostagem()
  }, []);

  return postagens;
}