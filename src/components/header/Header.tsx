import Menu from '@material-ui/icons/Menu';
import { FC, useState } from 'react';
import { ReactComponent as HeaderLogo } from '../../assets/hng-logo.svg';
import Sidenav from '../sidenav/Sidenav';
import {
  HeaderAppBar,
  HeaderToolBar,
  LogoContainer,
  NavContainer,
  NavLinkContainer,
  NavLink,
  MenuIconButton,
} from './Header.styled';

const Header: FC = () => {
  const [links] = useState(() => ['home', 'about', 'work', 'contact']);
  const [showRightDrawer, setRightDrawer] = useState(false);

  return (
    <>
      <HeaderAppBar position="sticky" color="inherit">
        <HeaderToolBar>
          <LogoContainer>
            <a
              href="https://internship.zuri.team/"
              target="_blank"
              rel="noreferrer"
            >
              <HeaderLogo />
            </a>
          </LogoContainer>
          <NavContainer>
            {links.map((link, idx) => (
              <NavLinkContainer key={idx}>
                <NavLink to={link} spy smooth offset={-50}>
                  {link}
                </NavLink>
              </NavLinkContainer>
            ))}
          </NavContainer>
          <MenuIconButton onClick={() => setRightDrawer(!showRightDrawer)}>
            <Menu />
          </MenuIconButton>
        </HeaderToolBar>
      </HeaderAppBar>
      <Sidenav
        showRightDrawer={showRightDrawer}
        setRightDrawer={setRightDrawer}
      />
    </>
  );
};

export default Header;
