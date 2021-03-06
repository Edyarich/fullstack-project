import CalendarEvent from "./CalendarEvent"
import {getCalendarHead} from "../services/getCalendarHead"
import "../styles/home_page.css"
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

/*let calendar = [
    {
        id: 1,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "First Event",
        description: "Take your game to the next level by learning how to analyze " +
            "chess games more effectively. Please bring your games to the class! " +
            "Taught by IM Dorsa Derakhshani",
        place: "Online",
    },
    {
        id: 2,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Second Event",
        description: "Learn all the rules and fundamentals of chess to start " +
            "your chess journey. Taught by Nathaniel Powell",
        place: "Online",
    },
    {
        id: 3,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Third Event",
        description: "Learn the basic fundamentals of chess to start your " +
            "chess journey. Taught by Alex Moellering",
        place: "Online",
    },
    {
        id: 4,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Fourth Event",
        description: "If you already know the rules of chess, learn " +
            "the basic strategies from a grandmaster in this fun class.",
        place: "Online",
    },
    {
        id: 5,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Fifth Event",
        description: "If you already know the rules of chess, learn " +
            "the basic strategies from a grandmaster in this fun class.",
        place: "Online",
    },
    {
        id: 6,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Sixth Event",
        description: "If you already know the rules of chess, learn " +
            "the basic strategies from a grandmaster in this fun class.",
        place: "Online",
    },
];*/

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        getCalendarHead().then(json => this.setState({data: json}));
    }

    render(verbose = false) {
        const calendarWidth = {"width": verbose ? "100%" : "34%"};

        return <div className="calendar" style={calendarWidth}>
            <h2 id="title"> Club Calendar</h2>
            {this.state.data.map(elem=><CalendarEvent key={elem.id} dateFrom={elem.date_from}
                                dateTo={elem.date_to} name={elem.name} place={elem.place}
                                description={elem.description} verbose={verbose}/>)}
        </div>;
    }
}


export default Calendar;