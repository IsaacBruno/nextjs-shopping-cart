import { renderHook } from '@testing-library/react-hooks';
import { useFetchProducts } from './use-fetch-products';
import { makeServer } from '../../miragejs/server';

describe('useFetchProducts', () => {
  let server;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render a list of 10 products', async () => {
    server.createList('product', 10);
    const { result, waitForNextUpdate } = renderHook(() => useFetchProducts());
    await waitForNextUpdate();
    expect(result.current.products).toHaveLength(10);
  });
});
