/** @jsx jsx */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {jsx, Layout, Header, Main, Footer, Styled as s} from 'theme-ui';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import ThemeProvider from './theme';
import Home from './home';
import Privacy from './privacy';

const Navigation = () => (
  <nav sx={{variant: 'layout.nav'}}>
    <s.ol>
      <s.li sx={{variant: 'text.underline'}}>
        <Link to="/">Home</Link>
      </s.li>
      <s.li sx={{variant: 'text.underline'}}>
        <Link to="/privacy">Privacy Policy</Link>
      </s.li>
    </s.ol>
  </nav>
);

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home navigate={(route) => history.push(route)} />
      </Route>
      <Route path="/privacy">
        <Privacy />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Router>
          <Header>
            <Navigation />
          </Header>
          <Main>
            <Routes />
          </Main>
          <Footer />
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
