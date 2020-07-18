import React from 'react'
import {Label, Table} from "semantic-ui-react";

const TableRow = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.time}</Table.Cell>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
        </Table.Row>
    );
}

export default TableRow;