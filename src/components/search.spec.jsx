import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './search';

const doSearch = jest.fn();

describe('Search', () => {
  it('should render a form', () => {
    render(<Search doSearch={doSearch} />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('should call props.doSearch when form is submitted', () => {
    render(<Search doSearch={doSearch} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(doSearch).toHaveBeenCalledTimes(1);
  });
});
