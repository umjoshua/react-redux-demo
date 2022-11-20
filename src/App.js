import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div class=" flex items-center justify-center flex-col p-10">
      <Profile/>
      <Login />
    </div>
  );
}

export default App;
