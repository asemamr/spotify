import Lottie from "lottie-react";
function AnimatedSvg({ data }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    renderer: "svg",
  };
  return (
    <div className="h-5 w-5">
      <Lottie animationData={data} loop={true} />
    </div>
  );
}

export default AnimatedSvg;
