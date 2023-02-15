import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import './modal.css'

const modal = () => {
  return (
    <div className='modal--body'>
        <div className='modal--headings'>
            <div className='heading--body top--title'>
                <div>
                    <u>About us</u>
                </div>
                <div className='modal--icons'>
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
            <div className='heading--body'>
                <u>Customers</u>
            </div>
            <div className='heading--body bottom--title'>
                <u>Career</u>
                <div className='modal--icons'>
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
        </div>
        <div className='modal-subheadings'>
        </div> 
    </div>
  )
}

export default modal
