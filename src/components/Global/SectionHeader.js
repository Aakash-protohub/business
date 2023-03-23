const SectionHeader = ({ heading, subheading }) => {
    return (
        <div className="flex flex-col gap-4">
            {
                subheading && (
                    <h2 className={`font-bold text-left text-white inline m-0 text-[17.6px] leading-[26.399999618530273px]`} >
                        {subheading}
                    </h2>
                )
            }
            {
                heading && (
                    <h1 className={`font-semibold text-left text-white inline m-0 text-[30px] sm:text-[42px] leading-[normal]`}>
                        {heading}
                    </h1>
                )
            }
        </div>
    )
}

export default SectionHeader;