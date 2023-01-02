import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://www.linkedin.com/in/shlokdesai41103/' target={'_blank'}><BsLinkedin/></a>
        </div>
        <div>
            <a href='https://github.com/shlokdesai41103' target={'_blank'}><BsGithub/></a>
        </div>
    </div>
  )
}

export default SocialMedia