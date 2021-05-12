import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Playlist } from '../../objects/Object';

function PlayListCard({ playlist }: { playlist: Playlist }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="shadow-md focus:outline-none bg-gradient-to-t from-primary via-primary2 to-primary3 w-44 h-48 rounded-2xl hover:to-secondary2 hover:from-secondary2 hover:via-secondary2"
    >
      <div id="content" className="p-2 h-full w-full">
        <p className="text-2xl overflow-ellipsis overflow-hidden text-white">
          {playlist.name}
        </p>
      </div>
    </motion.button>
  );
}

export default PlayListCard;
