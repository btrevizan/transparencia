import Pages from './Pages';
import Components from './Components';

const App = () => {
  const components = Components();
  const { HomePage } = Pages({ components });
  const { Header } = components;

  return (
    <div className="page">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
