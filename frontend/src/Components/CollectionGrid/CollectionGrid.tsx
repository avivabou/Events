import React from 'react';
import './CollectionGrid.css'; 

export interface CollectionGridProps<T> {
  injectData: (item: T) => React.ReactNode;
  data: T[];
  itemsInARow?: number;
}

const CollectionGrid = <T,>({ injectData, data, itemsInARow }: CollectionGridProps<T>) => {
  return (
    <div className="cards-collection" style={{ gridTemplateColumns: `repeat(${itemsInARow ?? 1}, 1fr)` }}>
      {data?.map((item, index) => (
        <div key={index} className="card-item">
          {injectData(item)}
        </div>
      ))}
    </div>
  );
};

export default CollectionGrid;
