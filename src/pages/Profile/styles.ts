import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: #312e38;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0;
  margin-bottom: 32px;
`;

export const HeaderText = styled.Text`
  color: #f4ede8;
  font-weight: 500;
  font-size: 20px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 40px 30px;
`;

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin-bottom: 35px;
`;

export const Upload = styled.TouchableOpacity`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ff9000;
  align-items: center;
  justify-content: center;
  left: 227px;
  top: 110px;
`;

export const InfoContainer = styled.View`
  margin-bottom: 32px;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 50px;
  max-width: 320px;
  border-radius: 10px;
  padding-left: 14px;
  background-color: #232129;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#666360',
})`
  flex: 1;
  color: #f4ede8;
  font-size: 14px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  max-width: 320px;
  border-radius: 10px;
  background-color: #ff9000;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-weight: 500;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon).attrs({
  size: 20,
})`
  color: #666360;
  margin-right: 18px;
`;
