import Image from 'next/image'
import spaceship1 from '../../assets/space-travel-collage-design.jpg'
import spaceship2 from '../../assets/vintage-spaceship-falling.jpg'
import styles from './styles.module.css'

export interface ConditionalRenderingProps {
  spaceshipPicture: '1' | '2'
}

export function ConditionalRendering ({
  spaceshipPicture
}: ConditionalRenderingProps) {
  return (
    <div>
      {spaceshipPicture === '1'
        ? (
            <figure>
              <Image className={styles.img} src={spaceship1} width={400} height={600} alt="Nave espacial no planeta"  />
              <figcaption className={styles.text}>
                Nave espacial no planeta
              </figcaption>
            </figure>
          )
        : (
            <figure>
              <Image className={styles.img} src={spaceship2} width={400} height={600} alt="Foto vintage de nave espacial" />
              <figcaption className={styles.text}>
                Foto vintage de nave espacial
              </figcaption>
            </figure>
          )
      }
    </div>
  );
}