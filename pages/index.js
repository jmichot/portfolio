import Intro from '../components/Intro';
import Profile from '../components/Profile';

export default function Home() {
  return (
    // Maybe a nav
    <div className='h-screen w-screen snap-y snap-mandatory overflow-scroll'>
      {/* each section as profile, projects ... corresponding to components
      maybe do a one page one section with scroll animation, rounds on the left to change and see in which section we are */}
      <Profile />
      <Intro />
    </div>
  );
}
