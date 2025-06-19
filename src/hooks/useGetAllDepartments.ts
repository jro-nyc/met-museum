import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type AllDepartments } from '../types/Met.schema';

function useGetAllDepartments(){
    const baseURL = 'https://collectionapi.metmuseum.org';
    const deptURL = `${baseURL}/public/collection/v1/departments `;
    const {data} = useQuery({
        queryKey:['deptURL'],
        queryFn:() => axios.get<AllDepartments>(deptURL)
    });
    return {data};

}
export default useGetAllDepartments;

