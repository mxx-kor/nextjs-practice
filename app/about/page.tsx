import React from 'react';

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//SSG
export const metadata = {
  title: 'about my app',
  description: '저희 팀과 통계를 소개합니다.',
};

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const About = async () => {
  const data: IData = await getData();
  return (
    <main>
      <h1>About</h1>
      <div>
        <p>{data.id}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </div>
    </main>
  );
};

export default About;
