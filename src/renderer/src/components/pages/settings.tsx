import React, { useState } from 'react';

export const Settings = () => {
  // Beispielhafte Zustandshandler für Einstellungen
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  // Beispielhafte Funktion zum Speichern der Einstellungen
  const handleSave = () => {
    // Hier kannst du deine Logik zum Speichern der Einstellungen hinzufügen
    alert('Einstellungen gespeichert!');
  };

  // Beispielhafte Funktion zum Zurücksetzen der Einstellungen
  const handleCancel = () => {
    // Hier kannst du deine Logik zum Zurücksetzen der Einstellungen hinzufügen
    alert('Änderungen verworfen!');
  };

  return (
    <section className="settings-container pl-20 pr-10 py-10 h-full">
      <h1 className="text-2xl font-bold mb-4">Einstellungen</h1>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Thema</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="p-2 border border-gray-600 bg-gray-900 rounded"
        >
          <option value="light">Hell</option>
          <option value="dark">Dunkel</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Benachrichtigungen</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
          className="mr-2"
        />
        <span>Benachrichtigungen aktivieren</span>
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Speichern
        </button>
        <button
          onClick={handleCancel}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
        >
          Abbrechen
        </button>
      </div>
    </section>
  );
};