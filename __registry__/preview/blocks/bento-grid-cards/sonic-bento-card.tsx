import SonicBento from "@/registry/block/bento-grid-components/sonic-bento";

const SonicBentoCardPreview = () => {
      return (
        <div className="w-[70%] h-[450px]">
            <SonicBento bottomGradientClassName="from-white" audioWaveCount={50} wrapperClassName="bg-green-500" />
        </div>
      )
}

export default SonicBentoCardPreview;