import useSearchByDepartment from "../hooks/useSearchByDepartment";
import DepartmentTitle from "./DepartmentTitle";
import {ValidResponse} from  "./ValidResponse";
import { Grid } from "@mui/system";
import { clsx } from "clsx";
import styles from './Met.module.scss';
import {useState} from 'react';

interface SearchByDepartmentProps {
    title: string;
    department: number;
    clearByDept: () => void;
}

export function SearchByDepartment({title, department, clearByDept}:SearchByDepartmentProps){
    const [objectId, setObjectId] = useState<number>(0);
    const {data} = useSearchByDepartment(department);
    if(!data) return <div>4th.......Loading</div>
    console.log(data,title);
    // if(typeof data.objectIDs === "undefined"){
    //     throw new Error('blah')
    // }
    // const dataObjects = data.objectIDs || [];
    //const dataObjects = [1,2,3];
    //const page = 1;
    const filteredDepartments: number[] = data.data.objectIDs || [];//.slice((page - 1) * 20, page * 20);

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
                {/* <h2>{title}</h2> */}
        {objectId ? (
          <div>
            {/* <button onClick={clearByDept}>In {title} with id={objectId}</button>
            &nbsp;&nbsp;&nbsp;&nbsp; */}
            <ValidResponse id={objectId} clearById={()=>{}}/>
          </div>
        ) : null}
      </div>
      </Grid>
    </>
);
}