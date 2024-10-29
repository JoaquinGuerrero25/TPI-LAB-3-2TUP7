import { Table, TableHeader, TableColumn, TableBody, table,TableCell,TableRow } from "@nextui-org/react";
import React from 'react'
import{format} from "date-fns" 
import { FaCheck, FaTimes } from 'react-icons/fa'; 
import axios from 'axios'; 
const TableGeneric = ({ headerProps, appointmentProps }) => {
    const handleRequestAppointment = async (id) => {
        try {
          const response = await axios.put(`/Appointment/AssignAppointment/${id}`);
          alert("Turno solicitado exitosamente.");
        } catch (error) {
          console.error("Error solicitando el turno:", error);
        }
      };
      const handleCancelAppointment = async (id) => {
        try {
          const response = await axios.delete(`/Appointment/Cancel/${id}`);
          alert("Turno cancelado exitosamente.");
        } catch (error) {
          console.error("Error cancelando el turno:", error);
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
                   <TableCell>
                <button 
                  onClick={() => handleRequestAppointment(appointment.idAppointment)} 
                  className="text-green-500 hover:text-green-700"
                >
                  <FaCheck />
                </button>
                <button 
                  onClick={() => handleCancelAppointment(appointment.idAppointment)} //ver api
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <FaTimes />
                </button>
              </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default TableGeneric;