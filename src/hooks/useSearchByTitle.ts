import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useSearchByTitle(title:string){
    const baseURL = 'https://collectionapi.metmuseum.org';
    const objectDataURL = `${baseURL}/public/collection/v1/search?q=${title}`;
    const {data} = useQuery({
        queryKey:['objectDataURL',title],
        queryFn:() => axios.get(objectDataURL)
    });
    return {data};

}
export default useSearchByTitle;

