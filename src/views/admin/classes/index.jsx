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
            ["1","Java","Meena","5","20","Online"],
            ["2","React","Sita","10","25","Pune"],
            ["3","Python","Ramesh","10","25","Pune"],
            ["4","Django","Ashish","10","25","Online"],
            ["5","C++","Priya","10","25","Pune"]
          
        ],
      };
  
    

    return(
        <>
          <DataTable data={data}  />
       </>
    );
    
}

export default Classes;