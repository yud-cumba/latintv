import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#003459',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#003459',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export default function ChatBotLatin() {
    return (
        <div>
            <ThemeProvider theme={theme}>
             <ChatBot
    steps={[
      {
        id: '1',
        message: 'Soy Latinobot ¿Con quién tengo el gusto de conversar?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hola {previousValue}!, ¡Un gusto de conocerte!',
        trigger: '4',
      },
      {
        id: '4',
        message: '¿Cómo puedo ayudarte?',
        trigger: '5',
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'Pre-venta', trigger: '6' },
          { value: 2, label: 'Tarifas y recargos', trigger: '7' },
          { value: 3, label: 'Política de privacidad', trigger: '16' },
        ],
      },
        {
          id: '6',
          message: 'El período de pre-venta 2021 empieza el jueves 19 de noviembre de 2020 y termina indefectiblemente el jueves 25 de febrero del 2021.',
          trigger: '26'
        },
      {
        id: '7',
        options: [
          { value: 1, label: 'Tarifas', trigger: '12' },
          { value: 2, label: 'Recargos', trigger: '8' }
        ],
      },
      //recargos
        {
          id: '8',
          message: 'Estos son los recargos que se aplican a tu pauta publicitaria:',
          trigger: '9'
        },
        {
          id: '9',
          message: 'La reserva de publicidad efectuada entre 8:00am y 12:00m tiene un costo regular.',
          trigger: '10'
        },
        {
          id: '10',
          message: 'Las reservas efectuadas entre 12:01pm y 4:00pm tendrán un recargo del 5% sobre el costo regular',
          trigger: '11'
        },
        {
          id: '11',
          message: 'Las reservas efectuadas después de las 4:00pm tendrán un recargo de 15% sobre el costo regular.',
          trigger: '26'
        },
        //tarifas
        {
          id: '12',
          message: 'Contamos con tres tipos de tarifas regulares:',
          trigger: '13'
        },
        {
          id: '13',
          message: 'Tarifa Básica (programas con rating promedio)',
          trigger: '14'
        },
        {
          id: '14',
          message: 'Tarifa Prime (programas alto rating)',
          trigger: '15'
        },
        {
          id: '15',
          message: 'Tarifa Súper Prime (Los programas favoritos del público)',
          trigger: '26'
        },
      {
        id: '16',
        options: [
          { value: 1, label: 'Acceso y aceptación del usuario', trigger: '17' },
          { value: 2, label: 'Uso del portal', trigger: '20' },
          { value: 2, label: 'Modificación de los términos y condiciones', trigger: '23' }
        ],
      },
      {
        id: '17',
        message: 'Estos Términos y Condiciones regulan el acceso y utilización por parte del Usuario de los servicios y facilidades que ofrece el Portal. La condición de "Usuario" es adquirida por la mera navegación y/o utilización del Portal',
        trigger: '18'
      },
      {
        id: '18',
        message: 'El acceso y utilización del Portal por parte del Usuario tiene carácter libre y gratuito, con excepción de algunos servicios suministrados por CPR o por terceros a través del Portal que pueden estar sujetos a condiciones específicas',
        trigger: '19'
      },
      {
        id: '19',
        message: 'Asimismo, el acceso y navegación por el Portal por parte del Usuario implica la aceptación sin reservas de todas las disposiciones incluidas en los presentes Términos y Condiciones.',
        trigger: '26'
      },
      {
        id: '20',
        message: 'Los servicios que se ofrecen a través del presente Portal se encuentran disponibles sólo para aquellas personas que puedan celebrar contratos legalmente vinculantes de acuerdo a lo establecido por la ley aplicable',
        trigger: '18'
      },
      {
        id: '21',
        message: 'Al acceder al Portal, el Usuario declara ser mayor de 18 años de edad y encontrarse facultado a asumir obligaciones vinculantes con respecto a cualquier tipo de responsabilidad que se produzca por el uso del Portal.',
        trigger: '19'
      },
      {
        id: '22',
        message: 'El Usuario se compromete a utilizar el Portal de conformidad con la Ley, los presentes Términos y Condiciones, la moral, las buenas costumbres y el orden público.',
        trigger: '26'
      },
      {
        id: '23',
        message: 'CPR se reserva expresamente el derecho a modificar, actualizar o ampliar en cualquier momento los presentes Términos y Condiciones.',
        trigger: '18'
      },
      {
        id: '24',
        message: 'Cualquier modificación, actualización o ampliación producida en los presentes Términos y Condiciones será inmediatamente publicada siendo responsabilidad del Usuario revisar los Términos y Condiciones vigentes al momento de la navegación.',
        trigger: '19'
      },
      {
        id: '25',
        message: 'En caso de que el Usuario no estuviera de acuerdo con las modificaciones mencionadas, podrá optar por no hacer uso de los servicios ofrecidos por CPR a través del Portal.',
        trigger: '26'
      },
      {
        id: '26',
        message: '¿Tienes alguna otra duda?',
        trigger: '27'
      },
      {
        id: '27',
        options: [
          { value: 1, label: 'Sí', trigger: '4' },
          { value: 2, label: 'No, gracias.', trigger: '28' },
        ],
      },
      {
        id: '28',
        message: 'Adiós',
        end: true
      },
    ]}
  />
  </ThemeProvider>
        </div>
    )
}