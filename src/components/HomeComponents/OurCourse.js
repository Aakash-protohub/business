// components import 
import SectionHeader from "../Global/SectionHeader";
import CourseCard from '../Global/CourseCard';
import { useNavigate } from "react-router";

const OurCourse = ({ style, data, heading, subheading }) => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center justify-between" style={style}>
            <div className="flex flex-col gap-3 w-full">
                <SectionHeader heading={heading} subheading={subheading} />
                <br />
                <div className="grid grid-rows-3 md:grid-rows-1 md:grid-flow-col md:grid-cols-5 gap-8 md:gap-4">
                    <CourseCard
                        styleCustom={'row-span-3 col-span-2'}
                        layout={'2tile'}
                        key={1}
                        data={data[0]}
                        enrollHandler={() => { navigate(`/courses/${data[0]._id}`) }}
                    />
                    <div className="row-span-3 col-span-3 flex flex-col gap-8 w-full">
                        {
                            data?.map((course, i) => {
                                return (i > 0 && i < 3) && (
                                    <CourseCard
                                        styleCustom={'row-span-2 col-span-2'}
                                        layout={'linear'}
                                        key={i}
                                        data={course}
                                        enrollHandler={() => { navigate(`/courses/${course._id}`) }}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCourse;