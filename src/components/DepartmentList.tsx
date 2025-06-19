import useGetAllDepartments from "../hooks/useGetAllDepartments";
import React, { useState } from 'react';

type DepartmentOption = {
  departmentId: number;
  displayName: string;
};

export default function DepartmentList() {
      const [selectedOption, setSelectedOption] = useState<string>('');
     const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const { data } = useGetAllDepartments();

  if (!data) return <div>No data</div>;
  const options = data.data.departments;

  return (
    <div>
      {/* <p>{JSON.stringify(data)}</p> */}
        <div>
        <select
            id="simple-select"
            value={selectedOption}
            onChange={handleChange}
        >
            {options.map((option: DepartmentOption) => (
            <option key={option.departmentId} value={option.departmentId}>
                {option.departmentId} - {option.displayName}
            </option>
            ))}
        </select>
        <div>&nbsp;</div>
        </div>
    </div>
  );
}