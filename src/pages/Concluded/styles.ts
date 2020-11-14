import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
  align-items: center;
  justify-content: center;
  padding: 0 55px 0;
`;

export const Icon = styled(FeatherIcon).attrs({
  size: 100,
})`
  color: #04d361;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  margin-top: 47px;
`;

export const Description = styled.Text`
  color: #999591;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  margin: 16px 0 57px;
`;

export const Button = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #ff9000;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-weight: 700;
  font-size: 14px;
`;
