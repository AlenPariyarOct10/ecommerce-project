import { Button } from "antd";
import { NavLink } from "react-router-dom";

function ProductsCardPrimary(props) {
    return (
        <div className="flex flex-wrap justify-center">
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        {props.title}
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {props.items.map((item)=>(
                        /* Card - Start */

                             <div className="group relative">
                             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                 <img
                                     src={item.thumbnail}
                                     alt="Front of men's Basic Tee in black."
                                     className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                 />
                             </div>
                             <div className="mt-4 flex justify-between">
                                 <div>
                                     <h3 className="text-sm text-gray-700">
                                         <a className="text-lg font-semibold" href="#">
                                             <span aria-hidden="true" className="absolute inset-0" />
                                             {item.title}
                                         </a>
                                     </h3>
                                     <p className="mt-1 text-sm text-gray-500">{item.varient}</p>
                                 </div>
                                 {(item?.discount == 0)?<p className="text-sm font-medium text-gray-900">Rs. {item.price}</p>:<div><p className="text-sm font-medium text-gray-900 line-through">Rs. {item.price}</p><p className="font-medium text-gray-900">Rs. {item.price - (item.price*item.discount)/100}</p></div>}
                                 
                             </div>
                             <Button onClick={(id)=>{
                                 console.log(id);
                             }} className="w-full">Add to cart</Button>
                         </div>
                         /* Card - End */
                        ))}
                       

                    </div>


                </div>
            </div>

        </div>
    );
}

export default ProductsCardPrimary;
