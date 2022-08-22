import { render, screen } from '@testing-library/react';
import { ProductCard } from './product-card';

describe('ProductCard', () => {
  it('should render ProductCard Component', () => {
    render(<ProductCard />);
    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
