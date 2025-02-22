import React from 'react';
import { render, screen } from '@testing-library/react';
import CollectionGrid, { CollectionGridProps } from './CollectionGrid';

describe('CollectionGrid', () => {
  const mockData = ['Item 1', 'Item 2', 'Item 3'];
  const injectData: CollectionGridProps<string>['injectData'] = (item) => <div>{item}</div>;

  test('renders collection grid with provided items', () => {
    render(<CollectionGrid data={mockData} injectData={injectData} itemsInARow={3} />);
    mockData.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test('applies correct grid columns based on itemsInARow', () => {
    const { container } = render(<CollectionGrid data={mockData} injectData={injectData} itemsInARow={2} />);
    expect(container.firstChild).toHaveStyle('grid-template-columns: repeat(2, 1fr)');
  });
});
