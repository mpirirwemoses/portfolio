import { motion } from 'framer-motion';

const SkillItem = ({ percentage, image, name }) => {
  // Calculate circumference: 2 * π * r (where r is 36 in your case)
  const circumference = 2 * Math.PI * 36;
  // Calculate the length of the colored stroke based on percentage
  const coloredLength = (circumference * percentage) / 100;
  // The remaining length is uncolored
  const uncoloredLength = circumference - coloredLength;

  return (
    <div className="skill-item text-center">
      <div className="relative w-20 h-20 mx-auto">
        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
          {/* Background circle */}
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-300"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-purple-500"
            strokeLinecap="round"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{ strokeDasharray: `${coloredLength} ${uncoloredLength}` }}
            transition={{ duration: 2, delay: 0.4 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={image} alt={name} className="w-12 h-12 object-cover rounded-full" />
        </div>
      </div>
      <p className="mt-2 text-xl font-semibold text-white">{name}</p>
      <p className="text-purple-400 font-bold">{percentage}%</p>
    </div>
  );
};
export default SkillItem;