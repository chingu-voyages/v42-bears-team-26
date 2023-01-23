import React from 'react'

function SearchInput() {
  return (
    <div className="flex justify-center mb-3 w-full ">
      <div className="w-full mr-40">
        <input
          type="search"
          className="w-full h-55 px-3 py-1.5 bg-white border border-solid border-secondaryColor_slate rounded-full"
          id="Search"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
export default SearchInput
