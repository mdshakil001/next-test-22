import Image from "next/image"

const Members = ({member}) => {
  return (
    <div className="card bg-base-100 flex flex-col justify-center items-center border border-secondary-100 rounded-xl shadow-md">
        <figure>
            <Image 
                src={member.image} 
                alt={member.name}
                responsive
                width={600} 
                height={600} 
                className='rounded-t-xl border' 
            />
        </figure>
        <div className="card-body flex flex-col">
            <div>
                <p className='text-typo font-title text-center text-2xl'>{member.name}</p>
                <p className='text-secondary-100 text-center font-semibold font-general text-xl'>{member.title}</p>
            </div>
        <div className='flex flex-row justify-center items-center gap-x-10 mt-2'>
            <a href={member.linkedIn} target='_blank' rel='noopener noreferrer'>
                <Image 
                    src='/assets/the-team/linkedin.png'
                    alt={member.name} 
                    width={34}
                    height={34}
                />
            </a>
            <a href={member.twitter} target='_blank' rel='noopener noreferrer'>
                <Image 
                    src='/assets/the-team/twitter.png'
                    alt={member.name} 
                    width={38}
                    height={38}
                />
            </a>
            </div>
        </div>
    </div>
  )
}

export default Members