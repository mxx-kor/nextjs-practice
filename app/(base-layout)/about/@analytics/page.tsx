interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const getPostComments = async (id: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 10, // 데이터 유효 시간 10초
      },
    },
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

//ISR
const Analytics = async () => {
  const comments: IComment[] = await getPostComments(1);
  return (
    <>
      <h2>Analytics</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>name: {comment.name}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
};

export default Analytics;
