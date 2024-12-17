import React from 'react';
import "./CardHolder.css"
import OfferCard from '../OfferCard/OfferCard';
import PersonCard from '../PersonCard/PersonCard';
import CommonHeader from '../CommonHeader/CommonHeader';

import { doctorsList } from '../../DoctorsList';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

const CardHolder = ({type, classForMargin}) => {

    const displayCards = () => {
        if(type === "offers"){
            return (
                <>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={2}/></SwiperSlide>
                    <SwiperSlide><OfferCard cardNo={1}/></SwiperSlide>
                </>
            )
        }else{return (
            doctorsList.map((item, idx) => {
                const {name, specialization, image} = item
                return (
                    <SwiperSlide className='doctorsSlide'>
                        <PersonCard cardNo={idx+1} key={`${name}Image`} name={name} specialization={specialization} image={image} />
                    </SwiperSlide>
                )
            })
        )
        }
    }

    return (
        <div className={`CardHolder ${classForMargin}`}>
            {type === "persons" ? <CommonHeader text={"Our Medical Specialist"} /> : null}
            <div className='cardHolderWrapper commonContainer'>                    
             
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    width={type === "offers" ? 393 : null}                   
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {displayCards()}
                </Swiper>
            </div>
        </div>
    );
};

export default CardHolder;