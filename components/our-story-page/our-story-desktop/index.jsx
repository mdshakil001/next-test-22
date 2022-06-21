// import Values from '../values'

const OurStoryDesktop = ({values}) => {
  return (
    <div className='flex flex-col my-12 max-w-screen-xl mx-auto justify-end'>
        <div>
            <p className='mx-6 2xl:mx-0 mb-12 font-title text-4xl text-primary-100'> 
                Our Story
            </p>
        </div>
        <div className='flex flex-row mb-24 shadow-lg xl:rounded-r-[5rem]'>
            <div className='flex flex-col w-full -ml-96 pl-36 lg:pl-48 pr-14 py-12 border border-secondary-100 bg-secondary-10 place-content-center'>
                <p className='mx-6 2xl:mx-0 pl-48 lg:-mr-6 font-general text-typo text-justify text-xl leading-relaxed xl:leading-loose'>
                    We are My Healthcare Collective (MyHC). We got together with the main aim of helping you navigate the Singapore private healthcare terrain with ease. To do so, we believe you need the following pieces. Firstly, you need to empower yourself with information to build up your medical and healthcare literacy. We want to help you do that. So on our platform you will find articles and videos on a vast array of medical conditions and procedures so that you can help inform and educate yourself. Secondly, should you or your loved ones have a medical condition, we want to be able to help you find the right doctor to see. 
                </p>
            </div>

            <div className='w-1/2 xl:rounded-r-[5rem]' 
                style={ { 
                    backgroundImage: `url('/assets/our-story/pic1.avif')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    maxWidth: '50vw',
                    position: 'relative',
                } }
            >
            </div>
        </div>
        <div className='flex flex-row mb-12 -ml-96'>
            <div className="flex w-4/5 h-96 rounded-r-[5rem] shadow-lg"
                style={ { 
                    backgroundImage: `url('/assets/our-story/pic2.avif')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                } }
            >
            </div>
            <div className='flex flex-col w-7/12 pl-14 py-12 place-content-center pr-6 2xl:pr-0'>
                <p className='font-general text-justify text-typo text-xl leading-relaxed xl:leading-loose'>
                    To this end, MyHC will comprise of a panel of experienced medical specialists to help you. MyHC will also have a team of doctors to help you figure out the right  specialist to see for your medical condition should you require this help. This team of doctors will also help you navigate healthcare screening for you and your loved ones.
                </p>
            </div>
        </div>
        {/* <Values values={values} /> */}
    </div>
  )
}

export default OurStoryDesktop