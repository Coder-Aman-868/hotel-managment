interface HotelCardProps {
  title: string
  location: string
  price: number
  rating?: number
  image?: string
  featured?: boolean
  className?: string
}

const HotelCard = ({
  title,
  location,
  price,
  rating = 4.6,
  image = "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  featured = false,
  className = "",
}: HotelCardProps) => {
  return (
    <div
      className={`relative h-[420px] rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Light gradient only for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Featured */}
      {featured && (
        <span className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold">
          ⭐ Featured
        </span>
      )}

      {/* Wishlist */}
      <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center hover:bg-black/50 transition">
        ❤️
      </button>

      {/* Static Content (NO CARD / NO BG) */}
      <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
        <div>
          <h3 className="text-2xl font-semibold leading-tight">
            {title}
          </h3>
          <p className="text-white/80 text-sm flex items-center gap-1">
            📍 {location}
          </p>
        </div>

        {/* Rating + Price */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/90">
            ⭐ {rating} · 120+ reviews
          </span>

          <div className="text-right">
            <p className="text-xl font-bold">${price}</p>
            <p className="text-xs text-white/70">per night</p>
          </div>
        </div>

        {/* CTA — ONLY BUTTON HAS BLUR */}
        <button className="mt-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default HotelCard
