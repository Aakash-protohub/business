// components import 
import SectionHeader from "../Global/SectionHeader";
import CustomerReviewCard from "../Global/CustomerReviewCard";

const CustomerReview = ({ style, data, heading, subheading }) => {
    return (
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center justify-between" style={style}>
            <div className="flex flex-col gap-3 w-full">
                <SectionHeader heading={heading} subheading={subheading} />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {
                        data?.map((itm, i) => {
                            return <CustomerReviewCard data={itm} key={i} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomerReview;