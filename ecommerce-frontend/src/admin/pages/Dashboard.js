import Item from "antd/es/list/Item";
import DashboardCard from "../components/DashboardCard";
import { AppstoreAddOutlined } from "@ant-design/icons";


export default function Dashboard()
{
    const items = [
        {
            title : "Total Categories",
            count : "0",
            icon : <AppstoreAddOutlined style={{ fontSize: '50px', color: '#00' }} />,
            textColor : "text-green-500",
            bgColor : "bg-green-200",
            hover : "hover:bg-green-300"
         
        },
        {
            title : "Total Products",
            count : "0",
            icon : <AppstoreAddOutlined style={{ fontSize: '50px', color: '#00' }} />,
            textColor : "text-blue-500",
            bgColor : "bg-blue-200",
            hover : "hover:bg-blue-300"
         
        }
    ]
    document.title = "Dashboard"
    return (
        <>
            <DashboardCard cards={items}/>
        </>
    )
}
