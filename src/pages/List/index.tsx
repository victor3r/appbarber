import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

import getHairdressers from '../../utils/getHairdressers';

import {
  Container,
  Header,
  Image,
  WelcomeContainer,
  WelcomeText,
  WelcomeTextBold,
  HairdressersContainer,
  HairdresserText,
  HairdressersList,
  HairdresserCard,
  HairdresserCardContent,
  HairdresserName,
  HairdresserInfo,
  HairdresserInfoContainer,
  Icon,
} from './styles';

type RootStackParamList = {
  List: undefined;
  Profile: undefined;
};

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'List'>;

type ListProps = {
  navigation: ListScreenNavigationProp;
};

const hairdressers = getHairdressers();

const List: React.FC<ListProps> = ({ navigation }) => (
  <Container>
    <Header>
      <WelcomeContainer>
        <WelcomeText>Bem vindo,</WelcomeText>
        <WelcomeTextBold>Victor Rabelo</WelcomeTextBold>
      </WelcomeContainer>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={{
            uri:
              'https://lh3.googleusercontent.com/ukNcYhigKmMWE__kXKlxRcB1GV6aWvPcdJj-vrXFq2qvydX28kVAQKo-eTAFeClYtIsNLw=s85',
          }}
        />
      </TouchableOpacity>
    </Header>

    <HairdressersContainer>
      <HairdresserText>Cabeleireiros</HairdresserText>
      <HairdressersList
        data={hairdressers}
        renderItem={({ item: hairdresser }) => (
          <HairdresserCard key={hairdresser.name}>
            <Image source={{ uri: hairdresser.image }} />
            <HairdresserCardContent>
              <HairdresserName>{hairdresser.name}</HairdresserName>
              <HairdresserInfoContainer>
                <Icon name="calendar" />
                <HairdresserInfo>{hairdresser.day}</HairdresserInfo>
              </HairdresserInfoContainer>
              <HairdresserInfoContainer>
                <Icon name="clock" />
                <HairdresserInfo>{hairdresser.hour}</HairdresserInfo>
              </HairdresserInfoContainer>
            </HairdresserCardContent>
          </HairdresserCard>
        )}
        keyExtractor={hairdresser => hairdresser.name}
      />
    </HairdressersContainer>
  </Container>
);
export default List;
