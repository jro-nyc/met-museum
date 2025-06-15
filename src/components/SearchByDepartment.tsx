import useSearchByDepartment from "../hooks/useSearchByDepartment";
import {ValidResponse} from  "./ValidResponse";
import { Grid } from "@mui/system";
import { clsx } from "clsx";
import styles from './Met.module.scss';
import {useState} from 'react';

interface SearchByDepartmentProps {
    title: string;
    clearByTitle: () => void;
}

export function SearchByDepartment({title, clearByTitle}:SearchByDepartmentProps){
    const [objectId, setObjectId] = useState<number>(0);
    const {data} = useSearchByDepartment(title);
    if(!data) return <div>4th.......Loading</div>
    console.log(data);
    // if(typeof data.objectIDs === "undefined"){
    //     throw new Error('blah')
    // }
    // const dataObjects = data.objectIDs || [];
    //const dataObjects = [1,2,3];

    return (

      <Grid className={clsx(styles.layout)}>
        <div className={clsx(styles.leftByTitle)}>
        <button onClick={clearByTitle}>Clear By Title</button>
        {data.data.departments.map((x) => (
          <button
            key={x.departmentId}
            onClick={() => setObjectId(x)}
          >
            {x.departmentId}- {x.displayName}
          </button>
        ))}
      </div>
      <div className={clsx(styles.rightByTitle)}>
        {objectId ? (
          <div>
            <button onClick={clearByTitle}>Clear By Title</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ValidResponse id={objectId} clearById={()=>{}}/>
          </div>
        ) : null}
      </div>
      </Grid>
    
);
}