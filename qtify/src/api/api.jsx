import React from "react";
import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do/albums";

export const topAlbum = async () => {
    try {
        const response = await axios.get(`${ENDPOINT}/top`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export const newAlbum = async () => {
    try {
        const response = await axios.get(`${ENDPOINT}/new`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
