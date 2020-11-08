import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Hairdresser } from '../../utils/getHairdressers';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;

export const Header = styled.View`
  flex-direction: row;
  background-color: #28262e;
  padding: 0 24px 24px;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeContainer = styled.View``;

export const WelcomeText = styled.Text`
  color: #666360;
  font-weight: 400;
  font-size: 20px;
`;

export const WelcomeTextBold = styled.Text`
  color: #ff9000;
  font-weight: 500;
  font-size: 20px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const HairdressersContainer = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const HairdresserText = styled.Text`
  margin-top: 32px;
  color: #f4ede8;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 24px;
`;

export const HairdressersList = styled(
  FlatList as new () => FlatList<Hairdresser>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const HairdresserCard = styled.View`
  flex-direction: row;
  background-color: #3e3b47;
  width: 100%;
  height: 112px;
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 16px;
  align-items: center;
`;

export const HairdresserCardContent = styled.View`
  margin-left: 20px;
`;

export const HairdresserName = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #f4ede8;
  margin-bottom: 12px;
`;

export const HairdresserInfo = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #999591;
  margin-left: 12px;
`;

export const HairdresserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

export const Icon = styled(FeatherIcon)`
  color: #ff9000;
`;
