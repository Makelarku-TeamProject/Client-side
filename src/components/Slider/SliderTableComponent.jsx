import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Input } from 'antd';

const SliderTableComponent = ({ sliders, onDelete }) => {
    useEffect(() => {
        // Ensure Fancybox is available before initializing
        if (window.Fancybox) {
            window.Fancybox.bind('[data-fancybox="gallery"]');
        } else {
            console.error('Fancybox is not loaded');
        }
    }, []);

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        {
            name: 'Image',
            cell: row => (
                <a
                    data-fancybox="gallery"
                    href={row.image_url} // URL of the image
                    data-caption={row.name} // Caption for the image
                >
                    <img
                        src={row.image_url}
                        alt={row.name}
                        className="img-thumbnail"
                        style={{ width: 100, height: 60, objectFit: 'cover' }}
                    />
                </a>
            ),
            sortable: false,
        },
        {
            name: 'Actions',
            cell: row => (
                <Button onClick={() => onDelete(row.id)} className='btn btn-danger btn-sm'>Delete</Button>
            )
        }
    ];

    return (
        <div className="col-md-8">
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Search..."
                />
            </div>
            <DataTable
                columns={columns}
                data={sliders}
                pagination
                highlightOnHover
                striped
                responsive
            />
        </div>
    );
};

export default SliderTableComponent;
