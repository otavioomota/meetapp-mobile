import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {signInRequest} from '../../store/modules/auth/actions';
import {
  Container,
  Logo,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

import Background from '../../components/Background';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest({email, password}));
  }
  return (
    <Background>
      <Container>
        <Logo>M</Logo>
        <Form>
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu email"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Digite sua senha"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}> Acessar</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar uma conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
