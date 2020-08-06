import React from 'react';

import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import './styles.css';

import PageHeader from '../../components/PageHeader';

export default function TeacherForm() {

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="It's amazing that you want to give classes!" />
    </div>
  );
}