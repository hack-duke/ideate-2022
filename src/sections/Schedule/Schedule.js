import React from "react";
import Paper from '@mui/material/Paper';
import {
    Scheduler,
    WeekView,
    DayView,
    Appointments,
    AppointmentTooltip,
    Resources
} from '@devexpress/dx-react-scheduler-material-ui';
import { ViewState } from '@devexpress/dx-react-scheduler';
import './Schedule.css';

function Schedule() {

    const currentDate = '2022-04-09';
    const resources = [
        {
            fieldName: 'location',
            title: 'Location',
            instances: [
                { id: 'E-Quad', text: 'E-Quad // Online' },
                { id: 'Online', text: 'Online (Discord)' },
                { id: 'Fitz', text: 'Fitzpatrick Schiciano A 1464' },
                { id: 'CIEMAS', text: 'CIEMAS - Twinnies' },
                { id: 'Social Sciences', text: 'Social Sciences 136' },
            ],
        },
        {
            fieldName: 'speaker',
            title: 'Speaker',
            instances: [
                { id: 'sridhar', text: 'Sridhar Ramaswamy' },
                { id: 'nina', text: 'Nina Polson' },
                { id: 'tim', text: 'Tim Skapek' },
                { id: 'sharon', text: 'Sharon Winter' },
                { id: 'atomic', text: 'AtomicVC' },
                { id: 'christina', text: 'Christina Koehn and Diego Baca' },
            ],
        },
    ]
    const schedulerData = [
        { startDate: '2022-04-09T09:45', endDate: '2022-04-09T10:30', title: 'Registration', location: 'E-Quad'},
        { startDate: '2022-04-09T10:45', endDate: '2022-04-09T12:00', title: 'Opening Ceremony', location: 'Fitz', speaker: 'sridhar' },
        { startDate: '2022-04-09T13:00', endDate: '2022-04-09T14:00', title: 'Workshop #1: Ideation', location: 'Fitz', speaker: 'nina' },
        { startDate: '2022-04-09T14:30', endDate: '2022-04-09T15:30', title: 'Talk: Making a complicated concept intuitive', location: 'Fitz', speaker: 'tim' },
        { startDate: '2022-04-09T16:00', endDate: '2022-04-09T17:00', title: 'Workshop #2: UI/UX', location: 'Fitz', speaker: 'sharon' },
        { startDate: '2022-04-09T17:30', endDate: '2022-04-09T18:30', title: 'Workshop #3: Pitching', location: 'Fitz', speaker: 'atomic' },
        { startDate: '2022-04-09T19:00', endDate: '2022-04-09T24:00', title: 'Office Hours', location: 'Online' },
        { startDate: '2022-04-09T20:00', endDate: '2022-04-09T21:00', title: 'Board Game Night!', location: 'CIEMAS' },
        { startDate: '2022-04-09T21:00', endDate: '2022-04-09T22:00', title: 'Online Games!', location: 'Online' },
        { startDate: '2022-04-09T22:00', endDate: '2022-04-09T24:00', title: 'Chill Zone', location: 'Online' },
        { startDate: '2022-04-10T10:00', endDate: '2022-04-10T13:00', title: 'Office Hours', location: 'Online' },
        { startDate: '2022-04-10T13:00', endDate: '2022-04-10T13:00', title: 'SUBMISSIONS DUE' },
        { startDate: '2022-04-10T13:30', endDate: '2022-04-10T15:00', title: 'Judging' },
        { startDate: '2022-04-10T16:45', endDate: '2022-04-10T18:30', title: 'Closing Ceremony', location: 'Social Sciences', speaker: 'christina' },
    ];

    return (

        <div id="schedule">
            <div className={"schedule-container"}>
                <h1 id="schedule-title">Schedule</h1>
                <Paper>
                    <Scheduler
                        data={schedulerData}
                    >
                        <ViewState
                            currentDate={currentDate}
                        />
                        <DayView
                            startDayHour={9}
                            endDayHour={24}
                            intervalCount={2}
                            cellDuration={60}
                        />
                        <Appointments />
                        <AppointmentTooltip />
                        <Resources
                            data={resources}
                            // mainResourceName={mainResourceName}
                        />
                    </Scheduler>
                </Paper>
            </div>
        </div>
    )
}

export default Schedule;
