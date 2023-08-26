import Lottie from "lottie-react";
import developerAnimation from "@public/assets/developer_animation.json";

export default function LottieAnimation(){
  return (
    <Lottie animationData={developerAnimation} className="grayscale hover:grayscale-0 delay-150 transition-all ease-in-out" />
  )
}