import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledDrawer = styled(Drawer)`
  & .MuiPaper-root {
    width: 60%;
  }
`;
export const StyledSideDrawer = styled.div`
  padding: 0 0.89rem;
`;

export const CloseIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid blue; */
  padding-top: 0.89rem;
  margin-bottom: 0.84rem;

  & > .MuiSvgIcon-root {
    font-size: 2.56rem;
  }
`;

export const SidenavLinkContainer = styled.div`
  & > .MuiButton-root {
    margin-top: 1rem;
  }
`;
