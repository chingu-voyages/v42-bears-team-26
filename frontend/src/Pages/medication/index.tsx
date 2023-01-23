import React, { useEffect, useState } from 'react'
import CostumePage from '../../components/customPage'
import SearchInput from '../../components/searchInput'
import Table from '../../components/table/table'
import axios from 'axios'

export const MedicationPage = () => {
    const thead = ['Mecication name', 'Frequency', 'Dosage']
  
    const [medications, setMedications] = useState<
      Array<{                                         // To update field, but it will conflict with declaration on tbody.tsx
        name: string
        description: string
        date: string
      }>
    >([])
    const getMedication = async () => {
      try {
        const result = await axios.get('http://localhost:4000/test-results') // To update URL
  
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
          <Table thead={thead} tbody={medications} />
        </div>
      </CostumePage>
    )
  }
  