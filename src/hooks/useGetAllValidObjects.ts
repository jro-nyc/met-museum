import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useGetAllValidObjects(){
    const baseURL = 'https://collectionapi.metmuseum.org';
    const dataURL = `${baseURL}/public/collection/v1/objects`;
    const {data} = useQuery({
        queryKey:['dataURL'],
        queryFn:() => axios.get(dataURL)
    });
    return {data};

}
export default useGetAllValidObjects;

