/*Designed by Sandra Ashipala https://github.com/sandramsc*/
import React from 'react'
import {
  StarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/solid'
import HeaderText from '../../shared/HeaderText'
import Testimonial from './Testimonial'
import { TestimonialType } from '../../shared/types'

const testimonials: Array<TestimonialType> = [
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
    comment:
      'Est expedita debitis est reiciendis quia est dolorum ratione ut quia voluptates. Et natus molestiae qui temporibus deleniti ut numquam sapiente vel saepe pariatur ab internos error et perspiciatis animi ut minus atque.',
    icon_2: <StarIcon className="h-6 w-6" />,
    icon_3: <StarIcon className="h-6 w-6" />,
    icon_4: <StarIcon className="h-6 w-6" />,
    icon_5: <StarIcon className="h-6 w-6" />,
    icon_6: <StarIcon className="h-6 w-6" />,
    name: 'Marama Petera',
    location: 'Tulia',
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
    comment:
      'Lorem ipsum dolor sit amet. Vel nesciunt quia id reiciendis blanditiis ut quia voluptatibus rem omnis facilis est consequatur dolorem est impedit aliquam. Aut autem commodi aut molestiae tempore qui nobis harum.',
    icon_2: <StarIcon className="h-6 w-6" />,
    icon_3: <StarIcon className="h-6 w-6" />,
    icon_4: <StarIcon className="h-6 w-6" />,
    icon_5: <StarIcon className="h-6 w-6" />,
    icon_6: <StarIcon className="h-6 w-6" />,
    name: 'Cvita Doleschall',
    location: 'Hamburg',
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />,
    comment:
      'Non consequatur libero et voluptatem mollitia qui voluptates provident! Est repellat quis vel quae sint aut doloremque minima!!',
    icon_2: <StarIcon className="h-6 w-6" />,
    icon_3: <StarIcon className="h-6 w-6" />,
    icon_4: <StarIcon className="h-6 w-6" />,
    icon_5: <StarIcon className="h-6 w-6" />,
    icon_6: <StarIcon className="h-6 w-6" />,
    name: 'Chikelu Obasea',
    location: 'Dongguan',
  },
]

function Section_1() {
  return (
    <section
      id="testimonials"
      className="bg-primaryColor_gray mx-auto min-h-full w-5/6 py-20"
    >
      {/* HEADER */}
      <div>
        <HeaderText>Testimonials</HeaderText>
      </div>

      {/* TESTIMONIALS */}
      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {testimonials.map((testimonial: TestimonialType) => (
          <Testimonial
            key={testimonial.name}
            icon={testimonial.icon}
            icon_2={testimonial.icon_2}
            icon_3={testimonial.icon_2}
            icon_4={testimonial.icon_2}
            icon_5={testimonial.icon_2}
            icon_6={testimonial.icon_2}
            comment={testimonial.comment}
            name={testimonial.name}
            location={testimonial.location}
          />
        ))}
      </div>
    </section>
  )
}
export default Section_1
