import { useForm, ValidationError } from '@formspree/react';
import style from './style.module.scss';

const Contact = () => {
  const [state, handleSubmit] = useForm('mayvwppv');
  const INPUTSTYLE = 'rounded-md border-slate-600 p-2';
  return (
    <section className={`${style['contact-section']} h-screen`}>
      {
    (state.succeeded)
      ? <p color="green">Thank you,I will reach out as soon as possible!</p>
      : ''
}
      <form onSubmit={handleSubmit} id="contact" className={style.contact}>
        <div className="content gap-4 flex flex-col align-middle">
          <h2 className="heading"> Start here</h2>
          <p>
            Let&apos;s work together!
          </p>
          <div className={style.identity}>
            <div className="flex flex-col md:flex-row gap-4 justify-between">

              <div>

                <input type="text" className={INPUTSTYLE} id="outlined-basic" placeholder="name" label="You name" variant="outlined" />
              </div>

              <div>
                <input type="email" name="email" className={INPUTSTYLE} id="outlined-basic" placeholder="email" variant="outlined" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
          </div>
          <div className={style.messege}>

            <textarea name="message" placeholder="message" className={`${INPUTSTYLE} w-full`} id="outlined-basic" label="Message" variant="outlined" multiline rows="10" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button disabled={state.submitting} type="submit" className=" bg-gray-800 py-3 px-5 text-white">Start collaboration</button>

        </div>
      </form>
    </section>
  );
};

export default Contact;
