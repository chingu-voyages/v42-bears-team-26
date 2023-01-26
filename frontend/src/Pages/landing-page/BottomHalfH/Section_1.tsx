import React from 'react'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid'
import HeaderText from '../../../components/HeaderText'
import Testimonial from './Testimonial'
import { TestimonialType } from '../types'

const testimonials: Array<TestimonialType> = [
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
    comment:
      'Est expedita debitis est reiciendis quia. Et natus molestiae qui temporibus deleniti ut numquam sapiente vel saepe pariatur ab internos error et perspiciatis animi ut minus atque.',
    name: 'Marama Petera',
    location: 'Tulia',
    stars: 5,
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
    comment:
      'Lorem ipsum dolor sit amet. Vel nesciunt quia molestiae tempore qui nobis harum.',
    name: 'Cvita Doleschall',
    location: 'Hamburg',
    stars: 5,
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
    comment:
      'Non consequatur libero et voluptatem mollitia qui voluptates provident! Est repellat quis vel quae sint aut doloremque minima!!',
    name: 'Chikelu Obasea',
    location: 'Dongguan',
    stars: 4,
  },
]

function Section_1() {
  return (
    <div className="bg-yellow-50">
      <section id="testimonials" className="min-h-full py-10">
        {/* HEADER */}
        <div className="flex justify-center mx-90">
          <HeaderText>Testimonials</HeaderText>
        </div>

        {/* TESTIMONIALS */}
        <div className="mt-5 ml-20 mr-20 items-center justify-between md:flex">
          {testimonials.map((testimonial: TestimonialType) => (
            <Testimonial
              key={testimonial.name}
              icon={testimonial.icon}
              stars={testimonial.stars}
              comment={testimonial.comment}
              name={testimonial.name}
              location={testimonial.location}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
export default Section_1
