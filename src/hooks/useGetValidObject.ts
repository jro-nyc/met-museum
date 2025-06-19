import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type ValidObjectResponse } from '../types/Met.schema';

function useGetValidObject(id:number){
    const baseURL = 'https://collectionapi.metmuseum.org';
    const objectDataURL = `${baseURL}/public/collection/v1/objects/${id}`;
    const {data} = useQuery({
        queryKey:['objectDataURL',id],
        queryFn:() => axios.get<ValidObjectResponse>(objectDataURL)
    });
    return {data};

}
export default useGetValidObject;

