export default function Mission({  image,heading,description }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 sm:w-5/6 w-full mb-10 md:mb-0">
                    <img className="object-cover object-center rounded w-[464px] h-[396.66px]" alt="hero" src={image} />
                </div>
                <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className="gap-4 flex flex-col items-center md:items-start ">
                        <div className="gap-1 text-white font-semibold flex">
                            <p className="m-0 w-[314px] text-2xl text-center md:text-[52px] leading-[normal] ">
                                {heading}
                            </p>
                        </div>
                        <p className="text-sm font-normal leading-6 m-0 text-[rgba(102,112,133,1)]">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}