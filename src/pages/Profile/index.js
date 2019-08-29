import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileRequest} from '../../store/modules/user/actions';

import {logout} from '../../store/modules/auth/actions';
import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Br,
  LogoutButton,
} from './styles';

import Background from '../../components/Background';
import Header from '../../components/Header';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        password,
        oldPassword,
        confirmPassword,
      }),
    );
  }

  function handleLogout() {
    dispatch(logout());
  }
  return (
    <Background>
      <Header />
      <Container>
        <Form>
          <FormInput
            icon="person-outline"
            placeholder="Digite seu nome"
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => emailRef.current.focus()}
            returnKeyType="next"
          />
          <FormInput
            icon="mail-outline"
            placeholder="Digite seu email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            ref={emailRef}
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            returnKeyType="next"
          />
          <Br />
          <FormInput
            icon="lock-outline"
            placeholder="Digite sua senha atual"
            secureTextEntry
            value={oldPassword}
            onChangeText={setOldPassword}
            ref={oldPasswordRef}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
          />
          <FormInput
            icon="lock-outline"
            placeholder="Digite sua nova"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            ref={passwordRef}
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            returnKeyType="next"
          />
          <FormInput
            icon="lock-outline"
            placeholder="Confirme a sua nova senha"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            ref={confirmPasswordRef}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
          />
          <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          <LogoutButton onPress={handleLogout}>Sair do Meetapp</LogoutButton>
        </Form>
      </Container>
    </Background>
  );
}
