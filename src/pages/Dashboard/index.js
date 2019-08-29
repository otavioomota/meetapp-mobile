import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {formatRelative, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

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
import DatePicker from '../../components/DatePicker';
import Header from '../../components/Header';
import {meetupSubscriptionRequest} from '../../store/modules/meetup/actions';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());
  const [oldDate, setOldDate] = useState(date);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups', {
        params: {
          date,
          page,
        },
      });

      const data = response.data.map(item => ({
        ...item,
        dateFormatted: formatRelative(parseISO(item.date), new Date(), {
          locale: pt,
          addPrefix: true,
        }),
      }));

      // VERIFICANDO SE HOUVE MUDANCA DE DATA
      if (oldDate !== date) {
        setMeetups(data);
        setPage(1);
        setOldDate(date);
      }
      // VERIFICANDO SE HOUV MUDANCA DE PAGINA
      else {
        setMeetups([...meetups, ...data]);
      }
    }

    loadMeetups();
  }, [date, page]); //eslint-disable-line

  function handleNextPage() {
    setPage(page + 1);
  }

  function handleSubscription(id) {
    dispatch(meetupSubscriptionRequest(id));
  }
  return (
    <Background>
      <Header />
      <Container>
        <DatePicker date={date} onChange={setDate} />
        <MeetupsList
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReached={handleNextPage}
          onEndReachedThreshold={0.1}
          renderItem={({item}) => (
            <Meetup past={item.past}>
              <Banner
                source={{
                  uri: item.File
                    ? item.File.url
                    : 'https://abrilexame.files.wordpress.com/2017/07/reuniacc83o.png',
                }}
              />
              <MeetupDetails>
                <Title>{item.title}</Title>
                <Location>{item.location}</Location>
                <Time>{item.dateFormatted}</Time>
                <Description>{item.description}</Description>
                <SubscriptionButton onPress={() => handleSubscription(item.id)}>
                  Inscrever-se
                </SubscriptionButton>
              </MeetupDetails>
            </Meetup>
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Dashboard',
  fontSize: 20,
};
