import Title from './Title'
import { contacts } from '../data/data'

const Contact = () => {
  return (
    <div id="contact" className='min-h-max max-w-screen-xl px-10 mx-auto mt-40'>
        <Title 
        title="Hire Me For Your Success"
        desc="Contact me in any convenient way to discuss the details."
        />
        <div className='mt-20 flex flex-col md:flex-row justify-between gap-10 md:gap-2'>
            {contacts.map((contact, i) => (
                <div className='text-start flex-1' key={i}>
                    <div className='w-16 aspect-square rounded-full overflow-hidden bg-gray-600 dark:bg-white flex justify-center items-center'>
                        <contact.icon className='text-3xl w-full text-white  dark:text-gray-800' />
                    </div>
                    <p className='text-gray-800 font-semibold uppercase text-xs dark:text-gray-300 mt-5'>
                        {contact.title}
                    </p>
                    <a target="_blank" href={contact.ext + contact.text}>
                    <h3 className='text-xl text-gray-600 dark:text-gray-300'>
                        {contact.text}
                    </h3>
                    </a>
                    
                </div>
            ))}

        </div>
    </div>
  )
}

export default Contact