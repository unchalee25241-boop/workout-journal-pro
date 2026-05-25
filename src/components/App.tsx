// src/App.tsx
import { useState, useEffect } from 'react';
import { WORKOUT_TYPES } from './data/workoutTypes';
import { loadData, saveData } from './utils/storage';

export default function App() {
  const [tab, setTab] = useState('log');
  
  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', background: '#0a0a0a', minHeight: '100vh', color: '#fff' }}>
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Workout Journal Pro</h1>
      </header>
      
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', borderBottom: '1px solid #333' }}>
        <button onClick={() => setTab('log')}>📝 บันทึก</button>
        <button onClick={() => setTab('history')}>📅 ประวัติ</button>
      </nav>

      <main style={{ padding: '20px' }}>
        {tab === 'log' && <p>หน้าบันทึก (กำลังพัฒนา...)</p>}
        {tab === 'history' && <p>หน้าประวัติ (กำลังพัฒนา...)</p>}
      </main>
    </div>
  );
}