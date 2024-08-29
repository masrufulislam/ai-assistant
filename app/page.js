'use client';

import React, { useState } from 'react';
import Chat from '../components/Chat';
import WelcomePage from '../components/WelcomePage';

function Page() {
  const [chatStarted, setChatStarted] = useState(false);
  const initialPrompt = '';

  const handleStartChat = () => {
    setChatStarted(true);
  };

  return (
    <div>
      {!chatStarted ? (
        <WelcomePage onStart={handleStartChat} />
      ) : (
        <Chat initialPrompt={initialPrompt} />
      )}
    </div>
  );
}

export default Page;

