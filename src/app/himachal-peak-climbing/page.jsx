import HimachalPeakClimbing from "@/components/peakclimbingpackages/HimachalPeakClimbing";// app/peak-climbing/page.tsx
import HimachalPeaks from "./HimachalPeaks";


export const metadata = {
  title: "Top Peak Climbing Expeditions in the Himachal",
  description:
    "Discover the most popular peaks for climbing in the Garhwal Himalayas. Join expertly guided and well-organized peak climbing expeditions in Himachal.",
};

export default function PeakClimbingPage() {
  return <HimachalPeaks/>;
}
