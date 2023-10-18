import TableReusable from "../tables/components/TableReusable";
import { useEffect } from "react";
import {
    Datatable,
    initTE,
  } from "tw-elements";

const Classes = () => {
    useEffect(() => {
        initTE({ Datatable });
      }, []);
    const data1 = [
        { id: 1, firstName: 'Sakshi', middleName: 'Jayantilal', lastName: 'Jain', address: 'Pune', contact: 1234567890 },
        { id: 1, firstName: 'Chaitrali', middleName: 'Laxmikant', lastName: 'Kate', address: 'Aurangabad', contact: 1234567890 },
      ];
    
      const columns1 = [
        { key: 'id', label: 'ID' },
        { key: 'firstName', label: 'First Name' },
        { key: 'middleName', label: 'Middle Name' },
        { key: 'lastName', label: 'Last Name' },
        { key: 'address', label: 'Address' },
        { key: 'contact', label: 'Contact' },
        { key: 'action', label: 'Action' },

      ];
      
    

    return(
        <>
          <div>Hello!</div>
          <TableReusable data={data1} columns={columns1} />
       </>
    );
    
}

export default Classes;