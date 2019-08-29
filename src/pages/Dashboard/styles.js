import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const MeetupsList = styled.FlatList`
  padding: 0 20px;
  margin-top: 40px;
`;

export const Meetup = styled.View`
  height: 450px;
  justify-content: center;
  background: #f2f2f2;
  border-radius: 4px;

  margin-bottom: 40px;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const Banner = styled.Image`
  height: 200px;
`;
export const MeetupDetails = styled.View`
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #001f3f;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;
export const Location = styled.Text`
  font-size: 18px;
  color: #001f3f;
  margin-bottom: 5px;
`;
export const Time = styled.Text`
  font-size: 18px;
  color: #001f3f;
  margin-bottom: 5px;
`;
export const Description = styled.Text`
  font-size: 18px;
  color: #001f3f;
  margin-bottom: 5px;
  text-align: justify;
`;
export const SubscriptionButton = styled(Button)`
  margin-top: 20px;
`;
