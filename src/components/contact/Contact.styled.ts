import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ReactNode } from 'react';

export const ContactContaniner = styled.div`
  /* margin-top: 3rem; */
  /* border: 1px solid green; */
  padding-top: 6rem;
  height: calc(100vh - 57px);
`;

export const ContactCard = styled(Card)`
  padding: 1rem;
  margin: 2rem auto 0;
  width: 88%;
`;

export const ContactList = styled(List)``;

export const ContactListItem = styled(ListItem)<{
  component?: string;
  href?: string;
  target?: '_blank';
  rel?: 'noreferrer';
  button: true;
  children: ReactNode;
}>``;
