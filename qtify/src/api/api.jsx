import React from "react";
import axios from "axios";

const ENDPOINT = "https://qtify-backend-labs.crio.do";

export const topAlbum = async () => {
    try {
        const response = await axios.get(`${ENDPOINT}/albums/top`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export const newAlbum = async () => {
    try {
        const response = await axios.get(`${ENDPOINT}/albums/new`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export const genres = async () => {
    try {
        const response = await axios.get(`${ENDPOINT}/genres`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

export const songs = async () => {
    try {
        const response = await axios.get(`${ENDPOINT}/songs`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}