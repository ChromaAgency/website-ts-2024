// types

import { Benefit, GalleryItem, Vacancy, Feature } from './types'

// images
import img1 from '@/assets/images/photos/3.jpg'
import img2 from '@/assets/images/photos/4.jpg'
import img3 from '@/assets/images/photos/5.jpg'
import img4 from '@/assets/images/photos/10.jpg'

const benefits: Benefit[] = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#8a50bc]"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} />
          <path
            d="M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M14.1654881,7.35483745 L9.61055177,10.3622525 C9.47921741,10.4489666 9.39637436,10.592455 9.38694497,10.7495509 L9.05991526,16.197949 C9.04337012,16.4735952 9.25341309,16.7104632 9.52905936,16.7270083 C9.63705011,16.7334903 9.74423017,16.7047714 9.83451193,16.6451626 L14.3894482,13.6377475 C14.5207826,13.5510334 14.6036256,13.407545 14.613055,13.2504491 L14.9400847,7.80205104 C14.9566299,7.52640477 14.7465869,7.28953682 14.4709406,7.27299168 C14.3629499,7.26650974 14.2557698,7.29522855 14.1654881,7.35483745 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Páginas web',
    description: "Utilizamos las últimas tecnologías para desarrollar sitios web dinámicos, optimizados y adaptables. Garantizando alto rendimiento, experiencia de usuario eficiente y compatibilidad con múltiples dispositivos.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#8a50bc]"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M5,2 L19,2 C20.1045695,2 21,2.8954305 21,4 L21,6 C21,7.1045695 20.1045695,8 19,8 L5,8 C3.8954305,8 3,7.1045695 3,6 L3,4 C3,2.8954305 3.8954305,2 5,2 Z M11,4 C10.4477153,4 10,4.44771525 10,5 C10,5.55228475 10.4477153,6 11,6 L16,6 C16.5522847,6 17,5.55228475 17,5 C17,4.44771525 16.5522847,4 16,4 L11,4 Z M7,6 C7.55228475,6 8,5.55228475 8,5 C8,4.44771525 7.55228475,4 7,4 C6.44771525,4 6,4.44771525 6,5 C6,5.55228475 6.44771525,6 7,6 Z"
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M5,9 L19,9 C20.1045695,9 21,9.8954305 21,11 L21,13 C21,14.1045695 20.1045695,15 19,15 L5,15 C3.8954305,15 3,14.1045695 3,13 L3,11 C3,9.8954305 3.8954305,9 5,9 Z M11,11 C10.4477153,11 10,11.4477153 10,12 C10,12.5522847 10.4477153,13 11,13 L16,13 C16.5522847,13 17,12.5522847 17,12 C17,11.4477153 16.5522847,11 16,11 L11,11 Z M7,13 C7.55228475,13 8,12.5522847 8,12 C8,11.4477153 7.55228475,11 7,11 C6.44771525,11 6,11.4477153 6,12 C6,12.5522847 6.44771525,13 7,13 Z"
            id="Combined-Shape-Copy"
            fill="currentColor"
          />
          <path
            d="M5,16 L19,16 C20.1045695,16 21,16.8954305 21,18 L21,20 C21,21.1045695 20.1045695,22 19,22 L5,22 C3.8954305,22 3,21.1045695 3,20 L3,18 C3,16.8954305 3.8954305,16 5,16 Z M11,18 C10.4477153,18 10,18.4477153 10,19 C10,19.5522847 10.4477153,20 11,20 L16,20 C16.5522847,20 17,19.5522847 17,19 C17,18.4477153 16.5522847,18 16,18 L11,18 Z M7,20 C7.55228475,20 8,19.5522847 8,19 C8,18.4477153 7.55228475,18 7,18 C6.44771525,18 6,18.4477153 6,19 C6,19.5522847 6.44771525,20 7,20 Z"
            id="Combined-Shape-Copy-2"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'aplicaciones mobiles',
    description:
      'Desarrollamos aplicaciones para dispositivos móviles, optimizadas para iOS y Android. Utilizamos tecnologías como React Native para crear aplicaciones que ofrecen una experiencia de usuario eficiente y un rendimiento óptimo.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#8a50bc]"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <polygon id="Shape" points="0 0 24 0 24 24 0 24" />
          <path
            d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Implementación de chatbots interactivos',
    description:
      "Desarrollamos e implementamos chatbots inteligentes a través de nuestra propia plataforma. ",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#8a50bc]"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
        </g>
      </svg>
    ),
    title: 'Adaptabilidad',
    description:
      'Nuestros bots se adaptan a distintos canales y necesidades, interactuando de forma natural y eficiente, permitiendo automatizar la atención al cliente, brindar respuestas rápidas y mejorar la experiencia del usuario. ',
  },
]
const features: Feature[] = [
  {
    deviceIcon: (
      <svg
        className="w-10 h-10 mx-auto text-black"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M6,8 L6,16 L18,16 L18,8 L6,8 Z M20,16 L21.381966,16 C21.7607381,16 22.1070012,16.2140024 22.2763932,16.5527864 L22.5,17 C22.6706654,17.3413307 22.5323138,17.7563856 22.190983,17.927051 C22.0950363,17.9750244 21.9892377,18 21.881966,18 L2.11803399,18 C1.73641461,18 1.42705098,17.6906364 1.42705098,17.309017 C1.42705098,17.2017453 1.45202663,17.0959467 1.5,17 L1.7236068,16.5527864 C1.89299881,16.2140024 2.23926193,16 2.61803399,16 L4,16 L4,8 C4,6.8954305 4.8954305,6 6,6 L18,6 C19.1045695,6 20,6.8954305 20,8 L20,16 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
          <polygon
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
            points="6 8 6 16 18 16 18 8"
          />
        </g>
      </svg>
    ),
    deviceName: 'Windows',
  },
  {
    deviceIcon: (
      <svg
        className="w-10 h-10 mx-auto text-black"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M5,6 L19,6 C19.5522847,6 20,6.44771525 20,7 L20,17 L4,17 L4,7 C4,6.44771525 4.44771525,6 5,6 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
          <rect
            id="Rectangle"
            fill="currentColor"
            opacity="0.3"
            x={1}
            y={18}
            width={22}
            height={1}
            rx="0.5"
          />
        </g>
      </svg>
    ),
    deviceName: 'Mac',
  },
  {
    deviceIcon: (
      <svg
        className="w-10 h-10 mx-auto text-black"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <rect
            id="Rectangle-7-Copy"
            fill="currentColor"
            x={2}
            y={5}
            width={19}
            height={4}
            rx={1}
          />
          <rect
            id="Rectangle-7-Copy-4"
            fill="currentColor"
            opacity="0.3"
            x={2}
            y={11}
            width={19}
            height={10}
            rx={1}
          />
        </g>
      </svg>
    ),
    deviceName: 'Browser',
  },
  {
    deviceIcon: (
      <svg
        className="w-10 h-10 mx-auto text-black"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <rect id="bound" x={0} y={0} width={24} height={24} />
          <path
            d="M7.5,4 L7.5,19 L16.5,19 L16.5,4 L7.5,4 Z M7.71428571,2 L16.2857143,2 C17.2324881,2 18,2.8954305 18,4 L18,20 C18,21.1045695 17.2324881,22 16.2857143,22 L7.71428571,22 C6.76751186,22 6,21.1045695 6,20 L6,4 C6,2.8954305 6.76751186,2 7.71428571,2 Z"
            id="Combined-Shape"
            fill="currentColor"
          />
          <polygon
            id="Combined-Shape"
            fill="currentColor"
            opacity="0.3"
            points="7.5 4 7.5 19 16.5 19 16.5 4"
          />
        </g>
      </svg>
    ),
    deviceName: 'Mobile',
  },
]
const gallery: GalleryItem[] = [
  {
    id: 3,
    image: {
      src: img1,
      caption: 'Office Desks',
    },
  },
  {
    id: 4,
    image: {
      src: img2,
      caption: 'Meeting Room view',
    },
  },
  {
    id: 5,
    image: {
      src: img4,
      caption: 'Outside view',
    },
  },
  {
    id: 6,
    image: {
      src: img3,
      caption: 'A common seating area',
    },
  },
]

const vacancies: Vacancy[] = [
  {
    category: 'Engineering',
    jobs: [
      {
        designation: 'Techical Support Engineer',
        type: 'Remote',
      },
      {
        designation: 'Senior Software Engineer (Frontend)',
        type: 'Remote',
      },
      {
        designation: 'Senior Software Engineer (Backend)',
        type: 'Remote',
      },
      {
        designation: 'Engineering Manager',
        type: 'Remote',
      },
    ],
  },
  {
    category: 'Marketing',
    jobs: [
      {
        designation: 'Junior copywriter/editor',
        type: 'Remote',
      },
    ],
  },
]

export { benefits, gallery, vacancies, features }
