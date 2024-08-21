import React, { useState } from 'react';
import { Button, Form, Input, Select, Spin, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import https from '../../../server/https';


const { Option } = Select;

const CreateCategories = () => {
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

    const onFinish = async (values) => {
        setLoading(true);
        const formData = new FormData();
        formData.append('title', values.title);
        formData.append('description', values.description);
        formData.append('color', values.color);

        fileList.forEach((file) => {
            formData.append('images', file.originFileObj);
        });

        try {
            const response = await https.post("/categories", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            openNotification('success', 'Category Created', 'The category was created successfully.');
        } catch (error) {
            openNotification('error', 'Creation Failed', 'There was an error creating the category.');
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
            >
                <div className="flex items-center m-5">
                    <h1 className="inline-block text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-900 text-center">
                        Create category
                    </h1>
                </div>
                <Form.Item
                    label="Name"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter Name!',
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
                    name="color"
                    label="Color"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select placeholder="Select color" allowClear>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                        <Option value="red">Red</Option>
                        <Option value="yellow">Yellow</Option>
                        <Option value="orange">Orange</Option>
                        <Option value="gray">Gray</Option>
                    </Select>
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

export default CreateCategories;
