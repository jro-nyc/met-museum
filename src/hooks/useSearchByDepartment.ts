import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type AllDataResponse } from '../types/Met.schema';

function useSearchByDepartment(id: number) {
    const baseURL = 'https://collectionapi.metmuseum.org';
    const deptIdURL = `${baseURL}/public/collection/v1/search?departmentId=${id}&q=cat`;
    const { data } = useQuery<{ data: AllDataResponse }, unknown>({
        queryKey: ['deptIdURL', id],
        queryFn: () => axios.get<AllDataResponse>(deptIdURL)
    });
    return { data };
}
export default useSearchByDepartment;

