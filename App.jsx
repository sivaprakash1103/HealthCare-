import Sidebar from './assets/Components/Sidebar'
import MainContent from './assets/Components/MainContent'

export default function App() {
  return (
    <div className="flex h-screen font-sans bg-blue-50">
      <Sidebar />
      <MainContent />
    </div>
  );
}
