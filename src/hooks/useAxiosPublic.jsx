import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: "https://fabrico-server.vercel.app"
    baseURL: "https://fabrico-server.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic;
}

export default useAxiosPublic;