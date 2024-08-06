import axios from 'axios';
import { config ,hostTarget } from '../helpers/config';

const getCategoryData = async (token) => {
    try {
        const response = await axios.get(`${hostTarget}/categories`, config(token));
        return response;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

const addCategoryData = async (token, categoryData) => {
    try {
        const response = await axios.post(`${hostTarget}/categories`, categoryData, config(token));
        return response;
    } catch (error) {
        console.error('API error:', error);
        throw error;
    }
};

// Function to update a category
const updateCategoryData = async (token, categoryId, categoryData) => {
    try {
        const response = await axios.patch(`${hostTarget}/categories/${categoryId}`, categoryData, config(token));
        return response.data; // Return only the data part
    } catch (error) {
        console.error('API error:', error);
        throw error; // Rethrow error for higher-level handling
    }
};

// Function to delete a category
const deleteCategoryData = async (token, categoryId) => {
    try {
        const response = await axios.delete(`${hostTarget}/categories/${categoryId}`, config(token));
        return response.data; // Return only the data part
    } catch (error) {
        console.error('API error:', error);
        throw error; // Rethrow error for higher-level handling
    }
};



const categoryService = {
    getCategoryData,
    addCategoryData,
    updateCategoryData,
    deleteCategoryData,
};

export default categoryService;
