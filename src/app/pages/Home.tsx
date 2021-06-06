import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../utilities/ThemeContext';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`section-page scrollbar-thin scrollbar-thumb-${theme}-secondary-2 scrollbar-track-transparent  scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`shadow-md mr-4 mb-4 w-24 h-24 rounded-2xl bg-gradient-to-r from-${theme}-primary-1 to-${theme}-secondary-1`}
      />
      Fusce venenatis lobortis tristique. Nunc eget laoreet enim. Fusce sagittis
      posuere dolor, vitae consequat dolor consectetur quis. Nam nec tempor
      mauris. In hac habitasse platea dictumst. Donec non sapien diam. Phasellus
      lorem massa, tincidunt eget massa ut, facilisis ultrices lacus. Aenean
      hendrerit, lectus cursus semper finibus, diam mauris congue massa, tempor
      gravida quam justo quis nulla. Sed malesuada, diam a elementum volutpat,
      eros magna consequat neque, in cursus dui mi nec nibh. Cras tristique
      placerat euismod. Cras consequat a mauris vel tempus. Ut quis laoreet ex.
      Aenean varius metus nisl. Nunc dignissim erat eros, id bibendum nunc
      congue quis. Donec pulvinar varius dui vel maximus. Fusce tincidunt
      fermentum erat vel dapibus. Nulla egestas purus ac erat ornare lobortis.
      Suspendisse rhoncus, arcu sed finibus dapibus, erat purus varius dolor,
      sed mattis neque sem non metus. Fusce dignissim eget lorem non efficitur.
      Quisque in elit porttitor, pretium sapien eleifend, accumsan eros. Morbi
      congue magna vel aliquet finibus. Duis vulputate tortor dignissim orci
      consectetur, maximus lobortis dolor iaculis. Nunc efficitur varius lectus
      quis iaculis. Nulla at feugiat erat, in commodo nisl. Donec luctus tortor
      et arcu mattis, id pulvinar libero interdum. Proin gravida molestie
      congue. Aenean pulvinar porta pellentesque. Nullam eget tristique quam.
      Phasellus tristique, diam ut lacinia imperdiet, sem sem porttitor sem, et
      placerat massa orci vitae mauris. Proin placerat quam eget mattis viverra.
      Integer ut pretium arcu, et facilisis nunc. Sed nec mauris id dolor mollis
      varius dapibus id ante. Pellentesque non orci urna. Cras laoreet volutpat
      magna. Duis ultrices aliquam elit non suscipit. Proin vel vehicula metus.
      Aliquam quis ex nunc. Vivamus interdum placerat dui vel ultrices. Aliquam
      posuere justo et magna bibendum rhoncus. Nunc maximus id turpis id auctor.
      Nam tincidunt ultrices metus, in pretium massa. Curabitur rhoncus dui
      lorem, at tincidunt libero tempus ut. Donec in imperdiet nisi, ac maximus
      lacus. Phasellus semper felis sed elit laoreet, id varius mi molestie.
      Praesent sed rutrum eros, ut sodales purus. Donec dictum pretium dapibus.
      Nullam tincidunt consequat tincidunt. Nulla faucibus neque erat, quis
      vulputate lorem tempor eget. Nunc vitae diam non libero venenatis
      consectetur a sed enim. Aliquam tristique turpis in erat laoreet dapibus.
      Sed vel auctor erat, ac ultricies sem. Suspendisse imperdiet nisi ante, id
      volutpat felis porttitor id. Phasellus molestie nisi pretium ipsum
      malesuada, in ullamcorper odio ultricies. Nullam sit amet mollis nisl, sit
      amet faucibus leo. Phasellus cursus nunc sit amet pretium commodo. Aliquam
      erat volutpat. Donec accumsan commodo risus, et accumsan leo congue
      convallis. Praesent eleifend ligula vitae dui fringilla, quis euismod urna
      pulvinar. Sed fringilla lorem quis urna auctor, vel laoreet enim dapibus.
      In faucibus id eros et efficitur. Duis nec odio eleifend, dictum ipsum eu,
      mattis mauris. Aliquam euismod at odio id vestibulum. Aliquam placerat
      magna non sem posuere, dignissim porttitor mauris sodales. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Quisque sit amet lobortis lacus, vitae pulvinar nisl. Suspendisse potenti.
      Ut eleifend tincidunt ante, a sodales mi porta non. Sed et dolor orci.
      Aliquam dolor nisl, mattis nec rhoncus vitae, ultrices vitae elit. In elit
      purus, posuere sit amet ullamcorper scelerisque, lacinia ultricies est.
      Nunc volutpat, massa hendrerit rhoncus consequat, dolor nisi scelerisque
      mauris, non cursus purus orci ut elit. Nam mattis iaculis massa, a
      tincidunt felis. Curabitur id tortor hendrerit, tempor metus et, faucibus
      nisi. Phasellus iaculis leo a purus condimentum, ut dapibus urna tempor.
      Nulla nec magna lacus. Nulla vel orci malesuada, auctor tellus suscipit,
      tincidunt lacus. Nam porta velit sem, ac semper ante mollis sit amet.
      Mauris augue nulla, aliquet ut leo ac, pulvinar tincidunt sapien. Proin
      dapibus nulla nunc, sit amet sagittis est mattis accumsan. Vivamus
      lobortis massa in nulla laoreet, eget mollis ex fringilla. Suspendisse
      potenti. Donec cursus mauris leo, ut iaculis neque eleifend maximus. Nunc
      mattis semper enim. Proin rutrum purus nec erat varius dignissim.
      Curabitur vitae nulla non sem cursus tincidunt sed et ipsum. Nullam
      consequat enim quis congue dignissim. Phasellus ut tortor sed quam
      volutpat iaculis nec quis tellus. Nullam dictum iaculis aliquam.
      Suspendisse varius imperdiet dignissim. Integer sollicitudin ex quis ante
      scelerisque pretium. Vivamus risus sapien, vestibulum quis odio a, dapibus
      convallis felis. Mauris blandit euismod magna, venenatis tristique ligula
      molestie in. Cras nulla ex, vestibulum a leo et, vulputate lobortis risus.
      Sed eget porta nunc. Nulla tempus orci varius sapien aliquet facilisis. In
      sed maximus metus. Donec mollis, magna ac sagittis imperdiet, ante libero
      auctor orci, id efficitur dui dolor a eros. Suspendisse vitae sollicitudin
      lacus, eu dignissim metus. Curabitur quam ex, malesuada at vestibulum
      venenatis, varius eget dui. Donec ut placerat enim. Quisque maximus lectus
      nisi, luctus egestas mi porttitor id. Aenean suscipit, ante in dignissim
      iaculis, arcu augue iaculis erat, id eleifend augue diam vel arcu. Aenean
      fringilla euismod massa egestas rhoncus. In dolor est, aliquet in ornare
      nec, consectetur id enim. Quisque vehicula sem euismod tortor accumsan
      euismod. Aenean quis lorem posuere, porta dolor sit amet, consequat massa.
      Donec tempor massa varius sagittis convallis. Phasellus tempor egestas
      arcu, sed dictum mauris scelerisque non. Aliquam erat volutpat. Quisque
      varius tellus sit amet eleifend vehicula. Aenean bibendum ut lacus sed
      dictum. In porttitor, neque et facilisis aliquam, nulla massa rhoncus
      urna, sit amet molestie turpis orci vitae nisi. Nullam lacinia gravida
      erat, id accumsan dolor malesuada sed. Ut at nisl pharetra, tempus felis
      et, pulvinar quam. Ut augue velit, lobortis congue augue ut, blandit
      porttitor nunc. Nullam ut massa at leo pellentesque aliquet in id magna.
      Ut ac commodo tortor. Suspendisse placerat commodo nulla, id congue elit
      porttitor sit amet. Etiam scelerisque in turpis nec faucibus. Mauris non
      neque pellentesque, ultricies ex a, aliquet purus. In posuere auctor urna,
      eget egestas ante. Suspendisse porta dui eu velit tristique, a volutpat
      eros lacinia. Nulla pulvinar lacinia urna, laoreet sodales odio volutpat
      id. Vivamus fringilla elit sit amet semper eleifend. Quisque non semper
      ligula. Etiam elementum enim nisi, ut tincidunt nunc auctor eu. Phasellus
      suscipit gravida auctor. Donec a.
    </motion.div>
  );
}

export default Home;
