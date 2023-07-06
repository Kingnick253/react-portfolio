import React from 'react'
import SocialLinks from './SocialLinks';



const Socials = () => {


    
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {SocialLinks.map(({id, child, href, style}) =>(
                 <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-DeepOne to-DeepTwo  ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300' + ' ' + style }>

                 <a href= {href} 
                 className='flex justify-between items-center w-full text-white'
                //  download={download}
                 target='_blank'
                 rel="noreferrer">

                    {child}
                     
                 </a>
             </li>

            ))}
           
        </ul>

    </div>
  )
}

export default Socials