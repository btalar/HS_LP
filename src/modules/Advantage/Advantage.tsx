import React from "react";
import { Claim, SectionWrapper } from "../../components";
import { Image } from "@nextui-org/react";
import { AD1, AD2, AD3, AD4, AD5, AD6 } from "../../assets";

export type ListType = { title: string; description: string; src: any };

const list: ListType[] = [
  {
    src: AD1,
    title: "Zwiększone przychody",
    description:
      "Dzięki promocji i rekomendacji wszystkich hotelowych usług, a także lokalnych atrakcji, widocznie zwiększysz przychody hotelu.\n",
  },
  {
    src: AD2,
    title: "Usprawnienie obsługi gościa",
    description:
      "Digital POD dostarczy szybką i skuteczną informację dla gości 24/7 eliminując potrzebę czekania przy recepcji. Efektywnie zwiększaj zadowolenie gości.\n",
  },
  {
    src: AD3,
    title: "Automatyzacja zadań rutynowych",
    description:
      "Cyfrowy concierge automatyzuje wiele rutynowych zadań co pozwala pracownikom skupić się na bardziej skomplikowanych czynnościach.\n",
  },
  {
    src: AD4,
    title: "Oszczędność czasu",
    description:
      "Goście szybko uzyskają odpowiedzi na pytania bez konieczności oczekiwania w kolejkach. \n",
  },
  {
    src: AD5,
    title: "Personalizacja doświadczeń gości",
    description:
      "Dzięki analizie danych i sztucznej inteligencji, cyfrowy concierge dostarczy spersonalizowane rekomendacje, porady i informacje.\n",
  },
  {
    src: AD6,
    title: "Redukcja kosztów",
    description:
      "Dzięki analizie danych i sztucznej inteligencji, cyfrowy concierge dostarcza spersonalizowane rekomendacje, porady i oferty",
  },
];

const Item = ({ title, description, src }: ListType) => {
  return (
    <div className="w-[400px] h-[307px] flex flex-col gap-6 items-center">
      <Image src={src} />
      <h3 className="text-[24px] font-bold text-center">{title}</h3>
      <p className="text-center text-[15px]">{description}</p>
    </div>
  );
};

export const Advantage = () => {
  return (
    <SectionWrapper
      id="korzysci"
      className="py-8 px-10 gap-[100px] flex flex-col"
    >
      <div className="flex flex-row justify-center">
        <Claim title="Korzyści" />
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-between">
        {list.map((props) => (
          <Item {...props} />
        ))}
      </div>
    </SectionWrapper>
  );
};
