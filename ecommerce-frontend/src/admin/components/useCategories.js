import { useEffect, useState } from "react";
import https from "../../server/https";

export const useCategories = () => 
{
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetchAllCategories();
    }, []);

    const fetchAllCategories = () =>{
        https.get("/categories")
            .then(response => setCategories(response.data))
            .catch(error => console.error("Failed to fetch categories:", error));
    };

    return {
        categories, fetchAllCategories
    };
}