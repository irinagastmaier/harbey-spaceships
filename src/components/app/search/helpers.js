import { useState } from 'react';

export default function useShipFilters() {
  const [filters, _updateFilter] = useState({
    name: '',
    type: '',
    missions: { name: '' },
  });

  const updateFilter = (filterType, value) => {
    _updateFilter({
      [filterType]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}
