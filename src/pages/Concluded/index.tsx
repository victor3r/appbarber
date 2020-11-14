import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import {
  Container,
  Icon,
  Title,
  Description,
  Button,
  ButtonText,
} from './styles';

type RootStackParamList = {
  List: undefined;
  Profile: undefined;
  Concluded: { provider: string };
};

type ConcludedProps = StackScreenProps<RootStackParamList, 'Concluded'>;

const Concluded: React.FC<ConcludedProps> = ({ route, navigation }) => (
  <Container>
    <Icon name="check" />
    <Title>Agendamento concluído</Title>
    <Description>
      {`Sexta, dia 20 de novembro de 2020 às 12:00h com ${route.params.provider}`}
    </Description>
    <Button onPress={() => navigation.goBack()}>
      <ButtonText>Ok</ButtonText>
    </Button>
  </Container>
);

export default Concluded;
