interface IBooksProps {
  params: {
    id: string | string[];
  };
}
const Books = ({ params }: IBooksProps) => {
  return <div>book/ {params.id}</div>;
};

export default Books;

// 동적 경로(Dynamic Route)
// [id], [...id], [[...id]]
