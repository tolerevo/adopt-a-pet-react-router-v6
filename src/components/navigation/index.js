import React, { useEffect, useState } from 'react';
import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';

// Import NavLink continue with step 14 replacing a tags https://www.codecademy.com/courses/learn-react-router/projects/adopt-a-pet-react-router-v6

const Navigation = () => {
  const [petTypes, setPetTypes] = useState([]);

  useEffect(() => {
    async function getPetTypesData() {
      const { types } = await getPetTypes();
      setPetTypes(types);
    }

    getPetTypesData();
  }, []);

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key={'all'}>
          {/* These links should be NavLink component and add a special active class name if its an active link */}
          <a href="/"
            className='nav-link'
          >
            All Pets
          </a>
        </li>
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                {/* These links should be NavLink component and add a special active class name if its an active link */}
                <a href={`/${type._links.self.href.split('/').pop()}`}
                  key={type.name}
                  className='nav-link'               >
                  {type.name}s
                </a>{' '}
              </li>
            ))
          : 'Loading...'}
      </ul>
    </nav>
  );
};

export default Navigation;
