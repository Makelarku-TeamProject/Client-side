import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import {jwtDecode} from 'jwt-decode';
import categoryService from '../api/categoryService';
import { AuthContext } from './AuthContext';

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const { auth } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCategories = useCallback(async () => {
        if (auth?.token) {
            setLoading(true);
            setError(null);
            try {
                const decodedToken = jwtDecode(auth.token);
                if (decodedToken.role !== 'admin') {
                    throw new Error('Access denied');
                }

                const response = await categoryService.getCategoryData(auth.token);
                const data = response.data.data || response.data;

                if (Array.isArray(data)) {
                    setCategories(data);
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (err) {
                console.error('Error:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        } else {
            setError('No token provided');
        }
    }, [auth?.token]);

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    const addCategory = async (categoryData) => {
        if (auth?.token) {
            try {
                await categoryService.addCategoryData(auth.token, categoryData);
                fetchCategories();  
                setError(null);
            } catch (err) {
                console.error('Failed to add category:', err);
                setError('Failed to add category');
            }
        } else {
            setError('No token provided');
        }
    };

    const updateCategory = async (categoryId, categoryData) => {
        if (auth?.token) {
            try {
                await categoryService.updateCategoryData(auth.token, categoryId, categoryData);
                fetchCategories();  
                setError(null);
            } catch (err) {
                console.error('Failed to update category:', err);
                setError('Failed to update category');
            }
        } else {
            setError('No token provided');
        }
    };

    const deleteCategory = async (categoryId) => {
        if (auth?.token) {
            try {
                await categoryService.deleteCategoryData(auth.token, categoryId);
                fetchCategories();  
                setError(null);
            } catch (err) {
                console.error('Failed to delete category:', err);
                setError('Failed to delete category');
            }
        } else {
            setError('No token provided');
        }
    };

    return (
        <DataContext.Provider value={{ categories, loading, error, addCategory, updateCategory, deleteCategory, fetchCategories }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };
