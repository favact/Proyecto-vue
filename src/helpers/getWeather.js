import axios from "axios";

const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m&timezone=auto';

export const getTemperatura = async () => {
    const respuesta = await axios.get(API_URL);
    const nuevaTemperatura = respuesta.data.current.temperature_2m;
    return nuevaTemperatura;
}