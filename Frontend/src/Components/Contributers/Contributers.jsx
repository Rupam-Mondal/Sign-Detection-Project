import Marquee from 'react-fast-marquee'
import './Contributer.css'
import sandipanSeth from '../../assets/Images/sandipan.jpg'

function Contributers(){
    return (
        <>
            <div className="bg-black w-full h-[520px] flex-col">
                <div className="w-full h-[60px]  flex justify-center items-center text-4xl font-bold">
                    <h1>Contributers</h1>
                </div>
                

                <div className='h-[430px] w-full px-32 box-border flex justify-center'>

                    <Marquee>
                        {/* Rupam card */}
                        <div className='bg-gradient-to-r from-gray-800 to-gray-600 h-96 w-64 p-4 rounded-lg shadow-lg mr-4'>
                            <div className='h-2/5 mb-4 flex items-center justify-center'>
                                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFFrpVTwfZkcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683200192069?e=1730937600&v=beta&t=Qc1X00prHcxDCv3SpVQCJ1AxROr1uAUHv-PY6hYUJyM" alt="Profile" className='w-32 h-32 object-cover rounded-full border-4 border-blue-500' />
                            </div>
                            <div className='h-2/5 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-white text-2xl font-bold mb-2'>Rupam Mondal</h2>
                                    <p className='text-gray-200 text-sm leading-relaxed'>This is a brief description of the profile. It provides some information about the individual or the entity represented by this card.</p>
                                </div>
                                <div className='mt-2 h-1/5 flex space-x-4'>
                                    <a href="https://github.com/Rupam-Mondal" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>GitHub</a>
                                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>LinkedIn</a>
                                </div>
                            </div>
                        </div>

                        {/* Samanway card */}
                        <div className='bg-gradient-to-r from-gray-800 to-gray-600 h-96 w-64 p-4 rounded-lg shadow-lg mr-4'>
                            <div className='h-2/5 mb-4 flex items-center justify-center'>
                                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFosjnwljLV5A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695619142698?e=1730937600&v=beta&t=dJBCgcUryPhvfSOOSDf96_Ke0xL0QIarQ4Qj75AEAIY" alt="Profile" className='w-32 h-32 object-cover rounded-full border-4 border-blue-500' />
                            </div>
                            <div className='h-2/5 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-white text-2xl font-bold mb-2'>Samanway Mandal</h2>
                                    <p className='text-gray-200 text-sm leading-relaxed'>This is a brief description of the profile. It provides some information about the individual or the entity represented by this card.</p>
                                </div>
                                <div className='mt-2 h-1/5 flex space-x-4'>
                                    <a href="https://github.com/Rupam-Mondal" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>GitHub</a>
                                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>LinkedIn</a>
                                </div>
                            </div>
                        </div>


                        <div className='bg-gradient-to-r from-gray-800 to-gray-600 h-96 w-64 p-4 rounded-lg shadow-lg mr-4'>
                            <div className='h-2/5 mb-4 flex items-center justify-center'>
                                <img src={sandipanSeth} alt="Profile" className='w-32 h-32 object-cover rounded-full border-4 border-blue-500' />
                            </div>
                            <div className='h-2/5 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-white text-2xl font-bold mb-2'>Sandipan Seth</h2>
                                    <p className='text-gray-200 text-sm leading-relaxed'>This is a brief description of the profile. It provides some information about the individual or the entity represented by this card.</p>
                                </div>
                                <div className='mt-2 h-1/5 flex space-x-4'>
                                    <a href="https://github.com/Rupam-Mondal" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>GitHub</a>
                                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>LinkedIn</a>
                                </div>
                            </div>
                        </div>


                        <div className='bg-gradient-to-r from-gray-800 to-gray-600 h-96 w-64 p-4 rounded-lg shadow-lg mr-4'>
                            <div className='h-2/5 mb-4 flex items-center justify-center'>
                                <img src="https://media.licdn.com/dms/image/v2/D5603AQGFLkuMMECJLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1693937174471?e=1730937600&v=beta&t=Apt5ek2flhfUBWyqn5gusvuIgyG4OUB8YncGqBYvXk0" alt="Profile" className='w-32 h-32 object-cover rounded-full border-4 border-blue-500' />
                            </div>
                            <div className='h-2/5 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-white text-2xl font-bold mb-2'>Rima Kar</h2>
                                    <p className='text-gray-200 text-sm leading-relaxed'>This is a brief description of the profile. It provides some information about the individual or the entity represented by this card.</p>
                                </div>
                                <div className='mt-2 h-1/5 flex space-x-4'>
                                    <a href="https://github.com/Rupam-Mondal" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>GitHub</a>
                                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>LinkedIn</a>
                                </div>
                            </div>
                        </div>


                        <div className='bg-gradient-to-r from-gray-800 to-gray-600 h-96 w-64 p-4 rounded-lg shadow-lg mr-4'>
                            <div className='h-2/5 mb-4 flex items-center justify-center'>
                                <img src="https://media.licdn.com/dms/image/v2/D5603AQFb35rtHVMWog/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1695655868219?e=1730937600&v=beta&t=qp-PPfPb7nMWhvp3SKJUrBxrgJRXHXcqaqGuF4Tdehw" alt="Profile" className='w-32 h-32 object-cover rounded-full border-4 border-blue-500' />
                            </div>
                            <div className='h-2/5 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-white text-2xl font-bold mb-2'>Soumavo Bhadury</h2>
                                    <p className='text-gray-200 text-sm leading-relaxed'>This is a brief description of the profile. It provides some information about the individual or the entity represented by this card.</p>
                                </div>
                                <div className='mt-2 h-1/5 flex space-x-4'>
                                    <a href="https://github.com/Rupam-Mondal" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>GitHub</a>
                                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>LinkedIn</a>
                                </div>
                            </div>
                        </div>


                        <div className='bg-gradient-to-r from-gray-800 to-gray-600 h-96 w-64 p-4 rounded-lg shadow-lg mr-4'>
                            <div className='h-2/5 mb-4 flex items-center justify-center'>
                                <img src="https://media.licdn.com/dms/image/v2/D5603AQGhL_SD91bf9w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1689873647376?e=1730937600&v=beta&t=ZEe-wZHq8klpQ7gmmwf7jDCpNLNwqz1eFyo7rnQeb6Q" alt="Profile" className='w-32 h-32 object-cover rounded-full border-4 border-blue-500' />
                            </div>
                            <div className='h-2/5 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-white text-2xl font-bold mb-2'>Debdeep Guha</h2>
                                    <p className='text-gray-200 text-sm leading-relaxed'>This is a brief description of the profile. It provides some information about the individual or the entity represented by this card.</p>
                                </div>
                                <div className='mt-2 h-1/5 flex space-x-4'>
                                    <a href="https://github.com/Rupam-Mondal" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>GitHub</a>
                                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 text-sm font-medium'>LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </Marquee>




                </div>

                    

            </div>
        </>
    )
}

export default Contributers