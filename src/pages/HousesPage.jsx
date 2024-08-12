import React, { useContext, useState, useEffect } from 'react';
import { Form } from 'antd'; // Import Form from antd
import Layout from '../components/Admin/LayoutComponent';
import { DataContext } from '../context/DataContext';
import HouseFormComponent from '../components/House/HouseFormComponent';
import HouseTableComponent from '../components/House/HouseTableComponent';

const HousesPage = () => {
    const { houses, houseLoading, houseError, addHouse, updateHouse, deleteHouse, fetchHouses } = useContext(DataContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [form] = Form.useForm();

    useEffect(() => {
        fetchHouses();
    }, [fetchHouses]);

    const handleSubmit = async (values) => {
        try {
            if (values.id) {
                await updateHouse(values.id, { ...values });
            } else {
                await addHouse({ ...values });
            }
            form.resetFields();
        } catch (err) {
            console.error('Failed to submit house:', err);
        }
    };

    const handleEdit = (house) => {
        form.setFieldsValue({ ...house });
    };

    const handleDelete = async (id) => {
        try {
            await deleteHouse(id);
        } catch (err) {
            console.error('Failed to delete house:', err);
        }
    };

    if (houseLoading) return <div className="text-center mt-5"><p>Loading...</p></div>;
    if (houseError) return <div className="text-center mt-5"><p className="text-danger">{houseError}</p></div>;

    return (
        <Layout>
            <main className="p-4 min-vh-100">
                <section className="mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                {/* Form Section */}
                                <HouseFormComponent form={form} onSubmit={handleSubmit} />
                            </div>
                            <div className="col-8">
                                {/* Data Table Section */}
                                <HouseTableComponent
                                    houses={houses}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                    searchTerm={searchTerm}
                                    onSearch={setSearchTerm}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default HousesPage;
