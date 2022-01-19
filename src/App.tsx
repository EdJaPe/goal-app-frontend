import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';

import { User } from './interfaces/user.model'

import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleAuth = (user: User) => {
    if(user) {
      setUser(user);
    } else {
      setUser(null);
      localStorage.removeItem('jwtToken')
    };
  };

  const logoutHandler = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <div className='tc bg-light-green'>
        <Header  user={null} logoutHandler={logoutHandler} />
        <Landing handleAuth={handleAuth}/>
      </div>
    );
  } else {
    return(
      <div className='tc bg-light-green'>
        <Header user={user} logoutHandler={logoutHandler} />
        <Outlet />
      </div>
    )
  }

}

export default App;
