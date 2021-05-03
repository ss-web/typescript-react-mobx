import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from 'pages/Home';
import Error from 'pages/Error';
// import mainTheme from 'mainTheme';


const mainTheme = {}

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route component={Error} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
