import './App.css';
import SideNavigation from './components/side-nav';
import AppRouter from './routes/appRouter';

function App() {
  return (
    <div className='dark-side-app'>
      <SideNavigation />
      <AppRouter />
    </div>
  );
}

export default App;
