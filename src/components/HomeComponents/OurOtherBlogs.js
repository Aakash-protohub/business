// components import 
import SectionHeader from "../Global/SectionHeader";
import BlogCard from "../Global/BlogCard";

const OurOtherBlog = ({ style, data, heading, subheading }) => {
    return (
        <div className="container mx-auto flex sm:px-5 md:flex-row flex-col items-center justify-between" style={style}>
            <div className="flex flex-col gap-3 w-full">
                <SectionHeader heading={heading} subheading={subheading} />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {
                        data?.map((itm, i) => {
                            return i < 3 && <BlogCard data={itm} key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurOtherBlog;