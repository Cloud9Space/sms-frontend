import React from 'react';
import { useEffect } from 'react';
import {
    Datatable,
    initTE,
  } from "tw-elements";

  
const TableReusable = ({ data, columns }) => {
    useEffect(() => {
        initTE({ Datatable });
      }, []);
    
    return(
        <div className="max-w-screen-lg mx-auto">
    <table className="table-auto border-collapse w-full">
      <thead className="bg-gray-400 p-2">
      <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">
      {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div> 
    );
 }

export default TableReusable;