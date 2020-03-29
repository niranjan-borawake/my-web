import React, { useState } from 'react';
import Timeline from '../Timeline';
import './App.css';
import Header from '../Header';

function App() {
  const [shouldShowTimeline, setShouldShowTimeline] = useState(false);
  return (
    <div className="app">
      <Header avatarOnClickHandler={() => setTimeout(() => setShouldShowTimeline(true), 2000)} />
      {
        shouldShowTimeline && <Timeline />
      }
    </div>
  );
}

export default App;
