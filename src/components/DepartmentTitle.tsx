import useGetAllDepartments from "../hooks/useGetAllDepartments";
import { clsx } from "clsx";
import styles from './Met.module.scss';

interface DepartmentTitleProps {
    id: number;
}

export default function DepartmentTitle({id}:DepartmentTitleProps) {

  const { data } = useGetAllDepartments();

  if (!data) return <div>No data</div>;
  const title = data.data.departments.find(x=>x.departmentId===id);

  return (
    <div className={clsx(styles.center)}><h2>Search term was "{title.displayName}"</h2></div>
  );
}