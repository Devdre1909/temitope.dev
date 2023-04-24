import Minimalistic from "@/component/Minimalistic/Minimalistic";
import Preloader from "@/component/Preloader/Preloader";

export default function Home() {
  return (
    <div className="h-full bg-dark-300">
      <Preloader />
      <Minimalistic />
    </div>
  );
}
