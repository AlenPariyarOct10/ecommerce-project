import { Button, Popconfirm, Table, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import https from "../../../server/https";


export default function ListProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const fetchAllProducts = () => {
        https.get("/products").then(response => {
            console.log(response);
            setProducts(response.data);
        });
    };

    const handleEdit = (record) => {
        console.log("Edit product:", record);
     
    };

    const handleDelete = (record) => {
        https.delete(`/products/${record.id}`)
            .then((response) => {
                console.log(response);
                message.success("Product deleted successfully");
                fetchAllProducts(); 
            })
            .catch((error) => {
                message.error("Failed to delete Product");
                console.error(error);
            });
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "List",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Discount",
            dataIndex: "discount",
            key: "discount",
        },
        {
            title: "Category",
            key: "category_id",
            dataIndex: "category_name"
        },
       
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <span>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                        style={{ marginRight: 8 }}
                    >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Are you sure you want to delete this product?"
                        onConfirm={() => handleDelete(record)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button icon={<DeleteOutlined />} danger>
                            Delete
                        </Button>
                    </Popconfirm>
                </span>
            ),
        },
    ];
    


    return (
        <>
            <h1>List Products</h1>
        
            <Table columns={columns} dataSource={products} rowKey="id" />
        </>
    );
}
