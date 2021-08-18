import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { Link } from 'react-scroll';

export const HeaderAppBar = styled(AppBar)`
  background-color: black;
`;

export const HeaderToolBar = styled(ToolBar)`
  justify-content: space-between;
  padding: 0 2rem;
`;

export const LogoContainer = styled.div`
  /* border: 1px solid green; */
`;

export const NavContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px solid blue; */
    flex-basis: 55%;
    padding-right: 1.73rem;
    justify-content: space-between;
  }
  @media (min-width: 800px) {
    flex-basis: 35%;
  }
`;

export const NavLinkContainer = styled(Typography)``;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-transform: capitalize;
  padding-bottom: 0.73rem;
  &.active {
    border-bottom: 2px solid #3f74e5;
  }
`;

export const MenuIconButton = styled(IconButton)`
  & .MuiSvgIcon-root {
    font-size: 3rem;
  }
  && {
    @media (min-width: 600px) {
      display: none;
    }
  }
`;
