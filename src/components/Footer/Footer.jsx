const Footer = () => {

    const links = [
        { title: "LeetCode", link: "https://leetcode.com/aditya-jha/" },
        { title: "GitHub", link: "https://github.com/aditya-amlesh-jha" },
        { title: "HackerRank", link: "https://www.hackerrank.com/profile/adi4ant" },
        { title: "LinkedIn", link: "https://www.linkedin.com/in/aditya-amlesh-jha/" }
    ]

    return (

        <footer class="bg-black">
            <div class="w-full mx-auto max-w-screen-xl p-4">
                <ul class="flex items-center justify-center">
                    {
                        links.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <a href={item.link} class="mr-4 text-gray-100 hover:text-indigo-600 md:mr-6 ">{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>

    );
}

export default Footer;