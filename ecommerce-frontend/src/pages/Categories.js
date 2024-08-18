import { TbLayoutGridRemove } from "react-icons/tb";
import CardGridNormal from "../components/Cards/CardGridNormal"

let items = [
    {
        title: "Electronics",
        description: "Discover the latest electronic devices, gadgets, and technology trends in the world of electronics. Stay updated with the best reviews, news, and updates on electronic devices.",
        icon: "https://cdn-icons-png.flaticon.com/512/880/880992.png",
        path: "electronics"
    },
    {
        title: "Men Clothings",
        description: "Discover the latest trends in men's clothing with our wide range of stylish options, including shirts, pants, jackets, and more. Upgrade your wardrobe with fashionable men's clothing.",
        icon: "https://cdn-icons-png.flaticon.com/512/2954/2954918.png"
    },
    {
        title: "Women Clothings",
        description: "Discover the latest trends in men's clothing with our wide range of stylish options, including shirts, pants, jackets, and more. Upgrade your wardrobe with fashionable men's clothing.",
        icon: "https://cdn-icons-png.flaticon.com/512/2954/2954918.png"
    }
];

export default function Categories() {
    document.title = "Categories 📃"
    return (
        <CardGridNormal items={items} />
    )
}