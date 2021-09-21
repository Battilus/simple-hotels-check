import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://engine.hotellook.com/api/v2/cache.json',
});