import React, { useEffect, useState } from 'react'
import { Table } from '../../components/table/table'
import SearchInput from '../../components/searchInput'
import axios from 'axios'
import { TableHead } from '../../components/table/thead'
import { TableBody } from '../../components/table/tbody'
import { TableField, TableRow } from '../../components/table/tbody'
import moment from 'moment'
import { BACKEND_URL } from '../../constants'

export const TestResultsPage = () => {
  const tableHeaders = ['Name', 'Description', 'Date']

  const [testResult, setTestResult] = useState<
    Array<{
      name: string
      description: string
      date: string
    }>
  >([])
  const getTestResult = async () => {
    try {
      const result = await axios.get(`${BACKEND_URL}/test-results`)

      setTestResult(result.data.res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getTestResult()
  }, [])
  return (
    <>
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
        <Table>
          <TableHead headers={tableHeaders} />
          <TableBody>
            {testResult.map((result, i) => (
              <TableRow
                key={i}
                color={i % 2 === 0 ? 'bg-secondaryColor_lace' : 'bg-white'}
              >
                <TableField value={result.name} />
                <TableField value={result.description} />
                <TableField value={moment(result.date).format('DD/MM/YYYY')} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}
