import { ButtonProps } from '@material-ui/core';
import { FC, ReactNode } from 'react';
import { StyledButton } from './button.styled';

interface GButtonProps extends ButtonProps {
  children: ReactNode;
  download?: boolean;
}

const GButton: FC<GButtonProps> = ({ children, ...others }: GButtonProps) => (
  <StyledButton variant="contained" {...others}>
    {children}
  </StyledButton>
);

export default GButton;
