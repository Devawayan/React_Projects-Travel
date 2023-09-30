import React,{useEffect} from 'react'
import './main.css'
import{HiOutlineLocationMarker} from 'react-icons/hi'
import{HiOutlineClipboardCheck} from 'react-icons/hi'
import img2 from '../../Assets/img 2.jpg'
import img3 from '../../Assets/img 3.jpg'
import img4 from '../../Assets/img 4.jpg'
import img5 from '../../Assets/img 5.jpg'
import img6 from '../../Assets/img 6.jpg'
import img7 from '../../Assets/img 7.jpg'
import img8 from '../../Assets/img 8.jpg'
import img9 from '../../Assets/img 9.jpg'
import img10 from '../../Assets/img 10.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc: img2,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This Place is known for its luxurious stays and adventuorus activities. '
  },

  {
    id:2,
    imgSrc: img3,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$834',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. '
  },

  {
    id:3,
    imgSrc: img4,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$1024',
    description: "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs and 900 islands stretching for over 2,300 kilometres (1,400 mi) over an area of approximately 344,400 square kilometres ."
  },

  {
    id:4,
    imgSrc: img5,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: "Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. Other notables sites include Bronze Age homes carved into valley walls by troglodytes (cave dwellers) and later used as refuges by early Christians. The 100m-deep Ihlara Canyon houses numerous rock-face churches"
  },

  {
    id:5,
    imgSrc: img6,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: "Guanajuato is a city in central Mexico. It's known for its silver mining history and colonial architecture. Its network of narrow streets, alleyways and tunnels is typified by the Callejón del Beso (Alley of the Kiss), so named because the balconies are close enough for a couple to reach across and kiss. In a former granary, the Alhóndiga de Granaditas is an art and local history museum with pre-Columbian exhibits."
  },

  {
    id:6,
    imgSrc: img7,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: "Cinque Terre is a string of centuries-old seaside villages on the rugged Italian Riviera coastline. In each of the 5 towns, colorful houses and vineyards cling to steep terraces, harbors are filled with fishing boats and trattorias turn out seafood specialties along with the Liguria region’s famous sauce, pesto."
  },

  {
    id:7,
    imgSrc: img8,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: "Angkor Wat is a temple complex in Cambodia, located on a site measuring 162.6 hectares. The Guinness World Records considers it as the largest religious structure in the world."
  },

  {
    id:8,
    imgSrc: img9,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$1000',
    description: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan  to house the tomb of his beloved wife, Mumtaz Mahal it also houses the tomb of Shah Jahan himself. "
  },

  {
    id:9,
    imgSrc: img10,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast."
  }
]



const Main = () => {

 //React Hook to create scroll animation
  // .........................

  useEffect(()=>{
  Aos.init({duration: 2000})
  },[])

  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* Here the map and the array concept is used to get all the destination at once and you can check through the map */}
      
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>
          {
            return(
              <div key={id} 
              data-aos="fade-up" className="singleDestination">
                {/* here it will return the single destination from the given array  */}
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>


                      <button className="btn flex">
                        DETAILS <HiOutlineClipboardCheck className="icon"/>
                      </button>
                  </div>
              </div>
            )
          })
        }

      </div>

    </section>
  )
}

export default Main
