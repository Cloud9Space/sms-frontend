import DataTable from "../tables/components/AdvancedSearch";
import { useEffect } from "react";

const Classes = () => {
  useEffect(() => {
    // initTE({ Datatable });
  }, []);

  const data = {
    columns: [
      {
        label: 'Class Number',
        field: 'class_number',
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
  };

  // Add "Edit" and "Delete" buttons to the "Action" column
  data.rows = data.rows.map(row => {
    const editButton = `<button style="border: 1px solid green; background-color: white; color: green; padding: 5px 10px; border-radius: 5px; margin: 5px;">EDIT</button>`;
    const deleteButton = `<button style="border: 1px solid Maroon; background-color: white; color: Maroon; padding: 5px 10px; border-radius: 5px;">DELETE</button>`;
    // Convert buttons to strings
    row.push(
      editButton + ' ' + deleteButton
    );
    return row;
  });

  return (
    <>
      <DataTable data={data}/>
    </>
  );
}
export default Classes;