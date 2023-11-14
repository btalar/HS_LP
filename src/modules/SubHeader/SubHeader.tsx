import React from "react";

import { HOME_POD_MINI } from "../../assets";
import { Image } from "@nextui-org/react";
import { Claim } from "../../components";

// TODO: change component name
export const SubHeader = () => {
  return (
    <div className="py-20 bg-[#F5F5F5] flex justify-center">
      <div className="max-w-[1200px] flex-1 flex flex-col lg:flex-row gap-x-20">
        <Image width={512} height={512} src={HOME_POD_MINI} />
        <div className="flex flex-col gap-8 justify-center px-8">
          <Claim
            title="Cyfrowego concierge"
            description="Intuicyjna aplikacja cyfrowego concierge dla hoteli, umożliwiająca gościom pełen dostęp do różnorodnych usług i informacji, poprawiając komfort i wygodę ich pobytu. Dzięki naszemu innowacyjnemu rozwiązaniu, użytkownicy mogą łatwo zlecać zamówienia, rezerwować usługi, dowiedzieć się o atrakcjach lokalnych, a także otrzymywać spersonalizowane rekomendacje, zapewniając wyjątkowe wrażenia podczas każdej wizyty w hotelu."
            buttonSecondaryText="Sprawdź korzyści"
          />
        </div>
      </div>
    </div>
  );
};
