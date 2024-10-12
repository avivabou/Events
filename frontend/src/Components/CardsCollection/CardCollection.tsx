import React from 'react';
import './CardsCollection.css'; 

interface CardsCollectionProps<T> {
  injectData: (item: T) => React.ReactNode;
  data: T[];
}

const CardsCollection = <T,>({ injectData, data }: CardsCollectionProps<T>) => {
  return (
    <div className="cards-collection">
      {data?.map((item, index) => (
        <div key={index} className="card-item">
          {injectData(item)}
        </div>
      ))}
    </div>
  );
};

export default CardsCollection;
