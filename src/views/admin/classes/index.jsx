import DataTable from "../tables/components/AdvancedSearch";
import ClassForm from "../Form/ClassForm";
import React, { useEffect, useState } from "react";

const Classes = () => {
  useEffect(() => {
    // initTE({ Datatable });
  }, []);

  const [classData, setClassData] = useState({
    
  // const data = {
    columns: [
      {
        label: 'Class Number',
        field: 'classNumber',
      },
      'Class Name',
      'Teacher Incharge',
      'Number of Students',
      'Capacity',
      'Location',
      'Action',
    ],
    rows: [
      ["1", "Java", "Meena", "5", "20", "Online"],
      ["2", "React", "Sita", "10", "25", "Pune"],
      ["3", "Python", "Ramesh", "10", "25", "Pune"],
      ["4", "Django", "Ashish", "10", "25", "Online"],
      ["5", "C++", "Priya", "10", "25", "Pune"]
    ],
  });

  // // Add "Edit" and "Delete" buttons to the "Action" column
  // data.rows = data.rows.map(row => {
  //   const editButton = `<button style="border: 1px solid green; background-color: white; color: green; padding: 5px 10px; border-radius: 5px; margin: 5px;">EDIT</button>`;
  //   const deleteButton = `<button style="border: 1px solid Maroon; background-color: white; color: Maroon; padding: 5px 10px; border-radius: 5px;">DELETE</button>`;
  //   // Convert buttons to strings
  //   row.push(
  //     editButton + ' ' + deleteButton
  //   );
  //   return row;
  // });

  // Function to add a new class to the data
  const addNewClass = (classDetails) => {
    console.log("data came to table",classDetails);
    // Create a new row for the table using the form data
    const newRow = [
      classDetails.classNumber,
      classDetails.class_Name,
      classDetails.classTeacher,
      "0", // Number of Students (you may update this dynamically)
      classDetails.classCapacity,
      classDetails.classLocation,
      "", // Action column (you may add edit/delete buttons)
    ];

    // Update the classData state with the new row
    setClassData((prevData) => ({
      ...prevData,
      rows: [...prevData.rows, newRow],
    }));
    console.log("data updated to table",classData);

  };

  return (
    <>
      <DataTable data={classData}/>

      <ClassForm onFormSubmit={addNewClass} />
    </>
  );
}
export default Classes;