import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

export const AboutContaniner = styled.div`
  /* height: 100vh; */
  /* height: calc(100vh - 75px); */
  padding-top: 6rem;
  /* border: 1px solid green; */
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 700px) {
    flex-flow: row nowrap;
    align-items: center;
  }
`;

export const AboutMeImageContainer = styled.div`
  display: none;

  & > img {
    width: 100%;
  }
  @media (min-width: 700px) {
    display: block;
    width: 40%;
    /* border: 1px solid yellow; */
  }
`;

export const AboutMeDescriptionContainer = styled.div`
  flex-basis: 60%;
`;

export const AboutMeContainer = styled(Card)`
  padding: 1rem;
  margin: 1rem;
`;
export const AboutMeText = styled(Typography)`
  && {
    text-align: center;
    font-size: 1.1rem;
    line-height: 2.41rem;
  }
`;
