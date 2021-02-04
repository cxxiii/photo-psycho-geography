import React from 'react';
import styles from '../styles/About.module.css';
import NavHeader from '../components/NavHeader/NavHeader';

export default function About() {
  return (
    <>
      <NavHeader subHeading="About" />
      <div className={styles.About_container}>
        <img
          className={styles.About_image}
          src="/images/Biography.jpg"
          alt="Katja"
        />
        <figcaption className={styles.About_imageCaption}>
          Photo: Kaj Wuorisalo
        </figcaption>
        <div className={styles.About_textContent}>
          <p>I was born in Bielefeld, Germany, on the first of June in 1966.</p>
          <p>
            As my father happened to be a passionate traveller he took my
            brother, my mother and myself to beautiful and interesting places
            such as Ireland, Malta, the South of France and Switzerland during
            the 1970s and 1980s.
          </p>
          <p>
            In my secondary school years I travelled as an exchange student to
            Angers, France, and to Salisbury, England.
          </p>
          <p>
            Later in life I kept travelling to many places in Europe, to cities
            such as London, Paris, Vienna, Bruxelles, Amsterdam, Dublin, Galway,
            Düsseldorf, Cologne, Brest, Venice, Berlin, to Islands such as Malta
            and Tenerife, and one trip even took me to the United States of
            America, New York, Pennsylvania, Wilkes-Barre.
          </p>
          <p>
            Somewhere in between I lived for a couple of years in the southeast
            of Belgium, in the French-speaking region Wallonia, in a sound
            village called Gemmenich.
          </p>
          <p>
            But one country, which my family and I hit in the mid 1970s, left a
            lifelong impression on me: Ireland, and there, the Dingle Peninsula.
            I would return to this country many times throughout my adult life.
            Alone, with my brother, my partners, my son. In 2014 I even
            fulfilled myself a lifelong dream – I moved to the Dingle Peninsula
            and lived there for two years. More than 40 years after I came there
            for the first time as a child, now being in my late 40s. I have
            always felt this place being a home to my soul, my spirit, my
            psyche, however you name it, which connects us to a place.
          </p>
          <p>
            In 2017 I visited Finland for the first time in my life. The moment
            I stepped out of the plane I, uncannily, felt that this was the
            start of another life changing encounter with another country. I
            stayed in the South of Finland for three months, visiting Helsinki,
            Espoo and Kemiönsaari peninsula, and fell in love with the
            Scandinavian nature and the Finnish way of life. A year later I
            travelled to a city in Northern Finland, Oulu, and felt at home in
            this place right away. Here I found the perfect mix of sea, lakes,
            rivers and forests, surrounding the “Capital of Northern
            Scandinavia”.
          </p>
          <p>
            Even though I now seem to have found a home of the heart, travelling
            is a red thread in my life.
          </p>
          <p>
            In 1997 I graduated from Aachen University with a degree in Visual
            Communication/Graphic Design and lost myself a little bit in the
            advertisement agency universe for a few years. Being a single
            working mum I needed to put bread and butter to the table. I was
            happy when I was able to swap the junior art director’s job with
            becoming a self-employed editor and layouter of travel guides, which
            I still am to this very day. This also gave me the space to
            rediscover my passion for visual arts and photography, which I would
            never give up again and that would then accompany all my travels.
          </p>
          <p>
            Many encounters with people with narcissistic personality disorder
            in family, partners and some “friends” and episodes of general
            anxiety disorder led to another red thread in my life - occupying
            myself with the subject of psychology, and there, trauma and trauma
            healing. I have been researching and investigating the matter
            passionately for a good decade now. This also gave me the great
            opportunity to learn a lot about myself, about my own psyche.
          </p>
          <p>
            So why not combine the three of them? Photography, travels and
            psychology?
          </p>
          <p>
            My photography is void of people; it solely shows scenes of nature.
            Nature is my healing drug; nature is my home and my religion and
            where I recharge my batteries. My photography shall mirror inner
            landscapes of the psyche, mirror landscape of emotion — fear,
            melancholy, loneliness, or abstracts like hope and loss, and
            conditions of life. Let it speak to you, let it resonate in you. We
            humans are all on a journey, rowing the same boat across the same
            ocean towards the same sunset. What we need is to understand each
            other and ourselves better.
          </p>
          <blockquote>
            <em>
              I tell you loneliness is the thing to master. If I make myself
              master my own loneliness there will be peace or safety: and
              perhaps these are the same.
            </em>
            ― Martha Gellhorn
          </blockquote>
          <p className={styles.About_textContent__contact}>
            Contacts: <a href="mailto:katschmelzer@t-online.de">Email</a>|
            <a
              href="https://www.facebook.com/NoFunBaby"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
