import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Alert } from 'react-native';

import {
  Container,
  Header,
  HeaderText,
  Icon,
  ContentContainer,
  Image,
  Upload,
  InfoContainer,
  InputContainer,
  Input,
  Button,
  ButtonText,
} from './styles';

type RootStackParamList = {
  List: undefined;
  Profile: undefined;
  Concluded: { provider: string };
};

type ProfileProps = StackScreenProps<RootStackParamList, 'Profile'>;

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const handleConfirm = () => {
    Alert.alert('Mudanças confirmadas');
    navigation.goBack();
  };

  return (
    <Container>
      <Header>
        <Icon name="arrow-left" onPress={() => navigation.goBack()} />
        <HeaderText>Meu Perfil</HeaderText>
        <Icon name="power" />
      </Header>

      <ContentContainer>
        <Image
          source={{
            uri:
              'https://lh3.googleusercontent.com/ukNcYhigKmMWE__kXKlxRcB1GV6aWvPcdJj-vrXFq2qvydX28kVAQKo-eTAFeClYtIsNLw=s85',
          }}
        />
        <Upload>
          <Icon name="camera" style={{ marginRight: 0 }} />
        </Upload>
        <InfoContainer>
          <InputContainer>
            <Icon name="user" />
            <Input defaultValue="Victor Rabelo" />
          </InputContainer>
          <InputContainer>
            <Icon name="mail" />
            <Input
              defaultValue="victorabelo1697@gmail.com"
              keyboardType="email-address"
            />
          </InputContainer>
        </InfoContainer>

        <InfoContainer>
          <InputContainer>
            <Icon name="lock" />
            <Input placeholder="Senha atual" secureTextEntry />
          </InputContainer>
          <InputContainer>
            <Icon name="lock" />
            <Input placeholder="Nova senha" secureTextEntry />
          </InputContainer>
          <InputContainer>
            <Icon name="lock" />
            <Input placeholder="Confirmar senha" secureTextEntry />
          </InputContainer>
        </InfoContainer>

        <Button onPress={handleConfirm}>
          <ButtonText>Confirmar mudanças</ButtonText>
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default Profile;
