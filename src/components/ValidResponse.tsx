import useGetValidObject from "../hooks/useGetValidObject";
import DisplayKeyValue from "../components/DispalyKeyValue"
import { clsx } from "clsx";
import styles from './Met.module.scss';
interface ValidResponseProps {
  id: number;
}

export function ValidResponse({ id }: ValidResponseProps) {
  const { data } = useGetValidObject(id);
  if (!data) return <div>No data</div>;

  if(!data.data){
    return (
      <div className={clsx(styles.center)}>
        <h2>ID "{id}" has not matches</h2>
      </div>
    )
  }


  return (
    <>
      <DisplayKeyValue data={data.data} />
    </>
  );
}