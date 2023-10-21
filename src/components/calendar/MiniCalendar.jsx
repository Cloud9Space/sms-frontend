import React from 'react';
import ReactDOM from 'react-dom';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
} from '@syncfusion/ej2-react-schedule';

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-calendars/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';

export default function MiniCalender(){
  const data = [
    {
      Id: 1,
      Subject: 'Scrum Meeting',
      Location: 'Office',
      StartTime: new Date(2022, 0, 1, 9, 30),
      EndTime: new Date(2023, 0, 1, 10, 30),
      RecurrenceRule: 'FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR;INTERVAL=1',
    },
  ];

  return (
    <div style={{margin:'10px'}}>
      <ScheduleComponent  height='650px' width='1000px' eventSettings={{ dataSource: data }}>
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('schedule'));
