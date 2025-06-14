import useSearchByTitle from "../hooks/useSearchByTitle";
import {ValidResponse} from  "./ValidResponse";
import { Grid } from "@mui/system";
import { clsx } from "clsx";
import styles from './Met.module.scss';
import {useState} from 'react';

interface SearchByTitleProps {
    title: string;
    clearByTitle: () => void;
}

export function SearchByTitle({title, clearByTitle}:SearchByTitleProps){
    const [objectId, setObjectId] = useState<number>(0);
    const {data} = useSearchByTitle(title);
    if(!data) return <div>2nd.......Loading</div>
    console.log(data);
    // if(typeof data.objectIDs === "undefined"){
    //     throw new Error('blah')
    // }
    // const dataObjects = data.objectIDs || [];
    const dataObjects = [1,2,3];

    return (
    <div>
      <Grid className={clsx(styles.layout)}>
        <div className={clsx(styles.leftByTitle)}>
        <button onClick={clearByTitle}>Clear By Title</button>
        {dataObjects.map((x: number) => (
          <button
            key={x}
            onClick={() => setObjectId(x)}
          >
            Show object {x}
          </button>
        ))}
      </div>
      <div className={clsx(styles.rightByTitle)}>
        {objectId ? (
          <div>
            <button onClick={clearByTitle}>Clear By Title</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <ValidResponse id={objectId} />
          </div>
        ) : null}
      </div>
      </Grid>
    </div>
);
}