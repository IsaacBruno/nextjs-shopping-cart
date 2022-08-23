import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './product-card';

const product = {
  title: 'Cadeira bonita',
  price: '1,500.00',
  image:
    'https://images.unsplash.com/photo-1601392740426-907c7b028119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
};

const addToCart = jest.fn();
const renderProductCard = () =>
  render(<ProductCard product={product} addToCart={addToCart} />);

describe('ProductCard', () => {
  it('should render ProductCard Component', () => {
    renderProductCard();
    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderProductCard();
    expect(
      screen.getByText(new RegExp(product.title, 'i')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(product.price, 'i')),
    ).toBeInTheDocument();
    expect(screen.getByTestId('image')).toHaveStyle({
      backgroundImage: product.image,
    });
  });

  it('should call props.addToCart() when button gets clicked', () => {
    renderProductCard();
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(addToCart).toHaveBeenCalledTimes(1);
    expect(addToCart).toHaveBeenCalledWith(product);
  });
});
