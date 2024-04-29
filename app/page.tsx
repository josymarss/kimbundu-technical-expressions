'use client';
import { useState } from 'react';
import TranslationPage from './translationspage/page';
import Leading from './leading/page';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <Leading />
  );
} 