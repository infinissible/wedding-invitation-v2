import React from 'react';
import main from '../assets/jpg/main.jpeg';

function Main() {
  return (
    <div>
      <div className='bgi py-20'>
        <h2>
          <p className='eng'>Wedding Ceremony</p>
          <p className='kor m-b-10'>이 승 진</p>{' '}
          <p className='eng and m-b-10'>and</p>{' '}
          <p className='kor m-b-10'>이 길 주</p>
        </h2>
      </div>
      <div className='border'>
        <img width={360} alt='main' src={main} />
      </div>
      <div className='location'>
        <p className='py-20 text'>
          2022. 10. 8. 토요일 낮 12:00 <br />
          전주 향교
        </p>

        <div className='bgi2 text-center'>
          <p className='p-30 invite line'>
            청명한 가을 하늘빛 풍성한 <br />
            결실의 계절에 두 사람이 하나 되는
            <br />
            서약을 맺고자 합니다.
            <br />
            서로 아끼고 사랑하며, <br />그 사랑을 전하는 <br />
            가정을 이루겠습니다. <br />
            한뜻으로 나아가는 기쁜날에 <br />
            소중하고 귀한 분을 모시고자 합니다. <br />
            함께 하시어 축복해 주시면 <br />큰 기쁨으로 간직하겠습니다.
          </p>
          <div className='flex inline ml-50 justify-end pr-50'>
            <div className='mx-20'>
              <p className='invite my-5'>
                유 점 순 <span className='sm'> 의 아들</span> 승 진
              </p>
            </div>
            <div className='mx-20'>
              <p className='invite my-5'>
                이 해 영 ・ 오 정 화 <span className='sm'> 의 딸</span> 길 주
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='my-15 py-20 mt-80'>
        <p className='gallery'>영상 메세지</p>
        <iframe
          className='mt-40'
          width='350'
          height='250'
          src='https://www.youtube.com/embed/fARU1eXXf9I'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Main;
