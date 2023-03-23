const AboutCourse = ({heading,questions,answers}) => {
  return (
    <div className="container mx-auto flex px-5 md:flex-col flex-col text-white gap-y-9">
                <div className="text-center font-semibold text-4xl">{heading}</div>
                <div>
                    <div className="font-bold text-lg my-2">{questions[0]}</div>
                    <div className="text-gray-500">{answers[0]}</div>
                </div>
                <div>
                    <div className="font-bold text-lg my-2">{questions[1]}</div>
                    <div className="text-gray-500">{answers[1]}
                    </div>
                </div>
            </div>
  )
}

export default AboutCourse;