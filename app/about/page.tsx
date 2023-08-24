import {Card, Divider} from '@mui/material';

//SSG
export const metadata = {
  title: 'about my app',
  description: '저희 팀과 통계를 소개합니다.',
};

const getPosts = async () => {
  const res = await fetch('http://localhost:3000/api/about');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return (await res.json()) as Post[];
};

const About = async () => {
  const posts = await getPosts();

  return (
    <main>
      <h1>About</h1>
      <div>
        {posts.map((post) => (
          <Card key={post.id}>
            <h2>{post.title}</h2>
            <p>
              By {post.author} | {post.date}
            </p>
            <p>{post.content}</p>
            <div>
              {post.comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.author}</p>
                  <p>{comment.text}</p>
                </div>
              ))}
            </div>
            <Divider />
          </Card>
        ))}
      </div>
    </main>
  );
};

export default About;
