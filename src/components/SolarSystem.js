import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          // eslint-disable-next-line max-len
          planets.map((planet) => <PlanetCard key={ planet.name } planetName={ planet.name } planetImage={ planet.image } />)
        }
      </div>
    );
  }
}

export default SolarSystem;
