/** @jsx jsx */
import 'babel-polyfill';
import {config} from 'dotenv';
import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {jsx, Layout, Header, Main, Footer, Styled as s} from 'theme-ui';
import {Box, Text} from '@theme-ui/components';
import {useMachine} from '@xstate/react';
import {BrowserRouter as Router, Link, Switch, Redirect, Route} from 'react-router-dom';
import AppMachine, {MachineContext, useMachineValue} from './states.js';
import ThemeProvider from './theme';
import Home from './home';
import Privacy from './privacy';

const Navigation = () => (
  <nav sx={{variant: 'layout.nav'}}>
    <s.ol>
      <s.li>
        <Box px={2}>
          <Text variant="link">
            <Link to="/">Home</Link>
          </Text>
        </Box>
      </s.li>
      <s.li>
        <Box px={2}>
          <Text variant="link">
            <Link to="/privacy">Privacy Policy</Link>
          </Text>
        </Box>
      </s.li>
    </s.ol>
  </nav>
);

const Routes = ({isAuthenticated = false}) => {
  
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
  const [current, send] = useMachine(AppMachine);

  return (
    <MachineContext.Provider value={[current, send]}>
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
    </MachineContext.Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
