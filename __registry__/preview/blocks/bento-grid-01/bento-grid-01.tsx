import BentoGrid from "@/registry/block/bento-grid-01/bento-grid";

const BentoGridPreview = () => {
  return (
    <div className="space-y-10">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl font-extrabold leading-[1.15] [text-wrap:balance] sm:leading-[1.15]">
          Bento Grid To Display Your Content
        </h2>
      </div>
      <BentoGrid />
    </div>
  );
};

export default BentoGridPreview;
