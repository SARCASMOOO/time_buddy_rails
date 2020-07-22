import React from 'react'
import {Table} from "semantic-ui-react";

const TableHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Sunday</Table.HeaderCell>
                <Table.HeaderCell>Monday</Table.HeaderCell>
                <Table.HeaderCell>Tuesday</Table.HeaderCell>
                <Table.HeaderCell>Wednesday</Table.HeaderCell>
                <Table.HeaderCell>Thursday</Table.HeaderCell>
                <Table.HeaderCell>Friday</Table.HeaderCell>
                <Table.HeaderCell>Saturday</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
}

export default TableHeader;