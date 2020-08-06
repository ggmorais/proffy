import React from 'react';

import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/logo.svg';
import whatsappIcon from '../../assets/icons/whatsapp.svg';
import { Link } from 'react-router-dom';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


export default function TeacherList() {

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the proffys avaiable.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Week day</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hour</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem 
          name="Gustavo Morais" 
          about="A cool guy." 
          aboutDetailed="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam ullam natus, quia inventore ipsam. Distinctio, quam laudantium vero fugit earum reprehenderit doloribus, inventore, iure minus veniam dignissimos officiis. Tenetur."
          priceHour={80.00}
          subject="Chemistry"
        />
        <TeacherItem 
          name="Gustavo Morais" 
          about="A cool guy." 
          aboutDetailed="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam ullam natus, quia inventore ipsam. Distinctio, quam laudantium vero fugit earum reprehenderit doloribus, inventore, iure minus veniam dignissimos officiis. Tenetur."
          priceHour={80.00}
          subject="Chemistry"
        />
        <TeacherItem 
          name="Gustavo Morais" 
          about="A cool guy." 
          aboutDetailed="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam ullam natus, quia inventore ipsam. Distinctio, quam laudantium vero fugit earum reprehenderit doloribus, inventore, iure minus veniam dignissimos officiis. Tenetur."
          priceHour={80.00}
          subject="Chemistry"
        />
        <TeacherItem 
          name="Gustavo Morais" 
          about="A cool guy." 
          aboutDetailed="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam ullam natus, quia inventore ipsam. Distinctio, quam laudantium vero fugit earum reprehenderit doloribus, inventore, iure minus veniam dignissimos officiis. Tenetur."
          priceHour={80.00}
          subject="Chemistry"
        />
      </main>
    </div>
  );
}