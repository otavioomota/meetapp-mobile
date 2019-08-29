import React, {useState, useRef} from 'react';
import {useDispatch} from 'react-redux';

import {signUpRequest} from '../../store/modules/auth/actions';
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

export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
    dispatch(signUpRequest({name, email, password}));
  }
  return (
    <Background>
      <Container>
        <Logo>M</Logo>
        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Digite seu nome"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu email"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
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
          <SubmitButton onPress={handleSubmit}> Criar conta</SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Ja tenho conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
