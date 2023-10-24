const Home = () => {

    document.title="Home - Aditya Jha";

    return (
        <>
                <section className="bg-gray-900 min-h-screen">
                    <div className="mx-auto  pt-24 pb-4 px-4 sm:px-8">
                        <div className="text-center space-y-4">

                            <img class="rounded w-36 h-36 mx-auto rounded-full" src="https://www.svgrepo.com/show/65453/avatar.svg" alt="Extra large avatar" />

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
        </>
    );
}

export default Home;