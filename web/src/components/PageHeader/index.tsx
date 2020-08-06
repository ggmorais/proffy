import React, { FC } from 'react';

import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

import './styles.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: FC<PageHeaderProps> = ({ title, children }) => {

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Back" />
        </Link>
        <img src={logoImg} alt="Logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>

      
    </header>
  );
}

export default PageHeader;