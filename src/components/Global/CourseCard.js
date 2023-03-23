
// components import
import CartButton from './CartButton';
import Button from './Button';

export default function CourseCard({ layout, styleCustom, data, cartHandler, enrollHandler }) {
    if (layout === '2tile' || layout === '' || layout === undefined) {
        return (
            <div
                className={`gap-8 inline-flex flex-col items-start h-[538px] ${styleCustom}`}
            >
                <div
                    style={{ background: `url(${data?.thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                    className={`flex-1 w-full`}
                />
                <div className={`gap-6 flex flex-col items-start `}>
                    <div className="gap-3 flex flex-col items-start text-left">
                        <div
                            className={`gap-2.5 flex items-start text-white font-semibold`}
                        >
                            <div className="">
                                <div className="flex items-center w-full gap-[184px]">
                                    <p className="text-2xl leading-8 m-0 ">
                                        {data?.name}
                                    </p>
                                    <p className="text-2xl leading-8 m-0 w-[62px]">${data?.amount}</p>
                                </div>
                            </div>
                        </div>
                        <p
                            className={`text-base font-medium text-white m-0 w-[328px] leading-[normal]`}
                        >
                            Course Duration : {data?.duration} Days
                        </p>
                        <p
                            className={`text-base font-normal leading-6 m-0 text-[rgba(102,112,133,1)]`}
                        >
                            {data?.description.length > 120 ? data?.description?.slice(0, 120) + '...' : data?.description}
                        </p>
                    </div>
                    <div
                        className={`gap-3 flex items-center text-white text-center font-semibold font-['Poppins'] w-full `}
                    >
                        <CartButton style={{ width: "20%" }} onClick={cartHandler} />
                        <Button onClick={enrollHandler} text={"ENROLL NOW"} style={{ width: "70%" }} icon={true} />
                    </div>
                </div>
            </div>
        );
    }
    if (layout === '1tile') {
        return (
            <div
                className={`gap-8 inline-flex flex-col items-start h-[538px] ${styleCustom}`}
            >
                <div
                    style={{ background: `url(${data?.thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                    className={`flex-1 w-full`}
                />
                <div className={`gap-6 flex flex-col items-start `}>
                    <div className="gap-3 flex flex-col items-start text-left">
                        <div
                            className={`gap-2.5 flex items-start text-white font-semibold`}
                        >
                            <div className="w-full">
                                <div className="flex items-center w-full gap-20">
                                    <p className="text-2xl leading-8 m-0 w-[266px]">
                                        {data?.name}
                                    </p>
                                    <p className="text-2xl leading-8 m-0 w-[62px]">${data?.amount}</p>
                                </div>
                            </div>
                        </div>
                        <p
                            className={`text-base font-medium text-white m-0 w-[328px] font-['Poppins'] leading-[normal]`}
                        >
                            Course Duration : {data?.duration} Days
                        </p>
                        <p
                            className={`text-base font-normal leading-6 m-0 text-[rgba(102,112,133,1)]`}
                        >
                            {data?.description.length > 198 ? data?.description?.slice(0, 198) + '...' : data?.description}
                        </p>
                    </div>
                    <div
                        className={`gap-3 flex items-center text-white text-center font-semibold font-['Poppins'] w-full `}
                    >
                        <CartButton style={{ width: "20%" }} onClick={cartHandler} />
                        <Button onClick={enrollHandler} text={"ENROLL NOW"} style={{ width: "70%" }} icon={true} stylecustom="text-white btnGlow" />
                    </div>
                </div>
            </div>
        );
    }
    if (layout === 'linear') {
        return (
            <div
                className={`flex flex-col sm:flex-row gap-4 h-[450px] sm:h-[253px] ${styleCustom}`}
            >
                <div style={{ background: `url(${data?.thumbnail})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                    className={`flex-1 `} />
                <div className="gap-8 flex flex-col items-start w-[67%]">
                    <div className="gap-3 flex flex-col items-start text-left">
                        <div
                            className={`gap-2.5 flex items-start text-white font-semibold`}
                        >
                            <div className="w-full">
                                <div className="flex items-center w-full gap-[184px]">
                                    <p className="text-2xl leading-8 m-0 w-[266px]">
                                        {data?.name}
                                    </p>
                                    <p className="text-2xl leading-8 m-0 w-[62px]">${data?.amount}</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="w-6 pt-1 flex flex-col items-start">
                                    {/* <ArrowUpRight /> */}
                                </div>
                            </div>
                        </div>
                        <p
                            className={`text-base font-medium text-white m-0 w-[328px] font-['Poppins'] leading-[normal]`}
                        >
                            Course Duration : {data?.duration} Days
                        </p>
                        <p
                            className={`text-base font-normal leading-6 m-0 w-full text-[rgba(102,112,133,1)]`}
                        >
                            {data?.description.length > 190 ? data?.description?.slice(0, 190) + '...' : data?.description}
                        </p>
                    </div>
                    <div
                        className={`gap-3 flex items-center text-white text-center font-semibold font-['Poppins'] w-full`}
                    >
                        <CartButton style={{ width: "20%" }} onClick={cartHandler} />
                        <Button onClick={enrollHandler} text={"ENROLL NOW"} style={{ width: "70%" }} icon={true} />
                    </div>
                </div>
            </div>
        )
    }
}
