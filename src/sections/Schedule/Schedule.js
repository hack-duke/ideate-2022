import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Schedule.css';

import clouds from '../../graphics/schedule-top-right.svg';
import 'react-tabs/style/react-tabs.css';

function Schedule() {
    return (

        <div id="schedule">
            <div className={"schedule-container"}>
                <h1 id="schedule-title">Example Schedule from 2021</h1>
                <Tabs>
                    <TabList>
                        <Tab><h3>Saturday April 10</h3></Tab>
                        <Tab><h3>Sunday April 11</h3></Tab>
                    </TabList>
                    <TabPanel>
                        <div className="day">
                            <p>10am       Opening and Keynote Presentation</p>
                            <p>12pm       Workshops and Talks</p>
                            <p>5pm         Design Challenge Begins</p>
                            <p>6pm         Nonprofit Q&As and Office Hours</p>
                            <p>9pm         Virtual Game Night</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="day">

                            <p>10am        Bob Ross MS Paint Event</p>
                            <p>3:30pm    Submissions Due</p>
                            <p>4pm         Judging Begins</p>
                            <p>7pm         Closing and Awards Ceremony</p>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default Schedule;
