import { fetchWrapper } from '../../services/api';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export default async function Axios() {
  //   const data = await fetchWrapper<Post[]>('posts', {
  //     method: 'GET'
  //   });

  return (
    <div>
      <h1>axios</h1>
      {/* {data?.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))} */}
    </div>
  );
}
