const Values = ({values}) => {
  return (
    <div>
        <p className='mx-6 2xl:mx-0 my-2 font-title text-xl lg:text-3xl text-secondary-100'> 
            Our Values
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-2 mb-14 mx-6 2xl:mx-0'>
            {values.map((value, idx) => (
            <div className='flex flex-col w-full' key={idx}>
                <p className='font-title text-lg lg:text-xl text-primary-50 my-4'>
                    {value.title}
                </p>
                <p className='font-general text-typo text-md'>
                    {value.description}
                </p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Values