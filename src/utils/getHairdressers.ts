export interface Hairdresser {
  name: string;
  day: string;
  hour: string;
  image: string;
}

export default function getHairdressers(): Hairdresser[] {
  return [
    {
      name: 'Dog Nobre',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Rei do Crime',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Eduardo Campos',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Markin',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'data:image/jpeg;base64,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',
    },
    {
      name: 'Dog Lima',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'data:image/jpeg;base64,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',
    },
  ];
}
