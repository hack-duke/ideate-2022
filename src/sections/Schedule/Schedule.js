import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Scheduler } from "@aldabil/react-scheduler";
import './Schedule.css';


function Schedule() {
    return (

        <div id="schedule">
            <div className={"schedule-container"}>
                <h1 id="schedule-title">Schedule</h1>
                <Scheduler
                    view="week"
                    week={{weekDays: [0, 1], weekStartOn: 6, startHour: 9, endHour: 24, step: 60}}
                    selectedDate={new Date("2022 4 9")}
                    events={[
                        {
                            event_id: 1,
                            title: "Registration",
                            start: new Date("2022 4 9 09:45"),
                            end: new Date("2022 4 9 10:30"),
                        },
                        {
                            event_id: 2,
                            title: "Opening Ceremony",
                            start: new Date("2022 4 9 10:45"),
                            end: new Date("2022 4 9 12:00"),
                        },
                        {
                            event_id: 3,
                            title: "Workshop #1: Ideation",
                            start: new Date("2022 4 9 13:00"),
                            end: new Date("2022 4 9 14:00"),
                        },
                        {
                            event_id: 4,
                            title: "Talk: Making a Complicated Concept Intuitive",
                            start: new Date("2022 4 9 14:30"),
                            end: new Date("2022 4 9 15:30"),
                        },
                        {
                            event_id: 5,
                            title: "Workshop #2: UI/UX",
                            start: new Date("2022 4 9 16:00"),
                            end: new Date("2022 4 9 17:00"),
                        },
                        {
                            event_id: 6,
                            title: "Workshop #3: Pitching",
                            start: new Date("2022 4 9 17:30"),
                            end: new Date("2022 4 9 18:30"),
                        },
                        {
                            event_id: 7,
                            title: "Team Formation & Office Hours",
                            start: new Date("2022 4 9 19:00"),
                            end: new Date("2022 4 9 24:00"),
                        },
                        {
                            event_id: 8,
                            title: "Board Game Night!",
                            start: new Date("2022 4 9 20:00"),
                            end: new Date("2022 4 9 21:00"),
                        },
                        {
                            event_id: 9,
                            title: "Online Games!",
                            start: new Date("2022 4 9 21:00"),
                            end: new Date("2022 4 9 22:00"),
                        },
                        {
                            event_id: 10,
                            title: "Chill Zone",
                            start: new Date("2022 4 9 22:00"),
                            end: new Date("2022 4 9 24:00"),
                        },
                        {
                            event_id: 11,
                            title: "Office Hours",
                            start: new Date("2022 4 10 10:00"),
                            end: new Date("2022 4 10 13:00"),
                        },
                        {
                            event_id: 12,
                            title: "Submissions Due",
                            start: new Date("2022 4 10 12:30"),
                            end: new Date("2022 4 10 13:00"),
                        },
                        {
                            event_id: 13,
                            title: "Judging",
                            start: new Date("2022 4 10 13:30"),
                            end: new Date("2022 4 10 15:00"),
                        },
                        {
                            event_id: 14,
                            title: "Closing Ceremony",
                            start: new Date("2022 4 10 16:45"),
                            end: new Date("2022 4 10 18:30"),
                        },
                    ]}
                />
                {/*<Tabs>*/}
                {/*    <TabList>*/}
                {/*        <Tab><h3>Saturday April 10</h3></Tab>*/}
                {/*        <Tab><h3>Sunday April 11</h3></Tab>*/}
                {/*    </TabList>*/}
                {/*    <TabPanel>*/}

                {/*        <div className="day">*/}
                {/*            <p>9:45AM - 10:30AM          Registration</p>*/}
                {/*            <p>10:45AM - 12:00PM        Opening Ceremony</p>*/}
                {/*            <p>1:00PM - 2:00PM            Workshop #1: Ideation w/ Nina Polson</p>*/}
                {/*            <p>2:30PM - 3:30PM            Talk: Making a complicated concept intuitive w/ Tim Skapek</p>*/}
                {/*            <p>4:00PM - 5:00PM            Workshop #2: UI/UX w/ Sharon Winter</p>*/}
                {/*            <p>5:30PM - 6:30PM            Workshop #3: Pitching w/ AtomicVC</p>*/}
                {/*            <p>4:00PM - 5:00PM            Team Formation and Office Hours</p>*/}
                {/*        </div>*/}
                {/*    </TabPanel>*/}
                {/*    <TabPanel>*/}
                {/*        <div className="day">*/}
                {/*            <p>10am        Bob Ross MS Paint Event</p>*/}
                {/*            <p>3:30pm    Submissions Due</p>*/}
                {/*            <p>4pm         Judging Begins</p>*/}
                {/*            <p>7pm         Closing and Awards Ceremony</p>*/}
                {/*        </div>*/}
                {/*    </TabPanel>*/}
                {/*</Tabs>*/}
            </div>
        </div>
    )
}

export default Schedule;
