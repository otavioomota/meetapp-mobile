import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;

  justify-content: center;
`;
export const Logo = styled.Text`
  font-size: 40px;
  color: #f94d6a;
  text-align: center;
`;

export const Form = styled.View`
  margin-top: 60px;
  padding: 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.4);
`;
export const SubmitButton = styled(Button)``;

export const SignLink = styled(TouchableOpacity)`
  align-self: center;
  margin-top: 15px;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-size: 15px;
`;
