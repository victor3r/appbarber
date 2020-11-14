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
              'data:image/jpeg;base64,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',
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
