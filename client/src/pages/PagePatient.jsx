import React, { useEffect, useState } from 'react';
import TableGeneric from '../components/Generic/TableGeneric';
import { headerAppointment } from '../utils/appointment';
import axios from 'axios';

const PagePatient = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/Appointment');
        console.log(response.data)
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);
  

  return (
    <div>
      <TableGeneric headerProps={headerAppointment} appointmentProps={appointments} />
    </div>
  );
};

export default PagePatient;
