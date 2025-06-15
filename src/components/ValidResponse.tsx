import useGetValidObject from "../hooks/useGetValidObject";
import DisplayKeyValue from "../components/DispalyKeyValue"
interface ValidResponseProps {
  id: number;
  clearById: () => void;
}

export function ValidResponse({ id }: ValidResponseProps) {
  const { data } = useGetValidObject(id);

  if (!data) return <div>No data</div>;

  return (
    <>
      {/* <p>{JSON.stringify(data)}</p> */}
      <DisplayKeyValue data={data.data} />
    </>
  );
}