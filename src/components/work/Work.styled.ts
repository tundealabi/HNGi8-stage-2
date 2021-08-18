import styled from 'styled-components';
import Card from '@material-ui/core/Card';

export const WorkContaniner = styled.div`
  /* height: 100vh; */
  height: calc(100vh - 75px);
  /* margin-top: 3rem; */
  padding-top: 6rem;
  /* border: 1px solid green; */
`;

export const WorkSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const WorkDoneContainer = styled(Card)`
  padding: 1rem;
  margin: 1rem;
  flex-basis: 21.63rem;
`;
