import { TextField, Box } from '@mui/material';
import style from './style.module.scss';

const Contact = () => (
  <div className={style.contact}>
    <div className="content">
      <h2 className="heading">Get started</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.
      </p>
      <Box my={2}>

        <TextField className={style.input} id="outlined-basic" label="You name" variant="outlined" />
      </Box>

      <Box my={2}>
        <TextField type="email" className={style.input} id="outlined-basic" label="You email" variant="outlined" />
      </Box>
      <Box my={2}>
        <TextField className={style.input} id="outlined-basic" label="Messege" variant="outlined" multiline minRows={5} />
      </Box>
      <button type="button" className="purple-btn">Start collaboration</button>

    </div>
  </div>
);

export default Contact;
