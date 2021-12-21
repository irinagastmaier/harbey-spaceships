import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}
