import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchInput from '../../components/searchInput'
import { Table } from '../../components/table/table'
import { TableBody, TableField, TableRow } from '../../components/table/tbody'
import { TableHead } from '../../components/table/thead'
import { Form } from './components'
import Button from '../../components/Button'
import { BACKEND_URL } from '../../constants'

export type MedicationEntry = {
  med_name: string
  dosage_amount: number
  dosage_unit: string //'pill', 'tablet', 'sachet', 'tablespoon', 'teaspoon'
  frequency_amount: number
  frequency_unit: string //'hourly' | 'daily' | 'weekly'
  is_inUse: boolean
  reminder_times: string[] // time in 24 hours format with time zone
  is_current: boolean
  amount: number
  threshold_amount: number
}

export const MedicationPage = () => {
  const tableHeaders = ['Medication name', 'Dosage', 'Frequency']

  const [showModal, setShowModal] = useState(false)

  const [medications, setMedications] = useState<MedicationEntry[]>([])
  const getMedication = async () => {
    try {
      const result = await axios.get(`${BACKEND_URL}/medicine`) // To update URL

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
      `${BACKEND_URL}/medicine`,
      values
    )

    setMedications((medications) => [
      ...medications,
      {
        med_name: data.med_name,
        frequency_amount: data.frequency_amount,
        frequency_unit: data.frequency_unit,
        dosage_amount: data.dosage_amount,
        dosage_unit: data.dosage_unit,
        is_inUse: data.is_inUse,
        reminder_times: data.reminder_times,
        is_current: data.is_current,
        amount: data.amount,
        threshold_amount: data.threshold_amount,
      },
    ])
    setShowModal(false)
  }

  return (
    <>
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
                <TableField value={result.med_name} />
                <TableField
                  value={
                    result.dosage_amount.toString() + ' ' + result.dosage_unit
                  }
                />
                <TableField
                  value={
                    result.frequency_amount.toString() +
                    ' ' +
                    result.frequency_unit
                  }
                />
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
    </>
  )
}
