import { useState } from 'react';
import { motion } from 'framer-motion';

const ScreenshotGallery = ({ screenshotModal, getProjectScreenshots }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleScreenshotPreview = (imageUrl) => {
    setPreviewImage(imageUrl);
  };

  const closeModal = () => {
    setPreviewImage(null);
  };

  return (
    <div className="relative">
      {/* Screenshot Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={previewImage}
              alt="Enlarged Screenshot"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black/60 rounded-full px-3 py-1 text-sm hover:bg-black/80 transition"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}

      {/* Screenshot Grid */}
      {getProjectScreenshots(screenshotModal.project).length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getProjectScreenshots(screenshotModal.project).map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={screenshot}
                  alt={`${screenshotModal.project?.name || screenshotModal.project?.title} Screenshot ${index + 1}`}
                  className="w-full h-64 object-cover"
                  onClick={() => handleScreenshotPreview(screenshot)}
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Click to enlarge label */}
                <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to enlarge
                </div>
              </div>
              <div className="p-4">
                <p className="text-center text-sm text-gray-700 font-medium">
                  Screenshot {index + 1}
                </p>
                <p className="text-center text-xs text-gray-500 mt-1">
                  Click to view full size
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No screenshots available.</p>
      )}
    </div>
  );
};

export default ScreenshotGallery;
