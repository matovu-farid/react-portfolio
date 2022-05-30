import { TextField, Box } from '@mui/material';
import style from './style.module.scss';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  let [state, handleSubmit] = useForm("mayvwppv");
  return <section className={style['contact-section']}>
{
    (state.succeeded)?
        <p>Thank you,I will reach out as soon as possible!</p>
        : ''  
}
    <form onSubmit={handleSubmit} id="contact" className={style.contact}>
      <div className="content center-box">
        <h2 className="heading">Get started</h2>
        <p>
          Please get in touch as soon as possible so we could start building awesome projects together. I look forward to hearing from you
        </p>
        <div className={style.identity}>

          <Box my={2}>

            <TextField className={style.input} id="outlined-basic" label="You name" variant="outlined" />
          </Box>

          <Box my={2}>
            <TextField type="email" name="email" className={style.input} id="outlined-basic" label="You email" variant="outlined" />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </Box>
        </div>
        <Box my={2} className={style.messege}>
          <TextField name="message" className={style.input} id="outlined-basic" label="Message" variant="outlined" multiline minRows={5} />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </Box>
        <button disabled={state.submitting} type="submit" className=" bg-gray-800 py-3 px-5 text-white">Start collaboration</button>

      </div>
    </form>
  </section>
};

export default Contact;
