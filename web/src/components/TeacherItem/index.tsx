import React, { FC } from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';
import './styles.css';


interface TeacherItemProps {
  name: string;
  subject: string;
  about: string;
  aboutDetailed: string;
  priceHour: number;
  whatsapp?: number;
}

const TeacherItem: FC<TeacherItemProps> = ({ name, subject, about, aboutDetailed, priceHour }) => {

  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/49033581?s=460&u=0832f2e82ddbce7439215dac9be44802eec09bff&v=4" alt="Gustavo Morais" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>
        {about}
        <br /> <br />
        {aboutDetailed}
      </p>

      <footer>
        <p>
          Price/hour
          <strong>$ {priceHour}</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whasapp"/>
          Enter in contact
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem