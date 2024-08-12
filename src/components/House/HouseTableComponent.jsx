import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { Button, Input } from 'antd';

const HouseTableComponent = ({ houses, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredHouses, setFilteredHouses] = useState([]);

    useEffect(() => {
        // Initialize filteredHouses when houses prop is received
        setFilteredHouses(houses);
    }, [houses]);

    useEffect(() => {
        if (window.Fancybox) {
            window.Fancybox.bind('[data-fancybox="gallery"]');
        } else {
            console.error('Fancybox is not loaded');
        }
    }, []);

    useEffect(() => {
        const filtered = houses.filter(house =>
            house.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHouses(filtered);
    }, [searchTerm, houses]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true },
        { name: 'Name', selector: row => row.name, sortable: true },
        { name: 'Location', selector: row => row.location, sortable: true },
        { name: 'Price', selector: row => row.price, sortable: true },
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
            ),
        },
    ];

    return (
        <div className="col-md-8">
            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <DataTable
                columns={columns}
                data={filteredHouses}
                pagination
                highlightOnHover
                striped
                responsive
            />
        </div>
    );
};

export default HouseTableComponent;
