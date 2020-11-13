import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

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
};

type ListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

type ProfileProps = {
  navigation: ListScreenNavigationProp;
};

const Profile: React.FC<ProfileProps> = ({ navigation }) => (
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

      <Button>
        <ButtonText>Confirmar mudanças</ButtonText>
      </Button>
    </ContentContainer>
  </Container>
);

export default Profile;
