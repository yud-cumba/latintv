import React from 'react';
import ChatBot from 'react-simple-chatbot';



export default function ChatBotLatin() {
    return (
        <div>
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
          { value: 1, label: 'Pre-venta', trigger: '4' },
          { value: 2, label: 'Tarifas y recargos', trigger: '3' },
          { value: 3, label: 'Política de privacidad', trigger: '3' },
        ],
      },
      {
        id: '6',
        message: 'Wrong answer, try again.',
        trigger: '5',
      },
      {
        id: '7',
        message: 'Awesome! You are a telepath!',
        end: true,
      },
    ]}
  />
        </div>
    )
}