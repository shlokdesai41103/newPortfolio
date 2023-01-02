import React from 'react'
import './About.scss'
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants'

import {urlFor, client} from '../../client';
import AppWrap from '../../wrapper/AppWrap';
import MotionWrap from '../../wrapper/MotionWrap';

// const abouts = [
//   {title: 'Web Developer', description: 'I am a good developer', imgUrl: images.about01},
//   {title: 'Full Stack', description: 'I am a good developer', imgUrl: images.about02},
//   {title: 'Back-end Developer', description: 'I am a good developer', imgUrl: images.about03},
//   {title: 'Front-end Developer', description: 'I am a good developer', imgUrl: images.about04}
// ]

const About = () => {


  const [abouts, setabouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';

    client.fetch(query)
    .then((data) => setabouts(data))
  }, [])
  

  return (
    <>
      <h2 className='head-text app__about'>About <span> Me</span>
      </h2>
      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView={{opacity: 1}}
              whileHover={{scale:1.1}}
              transition={{duration: .5, type: 'tween'}}
              className="app__profiles-item"
              key={about.title+index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title}/>
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }

      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg');