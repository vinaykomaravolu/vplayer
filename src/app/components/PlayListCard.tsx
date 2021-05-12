import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Collection } from '../../objects/Object';
import DefaultImage from '../../../assets/images/default.png';

function CreatePlayListCard() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="shadow-md focus:outline-none bg-gradient-to-t from-primary via-primary2 to-primary3 w-44 h-52 rounded-md hover:to-secondary2 hover:from-secondary2 hover:via-secondary2"
    >
      <p className="text-6xl font-bold text-white">+</p>
    </motion.button>
  );
}

function PlayListCard({ collection }: { collection: Collection }) {
  return (
    <Link to={`/playlists/${collection.name}`}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="shadow-md focus:outline-none bg-gradient-to-t from-primary via-primary2 to-primary3 w-44 h-52 rounded-md hover:to-secondary2 hover:from-secondary2 hover:via-secondary2"
      >
        <div id="content" className="p-2 h-full w-full">
          <img
            src={DefaultImage}
            alt={DefaultImage}
            className="rounded-md w-full h-3/4"
          />
          <p className="text-xl truncate h-1/4 w-full text-white pt-3">
            {collection.name}
          </p>
        </div>
      </motion.button>
    </Link>
  );
}

export { PlayListCard, CreatePlayListCard };
