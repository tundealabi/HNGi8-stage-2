import { FC } from 'react';
import { SectionTitleContainer, SectionTitleText } from './SectionTitle.styled';

const SectionTitle: FC = ({ children }) => (
  <SectionTitleContainer>
    <SectionTitleText>{children}</SectionTitleText>
  </SectionTitleContainer>
);

export default SectionTitle;
