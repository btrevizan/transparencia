import Pages from './Pages';
import Components from './Components';

const App = () => {
  const { HomePage } = Pages();
  const { Header } = Components();

  return (
    <div className="page">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
