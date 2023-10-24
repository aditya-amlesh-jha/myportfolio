const Experience = () => {

    const jobs = [
        {
            title: "Reliability & Production Engineer - Morgan Stanley",
            desc: "Add Description",
            date: "Sep, 2022 - Present",
            type: "FTC",
            location: "Mumbai",
            href: "javascript:void(0)"
        },
        {
            title: "Full-Stack Developer - TalentDesk",
            desc: "Add Description",
            date: "Aug, 2023 - Sep, 2023",
            type: "Full-time",
            location: "Remote",
            href: "javascript:void(0)"
        },
        {
            title: "Junior Support Associate - Wiley",
            desc: "Add Description",
            date: "May, 2023 - Aug, 2023",
            type: "FTE",
            location: "Remote",
            href: "javascript:void(0)"
        },
    ]

    return (
        <section className="bg-gray-900 min-h-screen p-5">
            <ul className="space-y-6 max-w-screen-lg mx-auto">
                {
                    jobs.map((item, idx) => (
                        <li key={idx} className="p-5 bg-gray-700 rounded-md shadow-sm">
                            <a href={item.href}>
                                <div>
                                    <div className="justify-between sm:flex">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-medium text-gray-50">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 mt-2 pr-2">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                                            <span className="flex items-center text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {item.date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4 items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                                        <span className="flex items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                                            </svg>
                                            {item.type}
                                        </span>
                                        <span className="flex items-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {item.location}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

 
export default Experience;