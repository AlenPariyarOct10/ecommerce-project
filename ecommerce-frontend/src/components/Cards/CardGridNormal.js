import { NavLink } from "react-router-dom";

function CardGridNormal(props) {
    return (
        <div className="flex flex-wrap justify-center mt-10">
            {props.items.map((item, index) => (
            <NavLink className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center" to={item.path}>         
                <div key={index} className="p-4 max-w-sm">
                    <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col hover:dark:bg-gray-900 cursor-pointer">
                        <div className="flex items-center mb-3">
                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                                <img className="h-5" src={item.icon}></img>
                            </div>
                            <h2 className="text-white dark:text-white text-lg font-medium">
                                {item.title}
                            </h2>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
                </NavLink>

            )
            )}
            
        </div>
    );
}

export default CardGridNormal;
