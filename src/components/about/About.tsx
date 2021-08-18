import { FC } from 'react';
import SectionTitle from '../../shared/components/section_title/SectionTitile';
import {
  AboutContaniner,
  AboutSection,
  AboutMeImageContainer,
  AboutMeDescriptionContainer,
  AboutMeContainer,
  AboutMeText,
} from './About.styled';

import aboutmelogo from '../../assets/about-me-image.jpeg';
import GDivider from '../../shared/components/divider/Divider';

const About: FC = () => {
  return (
    <>
      <AboutContaniner id="about">
        <SectionTitle>about</SectionTitle>
        <AboutSection>
          <AboutMeImageContainer>
            <img src={aboutmelogo} alt="see about me " />
          </AboutMeImageContainer>
          <AboutMeDescriptionContainer>
            <AboutMeContainer>
              <AboutMeText>
                I am a result driven Full-Stack developer on the MERN stack and
                with a passion for developing innovative programs. I love to
                build new and challenging applications.
              </AboutMeText>
            </AboutMeContainer>
            <AboutMeContainer>
              <AboutMeText>
                I have experience working with JavaScript, jQuery,
                ReactJS(redux), VueJS(vuex) Material UI, Vuetify, Styled
                Components, Typescript, NextJs, NuxtJs, NodeJS, ExpressJs,
                PostgreSQL, MongoDB, Git, Github, Firebase.
              </AboutMeText>
            </AboutMeContainer>
            <AboutMeContainer>
              <AboutMeText>
                Learning new things is huge for me. I hope to join a team where
                I will ultimately evolve and build the future.
              </AboutMeText>
            </AboutMeContainer>
            <AboutMeContainer>
              <AboutMeText>
                I would love above anything, to work in a team and help build
                the next big technological application. I hope I can be the
                X-factor in your team.
              </AboutMeText>
            </AboutMeContainer>
          </AboutMeDescriptionContainer>
        </AboutSection>
      </AboutContaniner>
      <GDivider />
    </>
  );
};

export default About;
