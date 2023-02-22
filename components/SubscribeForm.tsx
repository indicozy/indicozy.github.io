export default function SubscribeForm() {
  return (
    <div
      id='mc_embed_signup'
      className='bg-zinc-700 px-4 py-6 rounded-xl max-w-5xl mx-auto mb-4'
    >
      <form
        action='https://app.us18.list-manage.com/subscribe/post?u=b18fd8f5f771bf7fdfb713054&amp;id=a9bdcb78ec&amp;f_id=0031c1e6f0'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate'
        target='_self'
      >
        <div id='mc_embed_signup_scroll'>
          <h2 className='text-4xl font-runs font-extrabold'>
            Подписаться на рассылку
          </h2>
          <div className='text-sm text-zinc-300'>
            *Не забудьте подтвердить по почте, что вы не бот.
          </div>
          <div className='flex flex-col md:flex-row items-center md:items-end md:space-x-4 mt-6'>
            <div className='mc-field-group'>
              <label htmlFor='mce-EMAIL' className='block'>
                Почта*:
              </label>
              <input
                type='email'
                name='EMAIL'
                className='rounded-md mt-1 block p-1 border border-zinc-400 bg-zinc-600'
                id='mce-EMAIL'
                required
              />
              <span id='mce-EMAIL-HELPERTEXT' className='helper_text'></span>
            </div>
            <div className='mc-field-group'>
              <label htmlFor='mce-FNAME' className='block'>
                Имя
              </label>
              <input
                type='text'
                name='FNAME'
                className='rounded-md mt-1 block p-1 border border-zinc-400 bg-zinc-600'
              />
              <span id='mce-FNAME-HELPERTEXT' className='helper_text'></span>
            </div>
            <div id='mce-responses' className='clear foot'>
              <div
                className='response'
                id='mce-error-response'
                style={{ display: 'none' }}
              ></div>
              <div
                className='response'
                id='mce-success-response'
                style={{ display: 'none' }}
              ></div>
            </div>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden='true'
            >
              <input
                type='text'
                name='b_b18fd8f5f771bf7fdfb713054_a9bdcb78ec'
                tabIndex={-1}
              />
            </div>
            <div className='optionalParent'>
              <div className='clear foot'>
                <button
                  type='submit'
                  name='subscribe'
                  id='mc-embedded-subscribe'
                  className='bg-zinc-500 px-3 py-1 mt-4 rounded-lg text-lg'
                >
                  Подписаться
                </button>
                {/* <p className='brandingLogo'>
                  <a
                    href='http://eepurl.com/ikCsZ5'
                    title='Mailchimp - email marketing made easy and fun'
                  >
                    <img src='https://eep.io/mc-cdn-images/template_images/branding_logo_text_light_dtp.svg' />
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
