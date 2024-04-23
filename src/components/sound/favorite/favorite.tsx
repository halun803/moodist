import { BiHeart, BiSolidHeart } from 'react-icons/bi/index';
import { AnimatePresence, motion } from 'framer-motion';

import { useSoundStore } from '@/store';
import { cn } from '@/helpers/styles';
import { fade } from '@/lib/motion';

import styles from './favorite.module.css';

import { useKeyboardButton } from '@/hooks/use-keyboard-button';

interface FavoriteProps {
  id: string;
}

export function Favorite({ id }: FavoriteProps) {
  const isFavorite = useSoundStore(state => state.sounds[id].isFavorite);
  const toggleFavorite = useSoundStore(state => state.toggleFavorite);

  const variants = fade();

  const handleKeyDown = useKeyboardButton(() => {
    toggleFavorite(id);
  });

  return (
    <AnimatePresence initial={false} mode="wait">
      <button
        aria-label="Add Sound to Favorites"
        className={cn(styles.favoriteButton, isFavorite && styles.isFavorite)}
        onKeyDown={handleKeyDown}
        onClick={e => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
      >
        <motion.span
          animate="show"
          exit="hidden"
          initial="hidden"
          key={isFavorite ? `${id}-is-favorite` : `${id}-not-favorite`}
          variants={variants}
        >
          {isFavorite ? <BiSolidHeart /> : <BiHeart />}
        </motion.span>
      </button>
    </AnimatePresence>
  );
}
