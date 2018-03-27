// @flow
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Projects from '../Projects';

export default function App(): React.Element<any> {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
}
