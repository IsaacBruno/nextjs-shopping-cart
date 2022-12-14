import { useState } from 'react';
import { useFetchProducts } from '../hooks';
import { ProductCard } from '../components/product-card';
import { Search } from '../components/search';

export default function Home() {
  const { products, error } = useFetchProducts();
  const [term, setTerm] = useState('');

  let localProducts = [];
  if (term === '') {
    localProducts = products;
  } else {
    localProducts = products.filter(
      ({ title }) => title?.toLowerCase().indexOf(term.toLowerCase()) > -1,
    );
  }

  const renderProductListOrMessage = () => {
    if (localProducts.length === 0 && !error) {
      return <h4 data-testid='no-products'>No products</h4>;
    }
    return localProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  const renderErrorMessage = () => {
    if (!error) {
      return null;
    }
    return <h4 data-testid='server-error'>Server is down</h4>;
  };

  return (
    <main data-testid='product-list' className='my-8'>
      <Search doSearch={(term) => setTerm(term)} />
      <div className='container mx-auto px-6'>
        <h3 className='text-gray-700 text-2xl font-medium'>Wrist Watch</h3>
        <span className='mt-3 text-sm text-gray-500'>200+ Products</span>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
          {renderErrorMessage()}
          {renderProductListOrMessage()}
        </div>
      </div>
    </main>
  );
}
