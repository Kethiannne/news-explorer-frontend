import React from 'react';
import kethianne from '../../images/kethianne.png';

export default function About (props) {
  return (
    <main>
      <div className='about'>
        <img src={ kethianne } alt='my handsome mug'></img>
        <article className='about__article'>
          <h2 className='about__article-title'>
            About the author
          </h2>
          <p className='about__article-para'>
            My name is Nate Anderson, I'm a fledgeling web developer who has been
            studying for about 10 months now in the Practicum Program by Yandex.
            Thanks to their excellent tutelage I have become familiar with the basic languages of HTML and CSS
            as well as Javascript and a variety of technologies which enhance Javascript and allow it for function
            as much more than vanilla will allow for.
            This website, for example, utilizes React to let JS render its comonents, and a JS based Express server
            to handle user information and connect to a database.

            Practicum has been an excellent learning platform, and I am excited to use my skills in a
            professional capacity!

            You can reach me for full stack developement services, including creating the visual side as well as the
            functional side of websites and servers, at my email:
            natedadc@gmail.com
          </p>
        </article>
      </div>
    </main>
  )
}
