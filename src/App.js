import './App.css';
import Page from './components/Page';
import pageData from './data/page.json'

function App() {
  return (
    <Page title={pageData.title} description={pageData.description} />
  );
}

export default App;
