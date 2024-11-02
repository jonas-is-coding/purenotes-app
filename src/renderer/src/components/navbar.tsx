import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionButton } from './buttons';
import { Settings } from 'lucide-react';

export const NavBar = () => {
  const navigate = useNavigate();

  const openSettings = () => {
    navigate('/settings');
  };

  return (
    <nav className="absolute inset-0 h-8 bg-transparent flex items-center justify-end px-2 pt-2">
      <ActionButton onClick={openSettings}>
        <Settings className="size-5 text-zinc-300" />
      </ActionButton>
    </nav>
  );
};