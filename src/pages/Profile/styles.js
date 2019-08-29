import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  padding: 0 30px;
  margin-top: 60px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)``;

export const LogoutButton = styled(Button)`
  margin-top: 15px;
`;

export const Br = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.5);

  margin-top: 10px;
  margin-bottom: 20px;
`;
