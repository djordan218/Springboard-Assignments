import React, { useState } from 'react';
import MadlibForm from './MadlibForm';

function Madlib() {
  const [story, setStory] = useState('');

  const getStory = (formData) => {
    const story = `There once was a ${formData.noun} who had a ${formData.noun2}. One day he turned ${formData.color} and ${formData.adjective} died.`;
    setStory(story);
  };

  const reset = () => {
    setStory('');
  };

  return (
    <div>
      <MadlibForm getStory={getStory} />
      <h3>{story ? story : 'Click "Get Story" when you are ready!'}</h3>
      {!story ? story : <button onClick={reset}>Reset</button>}
    </div>
  );
}

export default Madlib;
