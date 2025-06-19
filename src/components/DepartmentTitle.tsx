import useGetAllDepartments from "../hooks/useGetAllDepartments";
import { clsx } from "clsx";
import styles from './Met.module.scss';

interface DepartmentTitleProps {
    id: number;
}

export default function DepartmentTitle({id}:DepartmentTitleProps) {

  interface Department {
    departmentId: number;
    displayName: string;
  }

  interface DepartmentsResponse {
    data: {
      departments: Department[];
    };
  }

  const { data }: { data?: DepartmentsResponse } = useGetAllDepartments();

  if (!data) return <div>No data</div>;

  const title: Department | undefined = data.data.departments.find((x: Department) => x.departmentId === id);

  return (
    <div className={clsx(styles.center)}><h2>Search term was "{title?.displayName ?? "Unknown"}"</h2></div>
  );
}