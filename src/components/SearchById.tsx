import useGetValidObject from "../hooks/useGetValidObject";
import {ValidResponse} from  "./ValidResponse";
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
        <div>
          {id ? (
            <div>
              <ValidResponse id={id} />
            </div>
          ) : null}
      </div>
    </>
);
}