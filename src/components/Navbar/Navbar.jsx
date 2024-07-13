import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Experience", path: "/experience" },
        { title: "Projects", path: "/projects" },
    ]

    return (
        <nav className="bg-black w-full border-b md:border-0 md:static">
            <div className="items-center px-4 mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <p className='text-white' width={120} height={50}>
                            Aditya Jha
                        </p>
                    </Link>
                    <div className="md:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-50 hover:text-indigo-600">
                                        <Link to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        <li className="text-gray-50 hover:text-indigo-600">
                            <a href="https://adi4ant.hackerresume.io/bcdb2ae0-7f7e-48f1-ab3b-1c25ed48ff50"  target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    <Link to="/authentication" className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                        Sign Up
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;