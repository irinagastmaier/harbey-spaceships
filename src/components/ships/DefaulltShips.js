import { useQuery } from '@apollo/client';
import { GET_SHIPS } from '../../services/queries';
import Loading from '../common/Loading';
import Ship from './DefaultShip';

export default function DefaultShips() {
  const { data, loading, error } = useQuery(GET_SHIPS);

  if (loading) return <Loading />;
  if (error) return <pre>{error.message}</pre>;

  return (
    <div style={{ width: '100%' }}>
      <h1>SpaceX Ships</h1>
      <ul>
        {data.ships
          .filter((ship) => ship.year_built >= 2011)
          .map((ship, i) => {
            return (
              <Ship name={ship.name} type={ship.type} image={ship.image} />
            );
            // return (
            //   <>
            //     {ship.missions.map((mission, i) => (
            //       <div key={ship.id}></div>
            //     ))}
            //   </>
            // );
          })}
      </ul>
    </div>
  );
}
