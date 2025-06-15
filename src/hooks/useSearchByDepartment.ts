import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useSearchByDepartment(id){
    const baseURL = 'https://collectionapi.metmuseum.org';
    const deptIdURL = `${baseURL}/public/collection/v1/search?departmentId=${id}&q=cat`;
    const {data} = useQuery({
        queryKey:['deptIdURL',id],
        queryFn:() => axios.get(deptIdURL)
    });
    return {data};

}
export default useSearchByDepartment;

