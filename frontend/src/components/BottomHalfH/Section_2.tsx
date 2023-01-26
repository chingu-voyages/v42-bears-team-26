/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import HeaderText from '../../shared/HeaderText'
import {useForm} from 'react-hook-form'
import {
  MapPinIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/solid'


function Section_2() {
  const inputStyles =`mb-5 w-full rounded-lg bg-white px-5 py-3 placeholder-slate-200`;
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <div className="bg-rose-50">
      <section id="contactus" className="mx-auto w-5/6 pt-24 pb-222">
        <div>
          {/* HEADER */}
          <HeaderText>Leave us a message</HeaderText>
          <p className="my-5">
            Est expedita debitis est reiciendis quia. Et natus molestiae qui
            temporibus deleniti ut numquam sapiente vel saepe pariatur ab
            internos error et perspiciatis animi ut minus atque.
          </p>
          {/* SOCIALS */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <div>
              <div className="w-4 h-4 mb-2">
                <div>
                  <MapPinIcon />
                </div>
              </div>
              <p>9094 Bay Meadows Street</p>
              <p>Conyers, GA 30012</p>
            </div>

            <div>
              <div className="w-4 h-4 mb-2">
                <div>
                  <DevicePhoneMobileIcon />
                </div>
              </div>
              <p>+229-955-5388-336</p>
              <p>+229-955-5373-360</p>
            </div>

            <div>
              <div className="w-4 h-4 mb-2">
                <div>
                  <EnvelopeIcon />
                </div>
              </div>
              <p>office@mail.com</p>
              <p>support@mail.com</p>
            </div>
          </div>
        </div>
        {/* FORM */}
        <div className="mt-10 justify-between gap-8 md:flex">

          
          <form target="_blank" onSubmit={onSubmit} method="POST" action="https://formsubmit.co/your@email.com">
          <div>
          <p className="font-bold">Full name</p>
          <input className={inputStyles}
          type="text"
          placeholder="John Doe"
          {...register("name", {required: false,
          maxLength: 20,
          })} />
          {errors.name && (
            <p className="mt-1 text-red-600">
              {errors.name.type === "maxLength" && "Max length is 20 characters."}
            </p>
          )}
          </div>

          <div>
          <p className="font-bold">Email address</p>
          <input className={inputStyles}
          type="text"
          placeholder="Nolte"
          {...register("email", {required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })} />
          {errors.email && (
            <p className="mt-1 text-primary-500 text-red-600">
              {errors.email.type === "required" && "Email address is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}
          </div>

          <div>
          <p className="font-bold">Message</p>
          <textarea className={inputStyles}
          cols={50}
          rows={4}
          placeholder="Type here..."
          {...register("message", {required: true,
          maxLength: 220,
          })} />
          {errors.message && (
            <p className="mt-1 text-primary-500 text-red-600">
              {errors.message.type === "required" && "Message is required."}
              {errors.message.type === "message" && "Max length is 220 characters."}
            </p>
          )}
          </div>
            <button type="submit" className="px-20 py-3 mt-5 border-5 rounded-lg bg-yellow-300 transition duration-500 hover:text-black ">Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Section_2
