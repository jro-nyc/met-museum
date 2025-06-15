// import useGetAllValidObjects from "../hooks/useGetAllValidObjects";

// export function PaginatedList( ){
//     const {data} = useGetAllValidObjects();
//     if(!data) return <div>1st.......Loading</div>
//     console.log(data);

//   if (!data) return <div>No data</div>;

//   return (
//     <div>
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }

//import { clsx } from 'clsx';
import useGetAllValidObjects from "../hooks/useGetAllValidObjects";
import {
  useEffect,
  useRef,
  useState
} from "react";
//import { Grid } from "@mui/web-ui-grid";
import { Grid } from "@mui/system";
import { clsx } from "clsx";
import { ValidResponse } from "./ValidResponse";
import { SearchByTitle } from "./SearchByTitle";
import styles from './Met.module.scss';

export function PaginatedList() {
  const [objectId, setObjectId] = useState<number>(0);
  const [showByTitle, setShowByTitle] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const searchObjectId = useRef<number>(0);
  const searchObjectTitle = useRef<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const { data} = useGetAllValidObjects();

  useEffect(() => {
    console.log("useEffect: " + objectId + ": sbt " + showByTitle);
  }, [objectId, showByTitle]);

  if (!data) return <div>No data</div>;

  console.log(data); // this will print the data in the console
  if(!data){
  throw new Error;
  }
  const filteredRange: number[] = data.data.objectIDs.slice((page - 1) * 20, page * 20);

  return (
    <Grid alignItems="stretch">
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
                {/* <span>Search object by ID:<input className={styles.searchNumber} type="number" onChange={(e) : void => {
                const val : number = parseInt(e.target.value);
                if (!isNaN(val) && val > 0 && val <= data.data.objectIDs.length) {
                    searchObjectId.current = val;
                }
                }} ref={inputRef}/><button onClick={() : void => {
                if (searchObjectId.current) {
                    setObjectId(searchObjectId.current);
                    searchObjectId.current = 0;
                }
                if (inputRef.current) {
                    inputRef.current.value = '';
                }
                }}>Go</button>
                </span>
                <span>Search object by Title:<input className={styles.searchString} type="string" onChange={(e) => {
                searchObjectTitle.current = e.target.value;
                }} ref={inputRef2}/>
                <button onClick={() => {
                if (searchObjectTitle.current) {
                    setShowByTitle(true);
                    if (inputRef.current) {
                    inputRef.current.value = '';
                }
                }}} disabled={!showByTitle}>Go</button>
                </span> */}
          </div>
     <Grid className={clsx(styles.layout)}>

        </Grid>
        {!showByTitle && (
          <Grid className={clsx(styles.layout)}>
            <div className={clsx(styles.left)}>
              {filteredRange.map((x: number) => (
                <div key={x}>
                  <span>
                    <button onClick={() => setObjectId(x)}>Show object {x}</button>
                  </span>
                </div>
              ))}
            </div>
          </Grid>
        )}
        {showByTitle || objectId && (
          <Grid className={clsx(styles.layout)}>
            <div className={clsx(styles.right)}>
              {objectId ? (
                <ValidResponse id={objectId} 
                clearById={() => {}}
                />
              ) : (
                <div>
                  <SearchByTitle
                    title={searchObjectTitle.current}
                    clearByTitle={() => setShowByTitle(false)}
                  />
                </div>
              )}
            </div>
          </Grid>
        )}
      </Grid>
  );
};