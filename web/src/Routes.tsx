import React from 'react';
import { Route, BrowserRouter, Router } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';


export default function Routes() {

  return (
    <BrowserRouter >
      <Route path="/" exact component={Landing} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/study" exact component={TeacherList} />
    </BrowserRouter>
  );
}