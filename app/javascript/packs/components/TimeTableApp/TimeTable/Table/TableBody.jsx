import React from 'react';
import {Table} from "semantic-ui-react";
import TableRow from "./TableRow";

const timeInterval = [
    '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
    '21:30', '22:00', '22:30', '23:00'
];


const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TableBody = () => {
    let time;
    const rows = [];
    let i = 1;

    for (time of timeInterval) {
        rows.push(<TableRow time={time} key={i}/>);
        i++;
    }

    return (
        <Table.Body>
            {rows}
        </Table.Body>
    );
}

export default TableBody;