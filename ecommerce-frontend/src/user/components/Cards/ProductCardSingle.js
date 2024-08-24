import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../../app/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductCardSingle({ item }) {
    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch(addToCart(item));
        
    };
    const cartItems = useSelector(state => state);
        console.log(cartItems);

    return (
        <div className="group relative">
            <NavLink to={"/product/" + item.slug} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src={item.images[0].url + "/" + item.images[0].image_path}
                        alt={item.description}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span className="text-lg font-semibold">
                                {item.name}
                            </span>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.varient}</p>
                    </div>
                    {item?.discount === 0 ? (
                        <p className="text-sm font-medium text-gray-900">Rs. {item.price}</p>
                    ) : (
                        <div>
                            <p className="text-sm font-medium text-gray-900 line-through">Rs. {item.price}</p>
                            <p className="font-medium text-gray-900">Rs. {item.price - (item.price * item.discount) / 100}</p>
                        </div>
                    )}
                </div>
            </NavLink>
            <Button onClick={addToCartHandler} className="w-full">
                Add to cart
            </Button>
        </div>
    );
}
