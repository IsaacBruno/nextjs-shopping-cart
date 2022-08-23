import { fireEvent, render, screen } from '@testing-library/react';
import { CartItem } from './cart-item';

const product = {
  title: 'Cadeira bonita',
  price: '1,500.00',
  image:
    'https://images.unsplash.com/photo-1601392740426-907c7b028119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
};

const renderCartItem = () => render(<CartItem product={product} />);

describe('CartItem', () => {
  it('should render CartItem', () => {
    renderCartItem();
    expect(screen.getByTestId('cart-item')).toBeInTheDocument();
  });

  it('should display proper content', () => {
    renderCartItem();
    const image = screen.getByTestId('image');
    expect(
      screen.getByText(new RegExp(product.title, 'i')),
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(product.price, 'i')),
    ).toBeInTheDocument();
    expect(image).toHaveProperty('src', product.image);
    expect(image).toHaveProperty('alt', product.title);
  });

  it('should display 1 as initial quantity', () => {
    renderCartItem();
    expect(screen.getByTestId('quantity').textContent).toBe('1');
  });

  it('should increase quantity by 1 when second button is clicked', () => {
    renderCartItem();
    const [_, increaseButton] = screen.getAllByRole('button');
    fireEvent.click(increaseButton);
    expect(screen.getByTestId('quantity').textContent).toBe('2');
  });
  it.todo('should decrease quantity by 1 when first button is clicked');
  it.todo('should not go below zero in the quantity');
});
