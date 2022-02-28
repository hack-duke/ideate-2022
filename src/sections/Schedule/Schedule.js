import React from "react";
import './Schedule.css';

import clouds from '../../graphics/schedule-top-right.svg';


function Schedule() {
    return (
        <div id="schedule">
            <div className={"schedule-container"}>
                <h1 id="schedule-title">Schedule</h1>

                <div className="days">
                    <div className="day">
                        <h3>Saturday April 10</h3>
                        <p>10am       Opening and Keynote Presentation</p>
                        <p>12pm       Workshops and Talks</p>
                        <p>5pm         Design Challenge Begins</p>
                        <p>6pm         Nonprofit Q&As and Office Hours</p>
                        <p>9pm         Virtual Game Night</p>
                    </div>
                    <div className="day">
                        <h3>Sunday April 11</h3>
                        <p>10am        Bob Ross MS Paint Event</p>
                        <p>3:30pm    Submissions Due</p>
                        <p>4pm         Judging Begins</p>
                        <p>7pm         Closing and Awards Ceremony</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule;
