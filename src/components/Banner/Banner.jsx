const Banner = () => {
  return (
    <div className="hero h-screen bg-cover w-full bg-[url('/src/assets/images/banner.jpg')]">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">
            Discover an exceptional cooking class tailored for you
          </h1>
          <p className="mb-5">
            Learn basic cooking skills at our state of the art kitchens with
            Michelin star chefs
          </p>
          <button className="btn btn-primary text-lg font-medium bg-green-400 text-default-color mr-3">
            Explore Now
          </button>
          <button className="btn btn-primary text-lg font-medium bg-green-400 text-default-color">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
