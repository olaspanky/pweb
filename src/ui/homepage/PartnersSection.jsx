import Button from "@/components/Button";
import H2 from "@/components/Typography";
import VideoPlayer from "@/components/VideoPlayer";

export default function PartnersSection() {
  return (
    <section className="max-w-[1440px] px-18 mx-auto py-20 grid grid-cols-2 items-center gap-12">
      <div className="flex flex-col items-start gap-6">

        <H2>Partner with us Today!</H2>

        <p className="text-lg text-justify text-grey-700 font-medium">
          Join over 1,000+ pharmacies in Nigeria, Ghana, and Kenya already
          partnering with PBR Life Sciences to share anonymized data, unlock
          powerful insights, and influence national health policy.
        </p>

        <Button
          content={{ label: "Learn More", to: "#" }}
          className="uppercase"
        />
      </div>

      <VideoPlayer
        src="/videos/partnership-video.mp4"
        className="w-full h-full object-cover rounded-xl"
      />
    </section>
  );
}
