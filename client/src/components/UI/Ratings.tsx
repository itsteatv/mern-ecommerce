type RatingsProps = {
  ratings: number;
};

function Ratings({ ratings }: RatingsProps) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= ratings ? "text-amber-400" : "text-gray-300";
      stars.push(
        <span key={i} className={`text-amber-400`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`h-6 w-6 ${starClassName}`}
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <span className="flex items-center gap-4 >=445px:flex-col >=445px:gap-1 rounded text-sm text-slate-500">
          <span className="flex gap-1">{renderStars()}</span>
          <span>{ratings} out of 5</span>
        </span>
      </div>
    </>
  );
}

export default Ratings;
