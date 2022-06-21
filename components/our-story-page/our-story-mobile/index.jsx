// import Values from '../values'

const OurStoryMobile = ({values}) => {
  return (
    <div className='flex flex-col my-6'>
        <div className="flex flex-row h-44 mb-6 shadow-lg"
            style={ { 
                backgroundImage: `url('/assets/our-story/pic1.avif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } }
        ></div>
        <p className='mx-6 mb-6 font-title text-xl lg:text-3xl text-primary-100'> 
            Our Story
        </p>
        <div className='flex p-6 bg-secondary-10 mb-8 border border-secondary-100'>
            <p className='font-general text-typo text-md leading-normal'>
                We are My Healthcare Collective (MyHC). We got together with the main aim of helping you navigate the Singapore private healthcare terrain with ease. To do so, we believe you need the following pieces. Firstly, you need to empower yourself with information to build up your medical and healthcare literacy. We want to help you do that. So on our platform you will find articles and videos on a vast array of medical conditions and procedures so that you can help inform and educate yourself. Secondly, should you or your loved ones have a medical condition, we want to be able to help you find the right doctor to see.
            </p>
        </div>
        <div 
            id='slide-in-right'
            className="flex w-4/5 h-44 rounded-r-[3rem]"
            style={ { 
                backgroundImage: `url('/assets/our-story/pic2.avif')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            } }
        >
        </div>
        <div className='flex flex-col p-6 place-content-center'>
            <p className='font-general text-typo text-md leading-normal'>
                To this end, MyHC will comprise of a panel of experienced medical specialists to help you. MyHC will also have a team of doctors to help you figure out the right  specialist to see for your medical condition should you require this help. This team of doctors will also help you navigate healthcare screening for you and your loved ones.
            </p>
        </div>
        {/* <Values values={values} /> */}
    </div>
  )
}

export default OurStoryMobile