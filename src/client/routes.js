import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import Dashboard from './components/DashboardPage';
import Documents from './components/document/DocumentPage';
import Users from './components/user/UserPage';
import Document from './components/document/DocumentSingleView';
import EditDocument from './components/document/DocumentEdit';
import EditUser from './components/user/UserEdit';
import requireAuthentication from './utils/requireAuthentication';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="dashboard" component={requireAuthentication(Dashboard)} />
    <Route path="documents" component={requireAuthentication(Documents)} />
    <Route path="users" component={requireAuthentication(Users)} />
    <Route
      path="documents/:id/view"
      component={requireAuthentication(Document)} />
    <Route
      path="documents/:id/edit"
      component={requireAuthentication(EditDocument)} />
    <Route
      path="users/:id/edit"
      component={requireAuthentication(EditUser)} />
  </Route>
);
