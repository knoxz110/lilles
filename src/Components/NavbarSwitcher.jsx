// components/NavbarSwitcher.jsx
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import PrivateNavbar from './PrivateNavbar';

const NavbarSwitcher = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const status = sessionStorage.getItem('isLoggedIn');
    setLoggedIn(status === 'true');
  }, []);

  return loggedIn ? <PrivateNavbar /> : <Navbar />;
};

export default NavbarSwitcher;
