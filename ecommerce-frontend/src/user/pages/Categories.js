import { TbLayoutGridRemove } from "react-icons/tb";
import CardGridNormal from "../components/Cards/CardGridNormal"
import { useEffect, useState } from "react";
import https from "../../server/https";




export default function Categories() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchAllCategories();
    }, []);

   
    const fetchAllCategories = async () => {
        try {
            const response = await https.get("/categories");
            console.log(response);
            setItems(response.data);
        } catch (error) {
            console.error("Failed to fetch categories:", error);
            setItems([]); 
        }
    };

    document.title = "Categories 📃"
    return (
        <CardGridNormal items={items} />
    )
}