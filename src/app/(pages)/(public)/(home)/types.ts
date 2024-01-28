import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

export type Service = {
  icon: ReactNode
  variant: string
  title: string
  description: string
}

export type BlogPost = {
  heading: string
  img: StaticImageData
  time: string
  title: string
  description: string
}

export type JobDetail = {
  designation: string
  location: string
  jobType: string
}



export type Project = {
  title: string
  description: string
  image: StaticImageData
}

export type Testimonial = {
  name: string
  position: string
  description: string
  image: StaticImageData
  brand: string
}
