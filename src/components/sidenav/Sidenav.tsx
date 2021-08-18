import CloseIcon from '@material-ui/icons/Close';
import { Dispatch } from 'react';
import { Link } from 'react-scroll';
import GButton from '../button/button';
import {
  CloseIconContainer,
  StyledDrawer,
  StyledSideDrawer,
  SidenavLinkContainer,
} from './Sidenav.styled';

interface SidenavProps {
  showRightDrawer: boolean;
  setRightDrawer: Dispatch<boolean>;
}

const Sidenav = ({ showRightDrawer, setRightDrawer }: SidenavProps) => {
  return (
    <StyledDrawer anchor="right" open={showRightDrawer}>
      <StyledSideDrawer>
        <CloseIconContainer>
          <CloseIcon onClick={() => setRightDrawer(!showRightDrawer)} />
        </CloseIconContainer>
        <SidenavLinkContainer>
          <GButton fullWidth>
            <Link
              to="home"
              spy={true}
              smooth={true}
              onClick={() => setRightDrawer(false)}
            >
              home
            </Link>
          </GButton>
          <GButton fullWidth>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={20}
              onClick={() => setRightDrawer(false)}
            >
              about
            </Link>
          </GButton>
          <GButton fullWidth>
            <Link
              to="work"
              spy={true}
              smooth={true}
              offset={20}
              onClick={() => setRightDrawer(false)}
            >
              work
            </Link>
          </GButton>
          <GButton fullWidth>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={20}
              onClick={() => setRightDrawer(false)}
            >
              contact
            </Link>
          </GButton>
        </SidenavLinkContainer>
      </StyledSideDrawer>
    </StyledDrawer>
  );
};

export default Sidenav;
