import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Spin, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import https from '../../../server/https';
import { useCategories } from '../../components/useCategories';

const { Option } = Select;



const CreateProducts = () => {
    const [loading, setLoading] = useState(false);
    const [allowSubmit, setAllowSubmit] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (type, message, description) => {
        api.open({
            message,
            description,
            type,
            placement: 'bottomRight',
        });
    };

    const { categories, fetchAllCategories } = useCategories();


    const onFinish = async (values) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
     
        formData.append('price', values.price);
        formData.append('category_id', values.category_id);
        formData.append('discount', values.discount);
        fileList.forEach((file) => {
            formData.append('images[]', file.originFileObj);
        });

        

        try {
            const response = await https.post("/products", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((res)=>
            console.log(res));
            openNotification('success', 'Product Created', 'The product was created successfully.');
            
        } catch (error) {
            console.log(error);
            openNotification('error', 'Creation Failed', 'There was an error creating the product.');
        } finally {
            setLoading(false);
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const handleFileChange = ({ fileList }) => setFileList(fileList);

    return (
        <>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                encType="multipart/form-data"
                initialValues={{
                    discount: 0,
                    price: 0
                }}
            >
                <div className="flex items-center m-5">
                    <h1 className="inline-block text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-900 text-center">
                        Create products
                    </h1>
                </div>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter name!',
                        },
                    ]}
                    onChange={async (e) => {
                        try {
                            const response = await https.post("categories/check_title", { title: e.target.value });
                            setAllowSubmit(response.data.available);
                        } catch (error) {
                            setAllowSubmit(false);
                        }
                    }}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter description!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Discount (%)"
                    name="discount"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter discount!',
                        },
                        {
                            type: "number",
                            min: 0,
                            max: 100,
                            message: "Invalid discount range"
                        }
                    ]}
                >
                    <InputNumber min={0} max={100} />
                </Form.Item>
                <Form.Item
                    label="Price (Rs.)"
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter price!',
                        },
                        {
                            type: "number",
                            min: 0,
                            max: 1000000,
                            message: "Invalid price range"
                        }
                    ]}
                >
                    <InputNumber min={0} max={1000000} />
                </Form.Item>
                <Form.Item
                    name="category_id"
                    label="Category"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >

                    <Select placeholder="Select Category" options={categories.map((item) => ({
                         label: <span>{item.name}</span> ,
                         value: item.id,
                         }))} />
                </Form.Item>
                <Form.Item label="Upload Image">
                    <Upload
                        listType="picture"
                        fileList={fileList}
                        onChange={handleFileChange}
                        beforeUpload={() => false} // Prevent automatic upload
                    >
                        <Button icon={<UploadOutlined />}>Select File</Button>
                    </Upload>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" disabled={!allowSubmit || loading}>
                        {loading ? <Spin /> : 'Create'}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CreateProducts;
