import React from 'react'
import SectionTitle from '../ui/SectionTitle/SectionTitle'
import SectionHeadinig from '../ui/SectionHeading/SectionHeadinig';
import Image from 'next/image';
import workImage from '../../assets/image 21.png'
import Container from '../Container/Container';

const Work = () => {
  return (
    <div className="mt-28">
      <Container>
        <div className="text-center flex  max-w-3xl mx-auto flex-col items-center">
          <SectionTitle title={"How we work"} />
          <SectionHeadinig
            heading={
              "Your Smile, Their Smile: Making Dentistry Count for All Ages"
            }
          />
          <Image className='mt-20' src={workImage} alt="Work Image" />
        </div>
      </Container>
    </div>
  );
}

export default Work