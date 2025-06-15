import useGetValidObject from "../hooks/useGetValidObject";
import {ValidResponse} from  "./ValidResponse";
import { Grid } from "@mui/system";
import { clsx } from "clsx";
import styles from './Met.module.scss';
//import {useState} from 'react';

interface SearchByIdProps {
    id: number;
}

export function SearchById({id}:SearchByIdProps){
    const {data} = useGetValidObject(id);
    if(!data) return <div>2nd.......Loading</div>
    console.log(data);

    return (
<>        
    <div className={clsx(styles.center)}><h2>Searched ID was "{id}"</h2></div>
      <Grid className={clsx(styles.layout)}>
        <div className={clsx(styles.leftByTitle)}>
        {/* {data.data.objectIDs.map((x: number) => (
          <button
            key={x}
            onClick={() => setObjectId(x)}
          >
            Show object {x}
          </button>
        ))} */}
      </div>
      <div className={clsx(styles.rightByTitle)}>
        {id ? (
          <div>
            {/* <button onClick={clearByTitle}>Clear By Title</button>
            &nbsp;&nbsp;&nbsp;&nbsp; */}
            <ValidResponse id={id} clearById={()=>{}}/>
          </div>
        ) : null}
      </div>
      </Grid>
    </>
);
}