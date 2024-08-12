import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const SliderFormComponent = ({ form, onSubmit }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleFinish = (values) => {
        onSubmit({ ...values, image: selectedFile });
    };

    return (
        <div className="col-md-4 mb-4">
            <h2 className="mb-4">Add Slider</h2>
            <Form form={form} onFinish={handleFinish} layout="vertical">
                <Form.Item name="id" hidden>
                    <Input type="hidden" />
                </Form.Item>
                <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input the slider name!' }]}
                >
                    <Input placeholder="Slider Name" />
                </Form.Item>
                <Form.Item
                    name="image"
                    rules={[{ required: true, message: 'Please upload an image!' }]}
                >
                    <div className="mb-3">
                        <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            onChange={handleFileChange}
                        />
                    </div>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-100 btn btn-primary">
                        Add Slider
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default SliderFormComponent;
