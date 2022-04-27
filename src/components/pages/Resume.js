import React from 'react';

export default function Resume() {
  return (
    <div class='d-flex justify-content-center align-items-center m-3'>
      <div class='card m-3 w-50'>
        <h1 class='card-title p-3'>Resume</h1>
          <a class='p-3' href='https://drive.google.com/file/d/1U6oNME2HAkzBCuy5g7TXx4jdTSG0yEga/view?usp=sharing' target='new'>View My Resume ></a>
        <div class='card-body'>
          <h2>Proficiencies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongDB</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}