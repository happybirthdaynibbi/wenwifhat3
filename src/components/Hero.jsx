import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-6 px-4`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Buy wenwifhat Now{" "}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
          <h1 className="font-poppins font-semibold text-3xl md:text-5xl text-white mb-4">
            WenWIFhat <br className="sm:hidden" />{" "}
            <span className="text-gradient">on Solana</span>{" "}
          </h1>
          {/* <div className="sm:block">
            <GetStarted />
          </div> */}
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-2 text-sm md:text-base`}>
          WENWIF token on Solana, inspired by the successful WEN token,
          targets a multi-million dollar market cap with a doxxed dev team.
          CA: WHYoaBumcmxCqw38y2mjs4cVkCBgwiDizbMVvcejmGT
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} mt-6 md:mt-0 relative`}>
        <img src={robot} alt="billing" className="w-full max-w-[300px] h-auto relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-20" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-6 bottom-6 blue__gradient" />
        {/* gradient start */}
      </div>

      {/* <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
