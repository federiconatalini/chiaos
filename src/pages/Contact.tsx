import { ReactElement } from 'react';
import Topbar from '../components/Topbar';
import { Button, TextField } from '@mui/material';

function Contact(): ReactElement {
  return (
    <div className="-m-8">
      <div className="w-screen h-screen flex flex-col">
        <form className="w-full h-full flex flex-col items-center gap-4 mt-8">
          <div className="w-screen h-screen flex flex-col items-center gap-4">
            <TextField label="Email" variant="outlined" className="w-96" />
            <TextField
              label="Message"
              variant="outlined"
              className="w-96"
              multiline
              rows={4}
            />
            <Button className="h-12 w-96" variant="contained" title="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
