import { ReactElement } from 'react';
import Topbar from '../components/Topbar';

function Home(): ReactElement {
  return (
    <div className="-m-8">
      <div className="w-screen h-screen flex flex-col">
        <Topbar />
        <Home />
      </div>
    </div>
  );
}

export default Home;
