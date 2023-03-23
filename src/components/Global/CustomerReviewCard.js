const CustomerReviewCard = ({ data }) => {
    return (<div className="border-[2px] border-blue-700 border-b-[7px] rounded-[10px] p-8 flex flex-col gap-6">
        <p className="text-[#777777] italic">{data?.review}</p>
        <div className="flex flex-row gap-6 items-center">
            <img src={data?.img} alt="review-profile-pic" className="rounded-full h-[65px] w-[65px] object-cover" />
            <div className="flex flex-col">
                <h1 className="text-[24px] text-white font-bold">{data?.name}</h1>
                <p className="text-[#777777]">{data?.profession}</p>
            </div>
        </div>
    </div>)
}

export default CustomerReviewCard;