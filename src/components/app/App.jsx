import React from 'react';
import { emojisplosion, emojisplosions } from 'emojisplosion';

// https://www.npmjs.com/package/emojisplosion

export default function App() {

  const handleClick = () => {
    const { cancel } = emojisplosions();
    setTimeout(cancel, 5000);
  };

  const handleAngry = () => {
    emojisplosion({
      emojis: ['๐ฅ', '๐'],
      physics: {
        initialVelocities: {
          rotation: {
            max: 14,
            min: -14,
          },
        },
        rotationDecelaration: 1.01,
      },
    });
  };

  const handleGreetings = () => {
    emojisplosion({
      emojis: ['๐'],
      position: {
        x: 200,
        y: 200,
      },
    });
  };
  
  const handleLaugh = () => {
    emojisplosion({
      emojis: ['๐', '๐คฉ'],
    });
  };

  const handleSad = () => {
    emojisplosion({
      emojis: ['๐ญ'],
      physics: {
        gravity: -0.35,
        initialVelocities: {
          y: {
            max: 14,
            min: 11.7,
          },
        },
      },
    });
  };
  
  const handleSurprise = () => {
    emojisplosion({
      emojis: ['๐ฑ'],
    });
  };

  const handleHearts = () => {
    emojisplosion({
      emojis: ['๐', '๐งก', '๐', '๐', '๐', '๐'],
    });
  };

  

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click</button><br/>
      <button onClick={handleAngry}>Angry</button><br/>
      <button onClick={handleGreetings}>Greetings</button><br/>
      <button onClick={handleLaugh}>Laugh</button><br/>
      <button onClick={handleSad}>Sad</button><br/>
      <button onClick={handleSurprise}>Surprise</button><br/>
      <button onClick={handleHearts}>Hearts</button><br/>
    </>
  );
}
