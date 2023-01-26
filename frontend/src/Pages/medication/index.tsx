import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CostumePage from '../../components/customPage'
import SearchInput from '../../components/searchInput'
import { Table } from '../../components/table/table'
import { TableBody, TableField, TableRow } from '../../components/table/tbody'
import { TableHead } from '../../components/table/thead'
import { Form } from './components'
import Button from '../../components/Button'

export type MedicationEntry = {
  name: string
  dosage: number
  frequency: 'hourly' | 'daily' | 'weekly'
}

export const MedicationPage = () => {
  const tableHeaders = ['Medication name', 'Dosage', 'Frequency']

  const [showModal, setShowModal] = useState(false)

  const [medications, setMedications] = useState<MedicationEntry[]>([])
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

  const handleAddMedication = async (values: MedicationEntry) => {
    const { data }: { data: MedicationEntry } = await axios.post(
      '/api/medications',
      values
    )

    setMedications((medications) => [
      ...medications,
      { name: data.name, frequency: data.frequency, dosage: data.dosage },
    ])
    setShowModal(false)
  }

  return (
    <CostumePage
      title="Medication Tracking"
      message=" Hi Sarah, welcome to your HealthHero Medication tracking"
    >
      <div className="border border-white rounded-lg bg-white p-10 w-full">
        {showModal && (
          <Form
            title="Add Medication"
            onOk={handleAddMedication}
            onCancel={() => setShowModal(false)}
          />
        )}
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
        <Button
          onClick={() => setShowModal(true)}
          label="Add Medication"
          className="primary2"
        />
      </div>
    </CostumePage>
  )
}
