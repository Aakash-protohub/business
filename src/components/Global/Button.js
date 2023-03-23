import Arrow from '../../assets/svg/arrow-right.svg'
import backArrow from '../../assets/svg/backArrow.svg'

const Button = ({ text, type, onClick, style, icon, src, iconStyle,left, stylecustom }) => {
    if (type === 'primary' || type === undefined || type === '') {
        return (
            <button onClick={onClick} className={`px-5 sm:px-8 py-2 flex items-center justify-center gap-2 bg-blue-700 rounded-[32px] cursor-pointer hover:text-blue-700 transition-all focus:ring-2 ring-blue-100 ${stylecustom}`} style={style}>
             
                <p className="text-base text-center leading-6 m-0">{text}</p>
                {
                    icon && (
                        <img style={iconStyle} src={src ?? Arrow} alt="icon-btn" />
                    )
                }
            </button>
        )
    }
    if (type === 'outline') {
        return (
            <button onClick={onClick} className={`flex items-center justify-center gap-2 text-[#0bbfd6] border-2 border-[#76b1b4] px-8 py-2 rounded-[8px] cursor-pointer hover:border-[#bdcaf4] hover:text-blue-700 transition-all ${stylecustom}`} style={style}>
                <p className="text-base text-center leading-6 m-0">{text}</p>
                {
                    icon && (
                        <img style={iconStyle} src={src ?? Arrow} alt="icon-btn" />
                    )
                }
            </button>
        )
    }
    if (type === 'secondary') {
        return (
            <button onClick={onClick} className={`px-8 py-2 flex items-center justify-center gap-2  bg-blue-700 rounded-[8px] cursor-pointer hover:bg-blue-800 hover:text-blue-700 transition-all focus:ring-2 ring-blue-100 ${stylecustom}`} style={style}>
                <p className="text-base text-center leading-6 m-0">{text}</p>
                {
                    icon && (
                        <img style={iconStyle} src={src ?? Arrow} alt="icon-btn" />
                    )
                }
            </button>
        )
    }
    if (type === 'back') {
        return (
            <button onClick={onClick} className="px-3 py-2 flex items-center gap-2 cursor-pointer" style={style}>
                <p className="text-base text-center leading-6 m-0">{text}</p>
                {
                    icon && (
                        <img style={iconStyle} src={src ?? backArrow} alt="icon-btn" />
                    )
                }
            </button>
        )
    }
}

export default Button;