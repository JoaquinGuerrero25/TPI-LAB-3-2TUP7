import { useEffect, useState } from 'react';
import TableGeneric from '../components/Generic/TableGeneric';
import { headerAppointment } from '../utils/appointment';
import axios from 'axios';

const PagePatient = () => {
  const [appointments, setAppointments] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/Appointment');
        setAppointments(response.data);

        const uniqueSpecialties = [
          ...new Set(response.data.map(appointment => appointment.doctorSpecialty).filter(Boolean))
        ];
        setSpecialties(uniqueSpecialties);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  const filteredAppointments = selectedSpecialty
    ? appointments.filter(appointment => appointment.doctorSpecialty === selectedSpecialty)
    : appointments;

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedSpecialty(value);
  };

  return (
    <div className="p-4">
      <label htmlFor="specialty-select" className="block text-sm font-medium text-gray-700">
        Selecciona una especialidad
      </label>
      <select
        id="specialty-select"
        onChange={handleChange}
        value={selectedSpecialty}
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
      >
        <option value="">Todas</option>
        {specialties.map((specialty, index) => (
          <option key={index} value={specialty}>
            {specialty}
          </option>
        ))}
      </select>

      {filteredAppointments.length > 0 ? (
        <TableGeneric
          headerProps={headerAppointment}
          appointmentProps={filteredAppointments}
        />
      ) : (
        <p>No hay citas disponibles para la especialidad seleccionada.</p>
      )}
    </div>
  );
};

export default PagePatient;