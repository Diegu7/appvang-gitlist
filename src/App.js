import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Search from './Search';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={({ history }) => (
          <Search
            onSubmitUsername={username => history.push(`/${username}/projects`)}
          />
        )}
      />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
