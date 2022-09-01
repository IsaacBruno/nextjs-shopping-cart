import { useFetchProducts } from '../hooks';
import { ProductCard } from '../components/product-card';
import { Search } from '../components/search';

export default function Home() {
  const { products } = useFetchProducts();

  const renderProductListOrMessage = () => {
    if (products.length === 0) {
      return <h4 data-testid='no-products'>No products</h4>;
    }
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };

  return (
    <main data-testid='product-list' className='my-8'>
      <Search />
      <div className='container mx-auto px-6'>
        <h3 className='text-gray-700 text-2xl font-medium'>Wrist Watch</h3>
        <span className='mt-3 text-sm text-gray-500'>200+ Products</span>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6'>
          {renderProductListOrMessage()}
        </div>
      </div>
    </main>
  );
}
