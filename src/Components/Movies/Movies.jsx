import React from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();  // <--- Warning here

  return (
    <div>
      <h1>Movies Page</h1>
      {/* other code */}
    </div>
  );
};

export default MoviesPage;