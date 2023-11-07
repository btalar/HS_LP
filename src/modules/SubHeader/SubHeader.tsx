import React from "react";

import { HOME_POD_MINI } from "../../assets";
import { Image } from "@nextui-org/react";
import { Claim } from "../../components";

// TODO: change component name
export const SubHeader = () => {
  return (
    <div className="py-20 bg-[#F5F5F5] flex justify-center">
      <div className="max-w-[1200px] flex-1 flex gap-x-20">
        <Image width={512} height={512} src={HOME_POD_MINI} />
        <div className="flex flex-col gap-8 justify-center">
          <Claim
            title="HomePod MIni"
            description="HomePod Mini to niewielki, ale potężny głośnik bezprzewodowy od Apple. Wyposażony jest w głośnik basowy o średnicy 3,5 cm i głośnik wysokotonowy o średnicy 1 cm, które zapewniają bogaty i przestrzenny dźwięk. HomePod Mini jest również wyposażony w asystenta głosowego Siri, który umożliwia sterowanie głośnikiem za pomocą głosu."
            buttonSecondaryText="Dowiedz się więcej"
          />
        </div>
      </div>
    </div>
  );
};
