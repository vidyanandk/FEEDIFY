import { ratte } from "../../public/assets";
import { rating } from "../constants";

const RaterList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {rating.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-7 border border-n-1 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-2"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.rate && (
              <>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.rate}
                </div>
                <div className="h3">
                  <br/>*****
                </div>
              </>
            )}
          </div>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={ratte} width={24} height={24} alt="ratte" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RaterList;
