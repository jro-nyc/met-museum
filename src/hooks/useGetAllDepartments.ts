import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useGetAllDepartments(){
    const baseURL = 'https://collectionapi.metmuseum.org';
    const deptURL = `${baseURL}/public/collection/v1/departments `;
    const {data} = useQuery({
        queryKey:['deptURL'],
        queryFn:() => axios.get(deptURL)
    });
    return {data};

}
export default useGetAllDepartments;

