import { Button, Popconfirm, Table, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import https from "../../../server/https";

export default function ListCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchAllCategories();
    }, []);

    const fetchAllCategories = () => {
        https.get("/categories").then(response => {
            console.log(response);
            setCategories(response.data);
        });
    };

    const handleEdit = (record) => {
        console.log("Edit category:", record);
        // Add logic to handle edit action here
    };

    const handleDelete = (record) => {
        https.delete(`/categories/${record.id}`)
            .then((response) => {
                console.log(response);
                message.success("Category deleted successfully");
                fetchAllCategories(); 
            })
            .catch((error) => {
                message.error("Failed to delete category");
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
            title: "Color",
            dataIndex: "color",
            key: "color",
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
                        title="Are you sure you want to delete this category?"
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
            <h1>List Categories</h1>
            <Table columns={columns} dataSource={categories} rowKey="id" />
        </>
    );
}
