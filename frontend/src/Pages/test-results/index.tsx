import React, { useEffect, useState } from 'react'
import Table from '../../components/table/table'
import SearchInput from '../../components/searchInput'
import CostumePage from '../../components/customPage'
import axios from 'axios'
export const TestResultsPage = () => {
  const thead = ['Name', 'Description', 'Data']

  const [testResult, setTestResult] = useState<
    Array<{
      name: string
      description: string
      date: string
    }>
  >([])
  const getTestResult = async () => {
    try {
      const result = await axios.get('http://localhost:4000/test-results')

      setTestResult(result.data.res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTestResult()
  }, [])
  return (
    <CostumePage
      title="Documents"
      message=" Hi Sarah, welcome to your HealthHero medical results"
    >
      <div className="border border-white rounded-lg bg-white p-10 w-full">
        <div className="flex flex-warp py-10">
          <h1 className="flex-1 text-3xl font-bold text-secondaryColor_black">
            Medical Results Records
          </h1>
          <div className="flex-none text-md text-linearColor_green">
            View All
          </div>
        </div>
        <SearchInput />
        <Table thead={thead} tbody={testResult} />
      </div>
    </CostumePage>
  )
}
