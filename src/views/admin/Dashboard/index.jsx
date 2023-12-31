import MiniCalendar from "components/calendar/MiniCalendar";
import Widget from "components/widget/Widget";

const Dashboard = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4" rounded-sm>


      <div className="flex-grow max-w-xs h-40 p-4 bg-red-400 rounded-lg" style={{ boxShadow: 'none' }}>
        <Widget title={<span style={{ color: 'black', fontWeight: 'bold' }}>STUDENTS</span>} />
        </div>
        <div className="flex-grow max-w-xs h-40 p-4 bg-orange-300 rounded-lg" style={{ boxShadow: 'none' }}>
        <Widget title={<span style={{ color: 'black', fontWeight: 'bold' }}>TEACHERS</span>} />
        </div>
        <div className="flex-grow max-w-xs h-40 p-4 bg-yellow-300 rounded-lg" style={{ boxShadow: 'none' }}>
        <Widget title={<span style={{ color: 'black', fontWeight: 'bold' }}>PARENTS</span>} />
        </div>
        <div className="flex-grow max-w-xs h-40 p-4 bg-green-300 rounded-lg" style={{ boxShadow: 'none' }}>
        <Widget title={<span style={{ color: 'black', fontWeight: 'bold' }}>CLASSES</span>} />
        </div>
      </div>

      {/* Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <TotalSpent />
        <WeeklyRevenue />
      </div> */}

      {/* Tables & Charts */}

      {/* <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2"> */}
        {/* Check Table */}
        {/* <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div> */}

        {/* Traffic chart & Pie Chart */}

        {/* <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div> */}

        {/* Complex Table , Task & Calendar */}

        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        /> */}

        {/* Task chart & Calendar */} 
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          {/* <TaskCard /> */}
          <div className="grid grid-cols-1 h-100 rounded-[20px] mt-3">
            <MiniCalendar />
          </div>
      </div>
      </div>
    //  </div>
  );
};

export default Dashboard;
