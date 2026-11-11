import { motion } from 'motion/react';

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo R.SEABRA"
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="42"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-blue-200 opacity-50"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Building */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* Front Face */}
        <motion.path
          d="M25 80 V 40 H 45 V 80"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-900"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Side Face (Perspective) */}
        <motion.path
          d="M45 40 L 55 45 V 75 L 45 80"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-800"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        {/* Windows */}
        <motion.rect
          x="30"
          y="48"
          width="10"
          height="8"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        />
        <motion.rect
          x="30"
          y="62"
          width="10"
          height="8"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-blue-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
        />
        
        {/* Side details (lines) */}
        <motion.path
          d="M45 50 L 55 55 M 45 60 L 55 65 M 45 70 L 55 75"
          stroke="currentColor"
          strokeWidth="1"
          className="text-blue-700"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        />
      </motion.g>

      {/* Crane */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {/* Mast */}
        <motion.path
          d="M70 85 V 15 M 76 85 V 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-blue-600"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        {/* Mast ZigZag */}
        <motion.path
          d="M70 80 L 76 75 M 70 70 L 76 65 M 70 60 L 76 55 M 70 50 L 76 45 M 70 40 L 76 35 M 70 30 L 76 25 M 70 20 L 76 15"
          stroke="currentColor"
          strokeWidth="1"
          className="text-blue-400"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Jib (Arm) */}
        <motion.path
          d="M76 20 H 20 M 76 15 H 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-blue-600"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        {/* Jib ZigZag */}
        <motion.path
          d="M70 20 L 65 15 M 60 20 L 55 15 M 50 20 L 45 15 M 40 20 L 35 15 M 30 20 L 25 15"
          stroke="currentColor"
          strokeWidth="1"
          className="text-blue-400"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.4 }}
        />

        {/* Counter Jib */}
        <motion.path
          d="M76 20 H 85 V 15 H 76"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-600"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
        />
        
        {/* Counterweight */}
        <motion.rect
          x="80"
          y="16"
          width="4"
          height="8"
          fill="currentColor"
          className="text-blue-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
        />

        {/* Hook Cable */}
        <motion.path
          d="M30 20 V 50"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-orange-500"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />

        {/* Hook */}
        <motion.path
          d="M30 50 C 30 53, 33 53, 33 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-orange-500"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 2.2 }}
        />
      </motion.g>
    </motion.svg>
  );
};

