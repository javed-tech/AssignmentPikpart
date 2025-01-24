import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import ProductCard from './ProductCard';
import Product from "./assets/product.png";

const products = [
  { id: 1, name: 'Chain Set A' },
  { id: 2, name: 'Chain Set B' },
  { id: 3, name: 'Chain Set C' },
  { id: 4, name: 'Chain Set D' },
  { id: 5, name: 'Chain Set E'},
  { id: 6, name: 'Chain Set F'},
  { id: 7, name: 'Chain Set G'},
  { id: 8, name: 'Chain Set H'},
  { id: 9, name: 'Chain Set I' },
  { id: 10, name: 'Chain Set J'},
  { id: 11, name: 'Chain Set K' },
  { id: 12, name: 'Chain Set L' },

  { id: 13, name: 'Chain Set M' },
  { id: 14, name: 'Chain Set N'},
  { id: 15, name: 'Chain Set O' },
  { id: 16, name: 'Chain Set P'},
  { id: 17, name: 'Chain Set Q' },
];

const ProductListingLayout = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ width: currentProducts.length === 1 || currentProducts.length < 1 ? '185vh' : '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
      <Header style={{ flexGrow: 0, height: '48px' }} />

      <div style={{ flexGrow: 0, padding: '10px 10px', display: 'flex', justifyContent: 'space-between' ,backgroundColor:'#fff'}}>
        <SearchBar style={{ width: '461px', height: '44px' }} onChange={handleSearchChange} />
        <Pagination
          style={{ flexGrow: 0, height: '28px', margin: '20px 0' }}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
       
      </div>

      <div style={{  display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'#fff' }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          paddingRight: '20px',
          paddingLeft:'20px',
          paddingBottom:'20px',
          paddingTop:'5px',
          width: '100%'
        }}>
          {currentProducts.map(product => (
            <ProductCard key={product.id} style={{ width: '320px', height: 'auto' }} product={product} />
          ))}
        </div>
     
      </div>
    </div>
  );
};

export default ProductListingLayout;
