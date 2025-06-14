import useGetAllValidObjects from "../hooks/useGetAllValidObjects";

export function PaginatedList( ){
    const {data} = useGetAllValidObjects();
    if(!data) return <div>1st.......Loading</div>
    console.log(data);

  if (!data) return <div>No data</div>;

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}