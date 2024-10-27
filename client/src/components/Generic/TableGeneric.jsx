import { Table, TableHeader, TableColumn, TableBody, table } from "@nextui-org/react";
import React from 'react'

const TableGeneric = (headerProp) => {
    const { headerProps } = headerProp
    // console.log(patientProps)
    console.log(headerProps)
    return (
        <div>
            <Table aria-label="Example empty table">
                <TableHeader>
                    {headerProps.map((header, index) => (
                        <TableColumn key={`${header}-${index}`}>{header}</TableColumn>
                    ))}
                </TableHeader>
                <TableBody emptyContent="No rows to display.">
                    {/* Aquí puedes agregar filas de datos si tienes */}
                </TableBody>
            </Table>
        </div>
    )
}

export default TableGeneric
