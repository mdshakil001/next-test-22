import Layout from '../components/layout/Layout';
import Members from '../components/the-team-page';

const TeamMembers = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO / Founder',
        image: '/assets/the-team/johndoe.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkedIn: 'https://www.linkedin.com/in/john-doe-1a9b711a0/',
        twitter: 'https://twitter.com/john_doe'
    },
    {
        id: 2,
        name: 'Jane Doe',
        title: 'COO',
        image: '/assets/the-team/janedoe1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkedIn: 'https://www.linkedin.com/in/jane-doe-1a9b711a0/',
        twitter: 'https://twitter.com/jane_doe'
    },
    {
        id: 3,
        name: 'John Doe',
        title: 'CFO',
        image: '/assets/the-team/johndoe.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkedIn: 'https://www.linkedin.com/in/john-doe-1a9b711a0/',
        twitter: 'https://twitter.com/john_doe'
    },
    {
        id: 4,
        name: 'Jane Doe',
        title: 'CMO',
        image: '/assets/the-team/janedoe2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkedIn: 'https://www.linkedin.com/in/jane-doe-1a9b711a0/',
        twitter: 'https://twitter.com/jane_doe'
    },
    {
        id: 5,
        name: 'John Doe',
        title: 'CTO',
        image: '/assets/the-team/johndoe.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkedIn: 'https://www.linkedin.com/in/john-doe-1a9b711a0/',
        twitter: 'https://twitter.com/john_doe'
    },
    {
        id: 6,
        name: 'Jane Doe',
        title: 'CMO',
        image: '/assets/the-team/janedoe1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        linkedIn: 'https://www.linkedin.com/in/jane-doe-1a9b711a0/',
        twitter: 'https://twitter.com/jane_doe'
    }
]

const Team = () => {
  return (
    <Layout>
        <div className="flex flex-row h-48 md:h-72 lg:h-[28rem] bg-center bg-no-repeat bg-cover shadow"
            style={ { 
                backgroundImage: `url('/assets/the-team/doctorteam.avif')`,
            } }
        >
        </div>
        <div className='flex flex-col my-10 max-w-screen-xl mx-auto'>
            <p className='mx-6 2xl:mx-0 mb-3 font-title text-2xl lg:text-4xl text-primary-100'> 
                Our Team
            </p>
            <p className='mx-6 2xl:mx-0 mb-6 lg:mb-12 font-general italic text-md text-typo text-md'>
                MyHC team is made up of a diverse range of people who are passionate about what they do. 
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-12 mx-6 2xl:mx-0'>
            {TeamMembers.map((member, idx) => (
                <Members
                    key={idx}
                    member={member}
                />
            ))}
            </div>
        </div>
    </Layout>
  )
}

export default Team