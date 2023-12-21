import React from 'react'
import Container from '../Container/Container'
import clockImage from '../../assets/icons/Clock Icon.png'
import Image from 'next/image';
import SheduleCard from './SheduleCard';

const Shedule = () => {
  return (
    <div className="mt-28 font-urbanist text-white bg-primary-bg py-10">
      <Container>
        <div className="flex flex-row gap-14">
          {/* left */}
          <div className="lg:w-4/12 items-center flex flex-row gap-2">
            <Image src={clockImage} alt="Clock Image" />
            <h3 className="text-4xl font-bold">Open Hour</h3>
          </div>
          {/* right */}
          <div className="lg:w-8/12 flex lg:flex-row gap-10 justify-between">
            <SheduleCard day={"Monday to Friday"} time={"9 AM - 9 PM"} />
            <SheduleCard day={"Saturday"} time={"9 AM - 5 PM"} />
            <SheduleCard day={"Sunday"} time={"10 AM - 3 PM"} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Shedule