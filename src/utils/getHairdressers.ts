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
        'https://lh3.googleusercontent.com/GrN-eeIxfwwU_kjn0724RvoiporXo_HXFZDgprkeOXkIjMFYcjBg76sUHlWcMgNYual3=s85',
    },
    {
      name: 'Rei do Crime',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'https://lh3.googleusercontent.com/KncEa8ZdwZ8nVoRCsJ93WLvc3_FnYAQ4ldZ7bXVXr0KnMBihDoPXv40X09KmhpJvAkrPVXU=s85',
    },
    {
      name: 'Eduardo Campos',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'https://lh3.googleusercontent.com/8pKnZsYdy5y5vc2F_7LttKf5wHaJSf8jezPEIZitYzsWXT5nZSObS5-RgM82nOlsAjq83Q=s85',
    },
    {
      name: 'Markin',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'https://lh3.googleusercontent.com/hCzltTe6tolusqsN4OJ2cm5T6Q4G9Y-l-UStN1fKfcMFgwsurgW0LhgIbGPHS8kqrxspTg=s85',
    },
    {
      name: 'Dog Lima',
      day: 'Segunda à Sexta',
      hour: '8h às 18h',
      image:
        'https://lh3.googleusercontent.com/X6HkpIFzU-yLCMQphrjAQxq4VssUYFFlYuJSRPhsyYSypCFkUaJOFVROQRa1FU2G68har08=s85',
    },
  ];
}
