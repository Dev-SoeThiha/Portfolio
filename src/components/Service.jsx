import Title from './Title'
import services from './../data/data'

const Service = () => {
  return (
    <div className='px-10 max-w-screen-xl mx-auto mt-40'>
        <Title 
        title="Digital Services I offer"
        desc="Discover a diverse suite of digital services tailored to elevate your online presence and maximize performance. From sleek web design to powerful backend solutions, I offer everything you need to succeed in the digital realm."
        />
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20 gap-4 md:gap-10'>
          {services.map((service, i) => (
            <div key={i} className='p-10 text-center bg-white dark:bg-gray-800 rounded-xl'>
              <service.icon className='text-5xl mx-auto mb-10 text-gray-600 dark:text-gray-300' />
              <h3 className='text-2xl mb-5 text-gray-600 dark:text-gray-300'>{service.title}</h3>
              <p className='text-xl max-w-md mx-auto text-gray-600 dark:text-gray-300'>{service.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Service