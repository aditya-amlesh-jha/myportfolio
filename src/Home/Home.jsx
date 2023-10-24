const Home = () => {

    document.title="Home - Aditya Jha";

    const plans = [
        {
            name: "Basic plan",
            price: 12,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",

            ],
        },
        {
            name: "Startup",
            price: 35,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Enterprise",
            price: 60,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
    ];

    return (
        <>

            <div className="overflow-y-scroll">
                <section className="bg-gray-900 min-h-screen">
                    <div className="mx-auto max-w-screen-xl pt-24 pb-4 px-4 sm:px-8">
                        <div className="text-center space-y-4">

                            <img class="rounded w-36 h-36 mx-auto rounded-full" src="https://assets.leetcode.com/users/avatars/avatar_1681128531.png" alt="Extra large avatar" />

                            <h1 className="text-gray-50 font-bold text-4xl md:text-5xl">
                                Hi, I am
                                <span className="text-indigo-600"> Aditya Jha</span>
                            </h1>
                            <p className="text-indigo-200">Site Reilability Engineer</p>
                            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                                Greetings! I'm a dedicated Site Reliability Engineer (SRE) on a mission to transform intricate systems into unstoppable, high-performance powerhouses. With a rock-solid foundation in both software development and IT operations, I'm the dynamic bridge that connects the realms of development and production, ensuring the seamless delivery of bulletproof services.
                            </p>
                        </div>
                        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                            <a href="javascript:void(0)" className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto">
                                Get started
                            </a>
                            <a href="javascript:void(0)" className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto">
                                Try it out
                            </a>
                        </div>
                    </div>


                </section>
                <section className="bg-gray-900 min-h-screen">
                    <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                        <div className='relative max-w-xl mx-auto sm:text-center'>
                            <h3 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                                Pricing for all sizes
                            </h3>
                            <div className='mt-3 max-w-xl'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                                </p>
                            </div>
                        </div>
                        <div className='mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                            {
                                plans.map((item, idx) => (
                                    <div key={idx} className='relative flex-1 flex items-stretch flex-col p-8 rounded-xl border-2'>
                                        <div>
                                            <span className='text-indigo-600 font-medium'>
                                                {item.name}
                                            </span>
                                            <div className='mt-4 text-gray-800 text-3xl font-semibold'>
                                                ${item.price} <span className="text-xl text-gray-600 font-normal">/mo</span>
                                            </div>
                                        </div>
                                        <ul className='py-8 space-y-3'>
                                            {
                                                item.features.map((featureItem, idx) => (
                                                    <li key={idx} className='flex items-center gap-5'>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='h-5 w-5 text-indigo-600'
                                                            viewBox='0 0 20 20'
                                                            fill='currentColor'>
                                                            <path
                                                                fill-rule='evenodd'
                                                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                                clip-rule='evenodd'></path>
                                                        </svg>
                                                        {featureItem}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="flex-1 flex items-end">
                                            <button className='px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700'>
                                                Get Started
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default Home;