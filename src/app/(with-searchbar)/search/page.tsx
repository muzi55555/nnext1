interface ISearchProps {
  searchParams: {
    p?: string;
  };
}

const Search = ({ searchParams }: ISearchProps) => {
  console.log(searchParams);

  return <div>서치 {searchParams.p}</div>;
};

export default Search;
