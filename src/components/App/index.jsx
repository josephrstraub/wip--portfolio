// @flow
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

export default function App(): React.Element<any> {
  return (
    <Router>
      <Header />
    </Router>
  );
}
