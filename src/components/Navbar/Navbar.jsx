import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import "./Navbar.css";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import './modal.css';
import { Link } from 'react-router-dom';
import Navmodal from '../../pages/Datasets/Nav';


const Nav = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);
  const [display, setDisplay] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOff = () => setView(false);
  const handleOn = () => setView(true);
  const closeHandler = () => setDisplay(false);
  const onHandler = () => setDisplay(true);

  const updatedItem = Navmodal.filter((currEle) => {
    return currEle.cat === 'about';
  });

  const updateClicks = Navmodal.filter((currEle) => {
    return currEle.cat === 'graphic';
  });

  const updateResults = Navmodal.filter((currEle) => {
    return currEle.cat === 'community';
  });

  const [items, setItems] = useState(updatedItem);
  const [item, setItem] = useState(updateClicks);
  const [objects, setObjects] = useState(updateResults);

  const handleClick = (catItem) => {
    const updatedItems = Navmodal.filter((currEle) => {
      return currEle.cat === catItem;
    });
    setItems(updatedItems);
  }

  const handleTouch = (catItem) => {
    const updateClick = Navmodal.filter((currEle) => {
      return currEle.cat === catItem;
    });
    setItem(updateClick);
  }

  const handleEvent = (catItem) => {
    const updateResult = Navmodal.filter((currEle) => {
      return currEle.cat === catItem;
    })
    setObjects(updateResult);
  }


  return (
    <nav >
      <div className='navbar container display'>
        <div className='nav--Logo'>
          <Link className='nav-Logo' to='/'>Logo</Link>
        </div>
        <div className='nav--Links'>
          <Link className='navLink' to='/platform'>Platform</Link>
          <button className='navLink' onClick={handleOn}>Services</button>
          <button className='navLink' onClick={handleShow}>Company</button>
          <button className='navLink' onClick={onHandler}>Explore</button>
          <Link className='navLink' to='/forcreators'>For Creators</Link>
        </div>
        <div className='Login--Talk'>
          <div>
            <Link className='Login--hover' to='/login'>Login</Link>
          </div>
          {/* <button className='Lettalkborder'> */}
          <Link className='Let--Talk' to='/'>Let's Talk</Link>
          {/* </button> */}
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Body bsPrefix>
          <div className='Modal--body'>
            <div className='Modal--Titles'>
              <div className='heading--body top--title mydiv'>
                <div>
                  <a onClick={() => handleClick('about')}>About us</a>
                </div>
                <div className='modal--icons'>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <div className='heading--body'>
                <a href='customer' onClick={() => handleClick('customer')}>Customers</a>
              </div>
              <div className='heading--body bottom--title'>
                <a onClick={() => handleClick('career')}>Career</a>
                <div className='modal--icons'>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
            </div>
            <div className='nav--grid--item'>
              {items.map((ele) => {
                const { text, cat, link } = ele;
                if (cat === 'career') {
                  return (
                    <div>
                      <div className='text-link'>
                        <a href={link}>{text}</a>
                      </div>
                    </div>
                  )
                }
                return (
                  <a className='text-link' href={link}>{text}</a>
                )
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="lg" show={display} onHide={closeHandler} animation={false}>
        <Modal.Body bsPrefix>
          <div className='Modal--body'>
            <div className='Modal--Titles'>
              <div className='heading--body top--title mydiv'>
                <div>
                  <a onClick={() => handleEvent('community')}>Community</a>
                </div>
                <div className='modal--icons'>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <div className='heading--body bottom--title'>
                <a onClick={() => handleEvent('categories')}>Categories</a>
                <div className='modal--icons'>
                  <MdOutlineKeyboardArrowRight />
                </div>
              </div>
              <div className='heading--body'>
                <a href='exploreblogs' onClick={() => handleEvent('customer')}>Blog</a>
              </div>
            </div>
            <div className='explore-nav--grid--item'>
              {objects.map((ele) => {
                const { text, cat, link } = ele;
                return (
                  <a className='explore-text-link' href={link}>{text}</a>
                )
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>


      <Modal size="lg" show={view} onHide={handleOff} animation={false}>
        <Modal.Body bsPrefix>
          <div className='Modal--body'>
            <div className='Modal--Titles'>
              <div className='heading--body top--title mydiv'>
                <div>
                  <a onClick={() => handleTouch('graphic')}>Graphic Design</a>
                </div>
              </div>
              <div className='heading--body'>
                <a onClick={() => handleTouch('cinema')}>Cinematography</a>
              </div>
              <div className='heading--body bottom--title'>
                <a onClick={() => handleTouch('photo')}>Photography</a>
              </div>
              <div className='heading--body bottom--title'>
                <a onClick={() => handleTouch('content')}>Content Writing</a>
              </div>
              <div className='heading--body bottom--title'>
                <a onClick={() => handleTouch('space')}>Space & Studio</a>
              </div>
            </div>
            <div className='nav--grid--item'>
              {item.map((ele) => {
                const { text, cat, link } = ele;
                return (
                  <a className='text-link' href={link}>{text}</a>
                )
              })}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </nav>
  )
}

export default Nav;