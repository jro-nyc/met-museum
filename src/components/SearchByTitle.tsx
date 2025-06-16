import useSearchByTitle from "../hooks/useSearchByTitle";
import {ValidResponse} from  "./ValidResponse";
import { Grid } from "@mui/system";
import { clsx } from "clsx";
import styles from './Met.module.scss';
import {useState} from 'react';

interface SearchByTitleProps {
    title: string;
}

export function SearchByTitle({title}:SearchByTitleProps){
    const [objectId, setObjectId] = useState<number>(0);
    const {data} = useSearchByTitle(title);
    if(!data) return <div>2nd.......Loading</div>
    //console.log(data);

    if(!data.data.objectIDs){
      return (
        <div className={clsx(styles.center)}>
          <h2>Search term was "{title}" has not matches</h2>
        </div>
      )
    }

    return (
    <>
      <div className={clsx(styles.center)}>
        <h2>Search term was "{title}"</h2>
      </div>
      <Grid className={clsx(styles.layout)}>
        <div className={clsx(styles.leftByTitle)}>
        {data.data.objectIDs.map((x: number) => (
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
            <ValidResponse id={objectId}/>
          </div>
        ) : null}
      </div>
      </Grid>
    </>
);
}