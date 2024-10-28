import { Table, TableHeader, TableColumn, TableBody, table,TableCell,TableRow } from "@nextui-org/react";
import React from 'react'
import{format} from "date-fns" //baje esta libreria para que no nos rompa los huevo el formato de fecha.

const TableGeneric = ({ headerProps, appointmentProps }) => {
    const handleRequestAppointment = async (id) => {
        try {
          const response = await axios.put(`/Appointment/AssignAppointment/${id}`);
          alert("Turno solicitado exitosamente.");
        } catch (error) {
          console.error("Error solicitando el turno:", error);
        }
      };
    return (
      <div>
        <Table aria-label="Appointment Table">
          <TableHeader>
            {headerProps.map((header, index) => (
              <TableColumn key={`${header}-${index}`}>{header}</TableColumn>
            ))}
          </TableHeader>
          <TableBody emptyContent="No rows to display.">
            {appointmentProps.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell>{appointment.doctorName}</TableCell>
                <TableCell>{appointment.doctorSpecialty}</TableCell>
                <TableCell>{format(new Date(appointment.date), "dd/MM/yyyy")}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default TableGeneric;