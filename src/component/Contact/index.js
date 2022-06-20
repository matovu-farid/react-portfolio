import { TextField, Box } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';
import style from './style.module.scss';

const Contact = () => {
  const [state, handleSubmit] = useForm('mayvwppv');
  return (
    <section className={style['contact-section']}>
      {
    (state.succeeded)
      ? <p color="green">Thank you,I will reach out as soon as possible!</p>
      : ''
}
      <form onSubmit={handleSubmit} id="contact" className={style.contact}>
        <div className="content center-box">
          <h2 className="heading"> Start here</h2>
          <p>
            Let&apos;s work together!
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
  );
};

export default Contact;
