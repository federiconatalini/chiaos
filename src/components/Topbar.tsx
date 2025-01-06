import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Grid from './Grid';
import { useAuth } from '../utils/context/AuthContext';
import Menu from './Menu';

type TItemNavbar = 'home' | 'about' | 'contact';

interface INavbarButton {
  label: string;
  to: string;
  activeStyle: string;
}

function NavbarButton({ label, to, activeStyle }: INavbarButton) {
  return (
    <Link to={to}>
      <div className={`flex h-full w-full items-center`}>
        <p
          className={`text-base font-semibold ${activeStyle} text-light font-serif`}
        >
          {label}
        </p>
      </div>
    </Link>
  );
}

const ItemNavbar = [
  {
    id: 'home' as TItemNavbar,
    text: 'Home',
    goTo: '/',
  },
  {
    id: 'about' as TItemNavbar,
    text: 'About',
    goTo: '/about',
  },
  {
    id: 'contact' as TItemNavbar,
    text: 'Contact',
    goTo: '/contact',
  },
];

const Topbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  function getActiveButton(path: string, id: TItemNavbar) {
    const activeButtonStyle = 'border-b-2 border-solid ';

    if (path.includes('about') && id === 'about') {
      return activeButtonStyle;
    }

    if (path.includes('contact') && id === 'contact') {
      return activeButtonStyle;
    }

    if (!path.includes('contact') && !path.includes('about') && id === 'home') {
      return activeButtonStyle;
    }

    return '';
  }

  return (
    <Grid>
      <div className="flex h-full w-full items-center justify-between ">
        <div className="flex gap-8">
          <h1 className="font-serif">CHIAOS</h1>
          <div className="flex justify-between gap-4">
            {ItemNavbar.map(({ text, goTo, id }) => (
              <NavbarButton
                key={id}
                label={text}
                to={goTo}
                activeStyle={getActiveButton(window.location.pathname, id)}
              />
            ))}
          </div>
        </div>
        <Menu />
      </div>
    </Grid>
  );
};
export default Topbar;
