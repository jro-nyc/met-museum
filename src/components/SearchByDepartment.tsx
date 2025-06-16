import useSearchByDepartment from "../hooks/useSearchByDepartment";
import DepartmentTitle from "./DepartmentTitle";
import {ValidResponse} from  "./ValidResponse";
import { Grid } from "@mui/system";
import { clsx } from "clsx";
import styles from './Met.module.scss';
import {useState} from 'react';

interface SearchByDepartmentProps {
    department: number;
}

export function SearchByDepartment({department}:SearchByDepartmentProps){
    const [objectId, setObjectId] = useState<number>(0);
    const {data} = useSearchByDepartment(department);
    if(!data) return <div>4th.......Loading</div>
    console.log(data);

    const filteredDepartments: number[] = data.data.objectIDs || [];

    return (
<>
  <DepartmentTitle id={department} />
      <Grid className={clsx(styles.layout)}>
        <div className={clsx(styles.leftByTitle)}>
              {filteredDepartments.map((x: number) => (
                <div key={x}>
                  <span>
                    <button onClick={() => setObjectId(x)}>Show object {x}</button>
                  </span>
                </div>
              ))}
      </div>
      <div className={clsx(styles.rightByTitle)}>
        {objectId ? (
          <div>
            <ValidResponse id={objectId} />
          </div>
        ) : null}
      </div>
      </Grid>
    </>
);
}