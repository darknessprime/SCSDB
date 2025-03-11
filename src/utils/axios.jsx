import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmZmMmQ3Y2MwNDI3Mjk3NjBkMDljOTMyYmMxNjcwYiIsIm5iZiI6MTc0MTY2OTMwNS43NjcsInN1YiI6IjY3Y2ZjM2I5ODZmZWE2MGFiODFkZTBiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Nd1kVK8_e-ysoD4xz5oqPH7wmCsWdGA4xQy8ry0yvSE',
    },
});

export default instance;
