import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Github from '@material-ui/icons/GitHub';
import Phone from '@material-ui/icons/Phone';
import InboxIcon from '@material-ui/icons/Inbox';
import WhatsApp from '@material-ui/icons/WhatsApp';
import LinkedIn from '@material-ui/icons/LinkedIn';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactNode, useState } from 'react';
import SectionTitle from '../../shared/components/section_title/SectionTitile';
import {
  ContactCard,
  ContactContaniner,
  ContactList,
  ContactListItem,
} from './Contact.styled';

function ListItemLink(props: {
  href: string;
  children: ReactNode;
  button: true;
}) {
  return (
    <ContactListItem
      component="a"
      {...props}
      rel="noreferrer"
      target="_blank"
    />
  );
}

const Contact = () => {
  const [contactInfo] = useState(() => [
    {
      type: 'link',
      description: 'Github',
      value: 'https://github.com/tundealabi',
      icon: Github,
    },
    {
      type: 'link',
      description: 'Mail',
      value: 'tundealabi4780@gmail.com',
      icon: InboxIcon,
    },
    {
      type: 'link',
      description: 'Linked In',
      value: 'https://www.linkedin.com/in/alabi-akintunde/',
      icon: LinkedIn,
    },
    {
      type: 'plain',
      description: 'Phone',
      value: '+2348167229045',
      icon: Phone,
    },
    {
      type: 'plain',
      description: 'Whatsapp',
      value: '+2348167229045',
      icon: WhatsApp,
    },
  ]);
  return (
    <ContactContaniner id="contact">
      <SectionTitle>reach me</SectionTitle>
      <ContactCard>
        <ContactList>
          {contactInfo.map((item, idx) =>
            item.type === 'plain' ? (
              <ContactListItem key={idx} button>
                <ListItemIcon>
                  <SvgIcon component={item.icon} color="primary" />
                </ListItemIcon>
                <ListItemText>
                  {`${item.description}: ${item.value}`}
                </ListItemText>
              </ContactListItem>
            ) : (
              <ListItemLink
                key={idx}
                button
                href={
                  item.description === 'Mail'
                    ? `mailto:${item.value}`
                    : item.value
                }
              >
                <ListItemIcon>
                  <SvgIcon component={item.icon} color="primary" />
                </ListItemIcon>
                <ListItemText>
                  {`${item.description}: ${item.value}`}
                </ListItemText>
              </ListItemLink>
            )
          )}
        </ContactList>
      </ContactCard>
    </ContactContaniner>
  );
};

export default Contact;
