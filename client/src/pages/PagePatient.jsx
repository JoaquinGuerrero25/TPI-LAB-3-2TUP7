import React, { useEffect, useState } from 'react'
import TableGeneric from '../components/Generic/TableGeneric'
import { headerAppointment } from '../utils/appointment'
import axios from 'axios'

const PagePatient = () => {
    const [appointment,setAppointment] = useState(null)
    useEffect(()=>{
        const response = axios.get('/Appointment')
    })
    return (
    <div>
      <TableGeneric headerProps={headerAppointment}/>
    </div>
  )
}

export default PagePatient
