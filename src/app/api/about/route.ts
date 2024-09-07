import {NextResponse} from 'next/server';

export async function GET() {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(new NextResponse(JSON.stringify(posts), {status: 200}));
      }, 500);
    });
  } catch (e) {
    return new NextResponse(null, {status: 500});
  }
}

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post.',
    author: 'John Doe',
    date: 'May 1, 2023',
    comments: [
      {id: 1, text: 'Great post!', author: 'Jane Smith'},
      {id: 2, text: 'I totally agree.', author: 'Mike Johnson'},
    ],
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the second post.',
    author: 'Jane Smith',
    date: 'May 5, 2023',
    comments: [
      {id: 1, text: 'Thanks for sharing!', author: 'John Doe'},
      {id: 2, text: 'Looking forward to more.', author: 'Mike Johnson'},
    ],
  },
  {
    id: 3,
    title: 'Third Post',
    content: 'This is the third post.',
    author: 'Mike Johnson',
    date: 'May 10, 2023',
    comments: [
      {id: 1, text: 'Amazing content!', author: 'Jane Smith'},
      {id: 2, text: 'Keep up the good work.', author: 'John Doe'},
    ],
  },
  // Add more posts as needed
];
