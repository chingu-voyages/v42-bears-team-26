import React from 'react'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const FormFieldLabel = ({ label }: { label: string }) => (
  <label className="mb-2 block text-sm font-medium font-sans">{label}</label>
)
const FormSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="my-4">{children}</div>
}

const FormTitle = ({ title }: { title: string }) => (
  <div className="text-lg font-medium mb-8">{title}</div>
)

const Input = () => (
  <div>
    <input
      className="w-full py-2 px-3 focus:outline-none border-2 border-black  rounded-2xl"
      type="text"
      required
    />
  </div>
)

const Select = ({
  options,
  onChange,
}: {
  options: string[] | number[]
  onChange: (option: string | number) => void
}) => (
  <div>
    <select
      className="rounded-xl w-full py-2 px-3 border-black border-2 bg-white"
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

const CheckBox = ({
  label,
  onSelect,
}: {
  label: string
  onSelect: (isChecked: boolean) => void
}) => {
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => onSelect(e.target.checked)}
        className="form-check-input appearance-none h-4 w-4 border-black border-[1px] rounded-sm bg-white checked:text-white checked:bg-blue-600 checked:border-blue-600 transition duration-200 mr-2 cursor-pointer"
      />
      <label>{label} </label>
    </>
  )
}

export const Form = ({ title }: { title: string }) => {
  return (
    <div className=" w-[500px] h-[700px] border-2 border-black p-10 rounded-[40px] bg-orange-50">
      <FormTitle title={title} />
      <FormSection>
        <FormFieldLabel label="Medication name" />
        <Input />
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Intake amount" />
        <div className="mb-2 inline-block">
          <Select
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            onChange={() => {
              return undefined
            }}
          />
        </div>
        <div className="inline-block mx-4">Per</div>
        <div className="inline-block">
          <Select
            options={['Hour', 'Day', 'Week']}
            onChange={() => {
              return undefined
            }}
          />
        </div>
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Days" />
        <div className="flex flex-wrap gap-2 items-center w-100">
          {days.map((day) => (
            <div className="flex w-[120px] items-center gap-2" key={day}>
              <CheckBox
                onSelect={(checked) => {
                  console.log({ day, checked })
                }}
                label={day}
              />
            </div>
          ))}
        </div>
      </FormSection>
      <FormSection>
        <FormFieldLabel label="Additional notification content" />
        <Input />
      </FormSection>
    </div>
  )
}
