import Image from "next/image";
import HeroAndTimeline from "./components/HeroAndTimeline";
import ComparePlans from "./components/ComparePlans";
import PayOuts from "./components/PayOuts";
import Trade from "./components/Trade";

export default function Home() {
  return (
   <>
<HeroAndTimeline/>

<ComparePlans/>
<div className=""><PayOuts/>
</div>
<Trade/>
   </>
  );
}
