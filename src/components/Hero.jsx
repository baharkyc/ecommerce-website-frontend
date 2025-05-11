import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}//remove null to make carousel auto slide
        >
            <Carousel.Item>
                <div className='relative w-full h-[700px] '>
                    <img
                    className="w-full h-full object-cover object-bottom"
                    src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='text-3xl py-2 font-bold tracking-widest'>Spring Collection '25</div>
                        <p className='text-lg'>Sustainable, breathable, fresh.</p>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='relative w-full h-[700px] '>
                    <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
                    alt="First slide"
                    />
                    <Carousel.Caption className='text-lg'>
                        <div className="text-3xl py-2  font-bold tracking-widest">Slow Fashion</div>
                        <p>Respect nature.</p>
                    </Carousel.Caption >
                </div>
            </Carousel.Item>
        </Carousel>
       
    );
}

export default Hero;