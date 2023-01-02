import React from 'react'
import './Skills.scss'
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import MotionWrap from '../../wrapper/MotionWrap';
import AppWrap from '../../wrapper/AppWrap';
import {urlFor, client} from '../../client';
import {Tooltip as ReactTooltip} from 'react-tooltip';
const Skills = () => {

  const [experience, setexperience] = useState([]);
  const [skills, setskills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
  
    client.fetch(query).then((data) => {
      setexperience(data);
    })
    client.fetch(skillsQuery).then((data) => {
      setskills(data);
    })
    
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills?.map((skills) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{duration: .5}}
              className='app__skills-item app__flex'
              key={skills.name}
            >
              <div className='app__flex' style={{ backgroundColor: skills.bgColor }}>
                <img src={urlFor(skills.icon)} alt={skills.name}/>
              </div>

              <p className='p-text'>{skills.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className='app__skills-exp'>
          {experience.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experience.works.map((work) => (
                    <>
                    <motion.div
                      whileInView={{opacity: [0,1]}}
                      transition={{duration:.5}}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effet='solid'
                        arrowsColor='#fff'
                        className='skills-tooltip'
                        >
                          {work.desc}
                        </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', 'app__whitebg');