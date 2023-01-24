import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CostumePage from '../../components/customPage'
import SearchInput from '../../components/searchInput'
import { Table } from '../../components/table/table'
import { TableBody, TableField, TableRow } from '../../components/table/tbody'
import { TableHead } from '../../components/table/thead'
import { Form } from './components'

export const MedicationPage = () => {
  const tableHeaders = ['Medication name', 'Dosage', 'Frequency']

  const [medications, setMedications] = useState<
    Array<{
      // To update field, but it will conflict with declaration on tbody.tsx
      name: string
      dosage: string
      frequency: string
    }>
  >([])
  const getMedication = async () => {
    try {
      const result = await axios.get('/api/medications') // To update URL

      setMedications(result.data.res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getMedication()
  }, [])

  return (
    <CostumePage
      title="Medication Tracking"
      message=" Hi Sarah, welcome to your HealthHero Medication tracking"
    >
      <div className="border border-white rounded-lg bg-white p-10 w-full">
        <div className="flex flex-warp py-10">
          <h1 className="flex-1 text-3xl font-bold text-secondaryColor_black">
            Medication Intake Records
          </h1>
          <div className="flex-none text-md text-linearColor_green">
            Medication List
          </div>
        </div>
        <SearchInput />
        <Table>
          <TableHead headers={tableHeaders} />
          <TableBody>
            {medications.map((result, i) => (
              <TableRow
                color={i % 2 === 0 ? 'bg-secondaryColor_lace' : 'bg-white'}
                key={i}
              >
                <TableField value={result.name} />
                <TableField value={result.dosage} />
                <TableField value={result.frequency} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Form title="Add Medication" />
        <button className="py-2 px-4 rounded-full bg-secondaryColor_black text-primaryColor_white">
          Add medication
        </button>
      </div>
    </CostumePage>
  )
}
