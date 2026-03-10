function NewsCard({ image, title, date, excerpt }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md 
                    hover:shadow-xl transition-all duration-300 
                    hover:-translate-y-2 group cursor-pointer">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover 
                     transition-transform duration-1000
                     group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-sm text-gray-500 mb-2">
          {date}
        </p>

        <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          {excerpt}
        </p>

      </div>
    </div>
  );
}

export default NewsCard;
