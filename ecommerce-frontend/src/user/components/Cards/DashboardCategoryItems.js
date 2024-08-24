// Dashboard ma Specific Category ko Specific items dekhauna lai
import { Button } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import https from "../../../server/https";
import ProductCardSingle from "./ProductCardSingle";


function DashboardCategoryItems({ title }) {

    const [category, setCategory] = useState([]);

    useEffect(() => {

        https
            .get(`/categories/${title}/5`)
            .then((response) => {
                console.log("response", response);
                setCategory(response.data);
                console.log(category);

            })
            .catch((err) => {


            });
    }, [])

    return (
        <div className="flex flex-wrap justify-center">
            <div className="bg-white">
                <div className="mx-2 max-w-2xl sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        {title.toUpperCase()}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {category.map((item, index) => (
                            /* Card - Start */
                            <ProductCardSingle item={item} index={index}/>
                            /* Card - End */
                        ))}
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default DashboardCategoryItems;
