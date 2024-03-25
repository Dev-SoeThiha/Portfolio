import Title from './Title'
import { projects } from '../data/data'

const Portfolio = () => {
  return (
    <div id="project" className='px-10 max-w-screen-xl mx-auto mt-40'>
        <Title 
        title="Project Spotlights"
        desc="Explore a curated collection of projects I've contributed to, showcasing a wide range of expertise. From dynamic web applications to cutting-edge cloud solutions, each project highlights collaborative efforts and a dedication to excellence and innovation."
        />
        <div className='mt-20'>
            {projects.map((project, i) => (
                <div className={`${i%2 == 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col w-full object-contain mb-10 bg-white`} key={i}>
                    <div className='md:flex-1 bg-white dark:bg-gray-900'>
                        <img className='w-full rounded-xl dark:opacity-75' src={project.image} alt='' />
                    </div>
                    <div className='md:flex-1 flex flex-col justify-center p-5 lg:py-0 lg:px-10 bg-white dark:bg-gray-900'>
                        <h3 className='text-2xl text-gray-800 dark:text-gray-200'>{project.title}</h3>
                        <p className='text-lg text-gray-600 dark:text-gray-300 mt-5'>{project.description}</p>
                        <div className='mt-5 flex gap-5'>
                            {project.techStack.map((techStack, j) => (
                                <span className='text-base font-semibold text-gray-800 dark:text-gray-200' key={j}>
                                    {techStack}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Portfolio