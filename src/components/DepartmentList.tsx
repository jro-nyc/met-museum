import useGetAllDepartments from "../hooks/useGetAllDepartments";
import React, { useState } from 'react';

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
      <label htmlFor="simple-select">Choose an option:</label>
      <select
        id="simple-select"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option) => (
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