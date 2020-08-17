import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { InsertTicket } from './components/InsertTicket';
import { ShowTicket } from './components/ShowTicket';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route path='/InsertTicket' component={InsertTicket} />
            <Route path='/ShowTicket' component={ShowTicket} />
       
      </Layout>
    );
  }
}
