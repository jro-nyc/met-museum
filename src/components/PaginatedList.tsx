
import useGetAllValidObjects from "../hooks/useGetAllValidObjects";
import {
  useState
} from "react";
//import { Grid } from "@mui/web-ui-grid";
import { Grid } from  '@mui/material';
import { clsx } from "clsx";
import { ValidResponse } from "./ValidResponse";
import styles from './Met.module.scss';

export function PaginatedList() {
  const [objectId, setObjectId] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const {data} = useGetAllValidObjects();


  if (!data) return <div>...Loading</div>;

  console.log(data);
  const filteredRange: number[] = data.data.objectIDs.slice((page - 1) * 20, page * 20);

  return (
    <>
      <Grid container >
      <div className={styles.pagination}>
        <span>
            <button onClick={() : void => {
            if (page > 1) {
                setPage(page - 1);
                setObjectId(0);
            }
            }}>&lt;&lt;&lt; {page-1}</button>
            </span>
            <span>Page: {page}</span>
            <span><button
            onClick={() : void => {
            if (page < Math.ceil(data.data.objectIDs.length / 20)) {
                setPage(page + 1);
                setObjectId(0);
            }
            }}> {page+1}&gt;&gt;&gt;</button></span>
      </div>
      </Grid>
     <Grid className={clsx(styles.layout)} sx={{ height: '90vh' }}>
        <div className={clsx(styles.left)}>
          {filteredRange.map((x: number) => (
            <div key={x}>
              <span>
                <button onClick={() => setObjectId(x)}>Show object {x}</button>
              </span>
            </div>
          ))}
        </div>
        {objectId ? (
            <div className={clsx(styles.right)}>
              {objectId ? (
                <ValidResponse id={objectId} />
              ) :null}
            </div>
        ): <div className={clsx(styles.right)}>&nbsp;</div>}
      </Grid>
    </>
  );
};