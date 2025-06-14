import useGetValidObject from "../hooks/useGetValidObject";

interface ValidResponseProps {
  id: number;
}

export function ValidResponse({ id }: ValidResponseProps) {
  const { data } = useGetValidObject(id);

  if (!data) return <div>No data</div>;

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}