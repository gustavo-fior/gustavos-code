import axios from "axios";

export const api = axios.create({ baseURL: "https://api.github.com" });

export const getRepoData = async (name, setData) => {
    await api.get(`/repos/gustavo-fior/${name}`).then(res => {
        setData(res.data);
        console.log(res.data);
    }).catch(err => {
        console.error(err);
    })
}