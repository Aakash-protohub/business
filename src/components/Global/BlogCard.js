
//componets import 
import { Link } from 'react-router-dom';
import Button from './Button';

let color = [{ bg: "bg-blue-300", text: "text-blue-700" }, { bg: "bg-purple-300", text: "text-purple-700" }];

const Tag = ({ name, color }) => {
    return (<h1 className={`${color.bg} py-[5px] px-5 rounded-full ${color.text}`}>{name}</h1>)
}

const BlogCard = ({ data }) => {
    return (
        <div className="flex flex-col gap-4 p-3 sm:p-7 border-[6px] border-blue-700 rounded-xl ">
            <img src={data?.thumbnail} alt="blog-icon" className="rounded h-[280px] object-cover" />
            <div className="flex gap-2 flex-row">
                {
                    data?.tags?.map((itm, i) => {
                        return (<Tag key={i} name={itm} color={color[i]} />)
                    })
                }
            </div>
            <h2 className="font-[600] text-[14px] text-blue-700 ">{data?.subtitle}</h2>
            <h1 className="font-[600] text-[20px] text-white ">{data?.title}</h1>
            <p className="text-[14px] text-[#667085]">{data?.description.slice(0,200)+'...'}</p>
            <Link to={`/proto-blog/`}>
            <Button text={"Read More"} style={{ color: "#fff", width: "50%" }} />
            </Link>
        </div>
    )
}

export default BlogCard;