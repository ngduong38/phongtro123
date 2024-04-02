import React, { memo, useState } from 'react'
import icons from '../ultils/icons'
import { useNavigate, Link } from 'react-router-dom'
import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString'



const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons

const Item = ({ images, user, title, star, description, attributes, address, id }) => {
    console.log(typeof(description));
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    const handleStar = (star) => {
        let stars = []
        for (let i = 1; i <= +star; i++) stars.push(<GrStar className='star-item' size={18} color='yellow' />)
        return stars

    }
    return (
        <div className='w-full flex border-t border-orange-600 py-4'>
            <div
                to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
                className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
            >
                <img src={"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/27/250a4a5b-ea3e-4c2f-ab8a-239056d53f2b_1711514226.png"} alt="preview" className='w-[200px] h-[120px] object-cover'/>
                <img src={"https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/27/13fb45d4-c52d-4275-b932-6929c378ac12_1711514224.png"} alt="preview" className='w-[200px] h-[120px] object-cover'/> 
                
                <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4'>{`2 ảnh`}</span>
                <span
                    className='text-white absolute right-5 bottom-1'
                    onMouseEnter={() => setIsHoverHeart(true)}
                    onMouseLeave={() => setIsHoverHeart(false)}
                >
                    {isHoverHeart ? <RiHeartFill size={26} color='red' /> : <RiHeartLine size={26} />}
                </span>
            </div>
            <div className='w-3/5'>
                <div className='flex justify-between gap-4 w-full'>
                    <div className='text-red-600 font-medium'>
                        {handleStar(+star).length > 0 && handleStar(+star).map((star, number) => {
                            return (
                                <span key={number}>{star}</span>
                            )
                        })}
                        {title}
                    </div>
                    <div className='w-[10%] flex justify-end'>
                        <BsBookmarkStarFill size={24} color='orange' />
                    </div>
                </div>
                <div className='my-2 flex items-center justify-between gap-2'>
                    <span className='font-bold flex-3 text-green-600  whitespace-nowrap overflow-hidden text-ellipsis'>{attributes?.price}</span>
                    <span className='flex-1'>{attributes?.acreage}</span>
                    <span className='flex-3 whitespace-nowrap overflow-hidden text-ellipsis'>
                        {`${address.split(',')[address.split(',').length - 2]}${address.split(',')[address.split(',').length - 1]}`}
                    </span>
                </div>
                <p className='text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden'>
                    {description}
                </p>
                <div className='flex items-center my-5 justify-between'>
                    <div className=' flex items-center'>
                        <img src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" alt="avatar" className='w-[30px] h-[30px] object-cover rounded-full' />
                        <p>{user?.name}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <button
                            type='button'
                            className='bg-blue-700 text-white p-1 rounded-md'
                        >
                            {`Gọi ${user?.phone}`}
                        </button>
                        <button
                            type='button'
                            className='text-blue-700 px-1 rounded-md border border-blue-700'
                        >
                            Nhắn zalo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Item)