import { useState } from 'react';
import s from './SmartImage.module.css';

export default function SmartImage({ image, alt, className = '', icon = false, ...rest }) {
  const [failed, setFailed] = useState(false);

  // Если пропс image не передан или равен undefined, защищаем компонент от падения
  if (!image) {
    return <span className={`${s.ph} ${icon ? s.icon : ''} ${className}`} role="img" aria-label="Image not found">{icon ? '?' : 'No image'}</span>;
  }

  if (failed) {
    return (
      <span className={`${s.ph} ${icon ? s.icon : ''} ${className}`} data-hint={image.hint || ''} title={image.hint || ''} role="img" aria-label={image.hint || ''}>
        {icon ? '?' : <><b>{image.hint || 'Image'}</b><small>{image.src || ''}</small></>}
      </span>
    );
  }

  return <img src={image.src} alt={alt ?? ''} className={className} onError={() => setFailed(true)} draggable={false} {...rest} />;
}