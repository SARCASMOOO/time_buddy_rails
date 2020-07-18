import React from 'react';
import { Table, Label, Menu, Icon } from "semantic-ui-react";
import TableHeader from './TableHeader';
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const TimeTable = () => {
    return (
        <Table compact='very' celled padded='very'>
            <TableHeader />
            <TableBody />
            <TableFooter />
        </Table>
    );
}

export default TimeTable