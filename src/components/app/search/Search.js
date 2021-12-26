import { useQuery } from '@apollo/client';
import { SHIP_SEARCH_QUERY } from '../../../services/queries.js';
import useShipFilters from './helpers.js';
import Loading from '../../common/Loading';

const Search = () => {
  const { data, loading, error, refetch } = useQuery(SHIP_SEARCH_QUERY);
  const { operations, models } = useShipFilters();

  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  console.log(error);

  return (
    <div>
      <div>
        <div>
          <label>Search</label>
          <input
            //add type and missions
            onChange={(e) => operations.updateFilter('name', e.target.value)}
            type="string"
          />
        </div>
        <button
          onClick={() =>
            refetch({
              shipsInput: {
                name: models.filters.name,
                type: models.filters.type,
                // mission: models.filters.mission_name,
              },
            })
          }
        >
          Submit!
        </button>
      </div>
      <div>
        {data.ships.map((ship, i) => (
          <div key={i}>
            <h1 style={{ color: 'red' }}>{ship.name} </h1>
            <h2 style={{ color: 'blue' }}>{ship.type}</h2>

            {ship.missions.map((mission, i) => (
              <div key={i}>{mission.name}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
