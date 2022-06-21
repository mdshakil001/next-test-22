const ContactBanner = () => {
  return (
    <div className="flex flex-col h-full"
        style={ { 
            backgroundImage: `url('/assets/contact/callagent.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'end',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
        } }
        > 
        <div className='flex flex-col mx-16 md:mx-44 2xl:mx-80 mt-4 max-w-screen-xl'>
            <div className='mt-6 lg:mt-12 z-40 ml-0 lg:ml-12 xl:ml-36'>
                <p className='font-title text-xl md:text-2xl lg:text-3xl text-primary-100'> 
                    Contact Us
                </p>
                <div className="w-36 md:w-64 lg:w-72 mt-3 -mb-20">
                    <p className='font-general text-xs md:text-lg text-typo mb-2 italic'>
                        Drop us a note below if you have any questions or feedback, and we promise to get back to you within two (2) business days.
                    </p>
                </div>
            </div>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#AED5E7" fillOpacity="1" d="M0,0L80,48C160,96,320,192,480,245.3C640,299,800,309,960,282.7C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}

export default ContactBanner