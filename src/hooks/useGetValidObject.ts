import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useGetValidObject(id:number){
    const baseURL = 'https://collectionapi.metmuseum.org';
    const objectDataURL = `${baseURL}/public/collection/v1/objects/${id}`;
    const {data} = useQuery({
        queryKey:['objectDataURL',id],
        queryFn:() => axios.get(objectDataURL)
    });
    return {data};

}
export default useGetValidObject;

