import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';

import {meetupSubscriptionCancelRequest} from '../../store/modules/meetup/actions';
import {
  Container,
  MeetupsList,
  Meetup,
  Banner,
  MeetupDetails,
  Title,
  Location,
  Time,
  Description,
  SubscriptionButton,
} from './styles';

import Background from '../../components/Background';
import Header from '../../components/Header';

export default function Subscriptions() {
  const [meetups, setMeetups] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('/subscriptions');

      const data = response.data.map(subscription => ({
        ...subscription,
        dateFormatted: formatRelative(
          parseISO(subscription.Meetup.date),
          new Date(),
          {
            locale: pt,
            addPrefix: true,
          },
        ),
      }));
      setMeetups(data);
    }

    loadSubscriptions();
  }, []);

  function handleCancel(id) {
    dispatch(meetupSubscriptionCancelRequest(id));
  }
  return (
    <Background>
      <Header />
      <Container>
        <MeetupsList
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Meetup past={item.Meetup.past}>
              <Banner
                source={{
                  uri: item.Meetup.File
                    ? item.Meetup.File.url
                    : 'https://abrilexame.files.wordpress.com/2017/07/reuniacc83o.png',
                }}
              />
              <MeetupDetails>
                <Title>{item.Meetup.title}</Title>
                <Location>{item.Meetup.location}</Location>
                <Time>{item.dateFormatted}</Time>
                <Description>{item.Meetup.description}</Description>
                <SubscriptionButton onPress={() => handleCancel(item.id)}>
                  Cancelar inscricao
                </SubscriptionButton>
              </MeetupDetails>
            </Meetup>
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscricoes',
};
