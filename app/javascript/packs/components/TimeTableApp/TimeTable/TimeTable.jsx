import React from 'react';
import { Table, Label, Menu, Icon } from "semantic-ui-react";
import TableHeader from './Table/TableHeader';
import TableBody from "./Table/TableBody";

const TimeTable = () => {
    return (
        <Table className='TimeTable' compact='very' celled padded='very'>
            <TableHeader />
            <TableBody />
        </Table>
    );
}

export default TimeTable