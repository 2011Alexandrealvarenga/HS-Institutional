import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/general.css';
import '../assets/css/style.css';

import Specialities from '@/components/parts-site/Specialities';
import FurtherAreas from '@/components/parts-site/furtherAreas';
import JobsConcluded from '@/components/parts-site/jobsConcluded';
import WeAre from '@/components/parts-site/weAre';
import WorksProgress from '@/components/parts-site/works-progress';
import Contact from '@/components/parts-site/contact';

import Carousel from '@/components/parts-site/carousel';


export default function Home() {
  return (
    <div>

      <Carousel></Carousel>
      <hr className="split-section"></hr>
      <WeAre></WeAre>

      <hr className="split-section"></hr>
      <Specialities></Specialities>
      
      <hr className="split-section"></hr>
      <FurtherAreas></FurtherAreas>

      <hr className="split-section"></hr>
      <JobsConcluded></JobsConcluded>
      <hr className="split-section"></hr>
      <WorksProgress></WorksProgress>

      <hr className="split-section"></hr>     
      <Contact></Contact>
    </div>
  );
}
