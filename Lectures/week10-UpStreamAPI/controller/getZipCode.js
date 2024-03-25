import https from 'https';
import { IP2LOCATION_KEY } from '../settings.js';
import axios from 'axios';

export const getZipCode = (userIp) => {
    const ip2locationUrl = `https://api.ip2location.io/?key=${IP2LOCATION_KEY}&ip=${userIp}`;

    // // With Promisses and HTTPS
    // return new Promise((resolve, reject) => {
    //     https.get(ip2locationUrl, (res) => {
    //         let data = '';
    //         res.on('data', (chunk) => {
    //             data += chunk;
    //         });
    //         res.on('end', () => {
    //             try {
    //                 resolve(JSON.parse(data));
    //             } catch (e) {
    //                 reject(e);
    //             }
    //         });
    //     }).on('error', (err) => {
    //         reject(err);
    //     });
    // });

    // With Axios
    return axios.get(ip2locationUrl)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });

};