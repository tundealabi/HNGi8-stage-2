import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';

import SectionTitle from '../../shared/components/section_title/SectionTitile';
import dealpotlogo from '../../assets/dealpot-logo.png';
import { WorkContaniner, WorkSection, WorkDoneContainer } from './Work.styled';
import GDivider from '../../shared/components/divider/Divider';

const Work = () => {
  return (
    <>
      <WorkContaniner id="work">
        <SectionTitle>work</SectionTitle>
        <WorkSection>
          <WorkDoneContainer>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Dealpot Application"
                height="140"
                image={dealpotlogo}
                title="Dealpot Application"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dealpot
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  With our application-DealPot,obtaining best deals on products
                  will become easier for users,as users can track the best deals
                  on various online shopping platforms such as Jumia, Konga,
                  Kara, PointekOnline, Payporte.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="medium"
                color="primary"
                href="https://github.com/tundealabi/dealpot-nextjs"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
              >
                Github
              </Button>
              <Button
                size="medium"
                color="primary"
                href="https://dealpot-nextjs.vercel.app/"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
              >
                Live
              </Button>
            </CardActions>
          </WorkDoneContainer>
        </WorkSection>
      </WorkContaniner>
      <GDivider />
    </>
  );
};

export default Work;
