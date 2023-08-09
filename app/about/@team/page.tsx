interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {lat: string; lng: string};
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const getUsers = async (id: number): Promise<IUser> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'no-store',
    // next: {
    //   revalidate: 0,
    // },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
//SSR
const Team = async () => {
  const data = await getUsers(2);
  return (
    <div>
      <h2>team member</h2>
      <p>{data.name}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
      <p>{data.website}</p>
    </div>
  );
};

export default Team;
