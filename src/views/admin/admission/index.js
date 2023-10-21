import DataTable from "../tables/components/AdvancedSearch";
import { useEffect, useState } from "react";
import './admission.css';
//import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { data } from "autoprefixer";
//import BarChart from "./echarts.js";
import Chart from "./echarts";

const Admissions = () => {
  useEffect(() => {
    // initTE({ Datatable });
  }, []);

  const data = {
    columns: [
      'Student ID',
      'Student Name',
      'Class',
      'Phone Number',
      'Admission Date',
    ],
    rows: [
      ["1", "Shreyash", "10th", "8454993015", "2023-10-20"],
      ["2", "Abc", "5th", "1234567", "2023-10-19"],
      ["3", "Xyz", "6th", "874678638", "2023-10-18"],
      ["4", "Lmn", "8th", "4634645645", "2022-11-20"],
      ["5", "Pqr", "10th", "347583479", "2023-09-20"],
    ],
  };

  return (
    <>
      <div className="table-container">
      <DataTable data={data} />
      </div>
      <div className="table-container-chart">
      <Chart />
      </div>
    </>
    
  );
}

export default Admissions;
