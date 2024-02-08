import { FaQuestion } from 'react-icons/fa6/index';
import { Balancer } from 'react-wrap-balancer';

import { Container } from '@/components/container';

import styles from './about.module.css';

export function About() {
  const paragraphs = [
    'Craving a calming escape from the daily grind? Do you need the perfect soundscape to boost your focus or lull you into peaceful sleep? Look no further than Moodist, your free and open-source ambient sound generator! Ditch the subscriptions and registrations – with Moodist, you unlock a world of soothing and immersive audio experiences, entirely for free.',
    'Dive into an expansive library of 75 carefully curated sounds. Nature lovers will find solace in the gentle murmur of streams, the rhythmic crash of waves, or the crackling warmth of a campfire. Cityscapes come alive with the soft hum of cafes, the rhythmic clatter of trains, or the calming white noise of traffic. And for those seeking deeper focus or relaxation, Moodist offers binaural beats and color noise designed to enhance your state of mind.',
    'The beauty of Moodist lies in its simplicity and customization. No complex menus or confusing options – just choose your desired sounds, adjust the volume balance, and hit play. Want to blend the gentle chirping of birds with the soothing sound of rain? No problem! Layer as many sounds as you like to create your personalized soundscape oasis.',
    "Whether you're looking to unwind after a long day, enhance your focus during work, or lull yourself into a peaceful sleep, Moodist has the perfect soundscape waiting for you. The best part? It's completely free and open-source, so you can enjoy its benefits without any strings attached. Start using Moodist today and discover your new haven of tranquility and focus!",
  ];

  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.iconContainer}>
          <div className={styles.tail} />
          <div className={styles.icon}>
            <FaQuestion />
          </div>
        </div>

        <h1 className={styles.title}>Free Ambient Sounds</h1>

        {paragraphs.map((paragraph, index) => (
          <>
            <p className={styles.desc} key={index}>
              <Balancer>{paragraph}</Balancer>
            </p>

            {index < paragraphs.length - 1 && (
              <div className={styles.divider} />
            )}
          </>
        ))}
      </Container>
    </section>
  );
}
