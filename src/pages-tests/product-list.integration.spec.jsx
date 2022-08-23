import { render, screen } from '@testing-library/react';
import ProductList from '../pages';

describe('ProductList', () => {
  it('should render ProductList', () => {
    render(<ProductList />);
    expect(screen.getByTestId('product-list')).toBeInTheDocument();
  });
});
