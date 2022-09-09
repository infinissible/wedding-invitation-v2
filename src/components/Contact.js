import React, { useState } from 'react';
import kakao from '../assets/svg/kakao.png';
// import qrAimee from '../assets/jpg/kakao-Aimee.jpeg';
// import qrJin from '../assets/jpg/kakao-jin.jpeg';

function Contact() {
  const [showBox, setShowBox] = useState(false);
  const [whoseBank, setWhoseBank] = useState('');

  const [info] = useState([
    {
      name: '이 승 진',
      phone: '01062712833',
      email: 'infinissible@gmail.com',
      kakao: 'https://open.kakao.com/o/sx986rAe',
      bankAccount: '601099-56-122291',
    },
    {
      name: '이 길 주',
      phone: '01025798055',
      email: 'gilju21@gmail.com',
      kakao: 'https://open.kakao.com/o/sCFubsAe',
      bankAccount: '702-910563-35507',
    },
  ]);

  function handleClick(e) {
    setShowBox(true);
    setWhoseBank(e.target.id);
  }

  function clickClose() {
    setShowBox(false);
  }

  return (
    <div className='m-b-10 py-20 mt-60'>
      <p className='gallery'>연 락 처</p>
      {info.map((src, index) => (
        <div key={`contact ${index}`} className='mt-40 flex inline relative'>
          <p className='contact'>{src.name}</p>
          <a
            className='flex align-center mx-5'
            href={`tel:${src.phone}`}
            alt='phone number'
          >
            <div className='icons8-phone'></div>
          </a>
          <a className='flex align-start mx-5' href={`sms:${src.phone}`}>
            <img
              width={50}
              src='https://img.icons8.com/ios/50/000000/sms.png'
              alt='sms'
            />
          </a>
          <div
            key={`kakao ${index}`}
            className='flex align-center mx-5'
            alt='mykakao'
          >
            <a href={src.kakao}>
              <img
                width={50}
                height={50}
                src={kakao}
                alt={src.name}
                // onClick={(img) => handleClick(img)}
              />
            </a>
            {/*             
            {showImage && whoseContact === `${src.name}` && (
              <img
                {...handlers}
                className='qr'
                width={250}
                height={250}
                src={src.kakao}
                onClick={closeImg}
                alt={`QR code ${src.name}`}
              />
            )} */}
          </div>
        </div>
      ))}
      <div className='mt-80 text text-sm'>
        <div>
          <h3>마음 전하실 곳</h3>
        </div>
        <div className='mt-40 my-15'>
          <p>
            비대면으로 축하를 전하고자 <br />
            하시는 분들을 위해 <br />
            계좌번호를 기재하였습니다. <br />
            너그러운 마음으로 양해 부탁드립니다.
          </p>
        </div>
        <div className='mt-40 flex space-center'>
          {showBox && whoseBank === '1' ? (
            <div id='1' className='btn' onClick={clickClose}>
              농협 (예금주: 이승진) <br />
              601099-56-122291
            </div>
          ) : (
            <div id='1' className='btn' onClick={(e) => handleClick(e)}>
              신랑측 계좌번호
            </div>
          )}
        </div>
        <div className='mt-20 flex space-center'>
          {showBox && whoseBank === '2' ? (
            <div id='2' className='btn' onClick={clickClose}>
              하나은행 (예금주: 이길주) <br />
              702-910563-35507
            </div>
          ) : (
            <div id='2' className='btn' onClick={(e) => handleClick(e)}>
              신부측 계좌번호
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
