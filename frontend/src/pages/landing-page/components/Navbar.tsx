import React from 'react'
import Button from '../../../components/Button'

function Navbar({
  onSignInSelect,
  onRegisterSelect,
}: {
  onSignInSelect: () => void
  onRegisterSelect: () => void
}) {
  return (
    <>
      <nav className="bg-primaryColor py-4 col-span-1 row-span-1">
        <div className="flex flex-row justify-between items-center px-[6rem]">
          <div>
            <h1 className="text-2xl">HealthHero</h1>
          </div>

          <ul className="flex flex-row gap-12 items-center text-textColor">
            <li>About</li>
            <li>Features</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li>
              <div className="flex flex-row items-center gap-6">
                <Button
                  className="secondary1 py-1 px-12"
                  label="Sign In"
                  onClick={onSignInSelect}
                />
                <Button
                  className="primary1 py-2 px-12"
                  label="Create"
                  onClick={onRegisterSelect}
                />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
