import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col sm:flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4 sm:mb-0 sm:mr-4`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col">
      <h4 className="font-poppins font-semibold text-white text-lg mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-base leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>
        About wenwifhat
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        
      </p>

      <Button styles={`mt-6`} />
    </div>

    <div className={`${layout.sectionImg} mt-6 sm:mt-0`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
