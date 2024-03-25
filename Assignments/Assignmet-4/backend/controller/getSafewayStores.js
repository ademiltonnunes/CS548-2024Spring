import { GITHUB_TOKEN } from '../settings.js';
import axios from 'axios';
import { getLoggerInstance } from '../logger.js';
const logger = getLoggerInstance();

export const getSafewayStoreSettings = () => {
    const token = GITHUB_TOKEN;
    const url = `https://raw.githubusercontent.com/ademiltonnunes/git_seetings/main/github_settings.json`;

    return axios.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github.v3.raw', 
            'Content-Type': 'application/json'
        
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        logger.error(error);
    });


    
};