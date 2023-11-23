import axios from 'axios';
import React from 'react';
export default function Api({name}) {

    const options = {
        method: 'GET',
        url: `https://realstonks.p.rapidapi.com/${name}`,
        headers: {
            'X-RapidAPI-Key': 'a16d208073msh2c1f3d8669226d3p175977jsn1efda1027b0d',
            'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
        }
    };
    async function fetchdata() {
        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    fetchdata()
}