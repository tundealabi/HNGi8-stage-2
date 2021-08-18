import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
export const HomeContainer = styled.div`
  /* border: 1px solid red; */
  /* margin-top: 4rem; */
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* @media (min-width: 500px) {
    display: flex;
    flex-flow: row nowrap;
  } */
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
export const HomeIntroContainer = styled.div`
  text-transform: capitalize;
  font-size: 2rem;
  padding-top: 2rem;
  margin-bottom: 1rem;

  & > .Typewriter {
    margin-bottom: 2.73rem;
  }
  @media (min-width: 700px) {
    flex-basis: 50%;
    font-size: 4rem;
    .Typewriter {
      height: 7rem;
    }
  }
`;
export const HomeIntroText = styled(Typography)`
  && {
    font-size: 3rem;

    @media (min-width: 700px) {
      font-size: 2rem;
    }
  }
  & > span {
    color: #3f74e5;
  }
`;
export const HomeImageContainer = styled.div`
  flex-basis: 50%;
  display: none;
  & > img {
    width: 53%;
  }
  @media (min-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-top: 3rem;

  & > .socials {
    flex-basis: 70%;
    display: flex;
    justify-content: center;
    & > img {
      width: 53%;
    }
    @media (min-width: 700px) {
      display: none;
    }
  }
`;

export const SocialLinkContainer = styled.div`
  display: flex;
  flex-flow: column;
  flex-basis: 30%;
  justify-content: center;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const SocialIconButton = styled(IconButton)`
  & .MuiSvgIcon-root {
    font-size: 3rem;
  }
`;
