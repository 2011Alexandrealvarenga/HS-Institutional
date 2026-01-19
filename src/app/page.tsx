import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/general.css';
import '../assets/css/style.css';

import Specialities from '@/components/parts-site/Specialities';
import FurtherAreas from '@/components/parts-site/furtherAreas';
import JobsConcluded from '@/components/parts-site/jobsConcluded';
import WeAre from '@/components/parts-site/weAre';

export default function Home() {
  return (
    <div>
      <WeAre></WeAre>
      <Specialities></Specialities>
      <FurtherAreas></FurtherAreas>
      <JobsConcluded></JobsConcluded>
    </div>
  );
}
