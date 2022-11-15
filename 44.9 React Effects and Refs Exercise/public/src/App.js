import React from 'react';
import Counter from './Counter';
import './App.css';
import ProfileViewer from './ProfileViewer';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';
import TimerWrapper from './TimerWrapper';
import Video from './Video';
import Focuser from './Focuser';
import Timer2 from './Timer2';

function App() {
  return (
    <div className="App">
      <h1>React Effects & Reps</h1>
      <Counter />
      <TimerWrapper />
      <Timer2 />
      <ProfileViewer />
      <ProfileViewer name="djordan218" color="teal" />
      <ProfileViewer name="colt" color="orange" />
      <ProfileViewerWithSearch />
      <Focuser />
      <Video />
    </div>
  );
}

export default App;
