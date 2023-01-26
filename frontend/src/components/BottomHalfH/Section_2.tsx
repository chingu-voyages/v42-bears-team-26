/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import HeaderText from '../../shared/HeaderText'
//import {useForm} from 'react-hook-form'
import {
  MapPinIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon
} from '@heroicons/react/24/solid'



function Section_2() {
  return (
    <div className="bg-rose-50">
      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-222">
        <div>
        {/* HEADER */}
        <HeaderText>Leave us a message</HeaderText>
        <p className="my-5">
          Est expedita debitis est reiciendis quia. Et natus molestiae qui
          temporibus deleniti ut numquam sapiente vel saepe pariatur ab internos
          error et perspiciatis animi ut minus atque.
        </p>
           {/* SOCIALS */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <div>
            <div className="w-4 h-4">
            <div><MapPinIcon /></div>
            </div>
            <p>9094 Bay Meadows Street</p>
            <p>Conyers, GA 30012</p>
          </div>

           <div>
            <div className="w-4 h-4">
            <div><DevicePhoneMobileIcon /></div>
            </div>
            <p>+229-955-5388-336</p>
            <p>+229-955-5373-360</p>
          </div>

           <div>
            <div className="w-4 h-4">
            <div><EnvelopeIcon /></div>
            </div>
            <p>office@mail.com</p>
            <p>support@mail.com</p>
          </div>
        </div>
        </div>
        {/* FORM */}
        <div className="mt-10 justify-between gap-8 md:flex"></div>
      </section>
    </div>
  )
}

export default Section_2;