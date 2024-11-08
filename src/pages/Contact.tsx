import { ReactElement } from 'react';
import Topbar from '../components/Topbar';

function Contact(): ReactElement {
  return (
    <div className="-m-8">
      <div className="w-screen h-screen flex flex-col bg-green-400">
        <Topbar />
      </div>
    </div>
  );
}

export default Contact;
