import React from 'react'
import Container from '../Container/Container'
import aboutImage from "../../assets/image 20.png";
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle/SectionTitle';
import SectionHeadinig from '../ui/SectionHeading/SectionHeadinig';

const About = () => {
  return (
    <div className='mt-36'>
      <Container>
        <div className="flex flex-row gap-20  items-center justify-between">
          {/* left */}
          <div className="lg:w-6/12">
            <Image src={aboutImage} alt="About Image" />
          </div>
          {/* right */}
          <div className="lg:w-6/12">
            <SectionTitle title={"Who we are?"} />
            <SectionHeadinig
              heading={"Our sole mission is to bring a smile to your face."}
            />
            <p className="text-lg mt-10 leading-8 text-blacks">Dr. Amelia Warren, Founder</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About