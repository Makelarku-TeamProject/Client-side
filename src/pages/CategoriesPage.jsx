import React, { useContext, useState, useMemo, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Layout from '../components/Admin/LayoutComponent';
import { DataContext } from '../context/DataContext';
import DataTable from 'react-data-table-component';

const CategoriesPage = () => {
  const { categories, loading, error, addCategory, updateCategory, deleteCategory, fetchCategories } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [form] = Form.useForm();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const filteredCategories = useMemo(() => {
    return categories.filter(category =>
      category.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, categories]);

  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    {
      name: 'Actions',
      cell: row => (
        <div>
          <Button onClick={() => handleEdit(row)} type="primary" size="small" className="me-2">Edit</Button>
          <Button onClick={() => handleDelete(row.id)} className='ant-btn css-var-r6 ant-btn-primary ant-btn-dangerous' size="small">Delete</Button>
        </div>
      )
    }
  ];

  const handleSubmit = async (values) => {
    try {
      if (values.id) {
        await updateCategory(values.id, { name: values.name });
      } else {
        await addCategory({ name: values.name });
      }
      form.resetFields();
    } catch (err) {
      console.error('Failed to submit category:', err);
    }
  };

  const handleEdit = (category) => {
    form.setFieldsValue({ id: category.id, name: category.name });
  };

  const handleDelete = async (id) => {
    try {
      await deleteCategory(id);
    } catch (err) {
      console.error('Failed to delete category:', err);
    }
  };

  if (loading) return <div className="text-center mt-5"><p>Loading...</p></div>;
  if (error) return <div className="text-center mt-5"><p className="text-danger">{error}</p></div>;

  return (
    <Layout>
      <main className="p-4 min-vh-100">
        <section className="mt-4">
          <div className="container">
            <div className="row">
              {/* Form Section */}
              <div className="col-md-4 mb-4">
                <h2 className="mb-4">Add / Edit Category</h2>
                <Form form={form} onFinish={handleSubmit} layout="vertical">
                  <Form.Item name="id" hidden>
                    <Input type="hidden" />
                  </Form.Item>
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please input the category name!' }]}
                  >
                    <Input placeholder="Category Name" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-100">
                      {form.getFieldValue('id') ? 'Update Category' : 'Add Category'}
                    </Button>
                  </Form.Item>
                </Form>
              </div>

              {/* Data Table Section */}
              <div className="col-md-8">
                <div className="mb-4">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
                <DataTable
                  columns={columns}
                  data={filteredCategories}
                  pagination
                  highlightOnHover
                  striped
                  responsive
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default CategoriesPage;
