import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Search';
import ListProjects from './ListProjects';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({ history }) => (
            <Search
              onSubmitUsername={username =>
                history.push(`/${username}/projects`)
              }
            />
          )}
        />
        <Route path="/:username/projects" component={ListProjects} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
