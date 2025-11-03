import React from 'react';
import styles from './Card.module.scss';

function Card({ title, description, imageUrl, tags, footer }) {
  return (
    <div className={styles.card}>
      {imageUrl && (
        <div className={styles.cardImage}>
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {tags && tags.length > 0 && (
          <div className={styles.cardTags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
      </div>
      {footer && (
        <div className={styles.cardFooter}>
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;

