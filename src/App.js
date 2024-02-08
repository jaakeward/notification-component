import { useContext } from 'react';
import './App.css';
import { useCreateNotification } from './Notifications/NotificationProvider';

function App() {
  return (
    <div className="App">
      <button onClick={useCreateNotification("any type", "new msg")}>Add notification</button>
    </div>
  );
}

export default App;
