import { FC } from 'react';
import Typewriter from '../typewriter/Typewriter';
import GButton from '../button/button';
import Link from '@material-ui/core/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import devimage from '../../assets/developer-image.png';
import cvpdf from '../../documents/tunde-resume-cv.pdf';
import {
  HomeContainer,
  IntroContainer,
  HomeIntroContainer,
  HomeIntroText,
  HomeImageContainer,
  SocialContainer,
  SocialLinkContainer,
  SocialIconButton,
} from './Home.styled';
import GDivider from '../../shared/components/divider/Divider';

const Home: FC = () => {
  return (
    <HomeContainer id="home">
      <IntroContainer>
        <HomeIntroContainer>
          <HomeIntroText>hi,</HomeIntroText>
          <HomeIntroText>
            i'm <span>tunde</span>
          </HomeIntroText>
          <Typewriter typewriterText="fullstack developer" />
          <GButton href={cvpdf} download>
            get my cv
          </GButton>
        </HomeIntroContainer>
        <HomeImageContainer>
          <img src={devimage} alt="see home developer" />
        </HomeImageContainer>
      </IntroContainer>
      <SocialContainer>
        <SocialLinkContainer>
          <Link
            href="https://www.linkedin.com/in/alabi-akintunde/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <SocialIconButton>
              <LinkedIn fontSize="medium" />
            </SocialIconButton>
          </Link>
          <Link
            href="https://github.com/tundealabi"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <SocialIconButton>
              <GitHub />
            </SocialIconButton>
          </Link>
        </SocialLinkContainer>
        <div className="socials">
          <img src={devimage} alt="see home developer" />
        </div>
      </SocialContainer>
      <GDivider />
    </HomeContainer>
  );
};

export default Home;
