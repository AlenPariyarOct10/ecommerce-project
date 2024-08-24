import { Button } from "antd";
import { NavLink } from "react-router-dom";
import ProductCardSingle from "./ProductCardSingle";

function ProductsCardPrimary(props) {
    
    return (
        <div className="flex flex-wrap justify-center">
            
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        {props.title}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {props.list.map((item, index)=>(
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

export default ProductsCardPrimary;
