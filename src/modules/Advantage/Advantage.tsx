import React from "react";
import { Claim, SectionWrapper } from "../../components";
import { Image } from "@nextui-org/react";
import { AD1, AD2, AD3, AD4, AD5, AD6 } from "../../assets";
import {useIntl} from "gatsby-plugin-intl";

export type ListType = { title: string; description: string; src: any };


const Item = ({ title, description, src }: ListType) => {
  return (
    <div className="w-[400px] md:h-[307px] flex flex-col gap-6 items-center">
      <Image width={70} height={70} src={src} />
      <h3 className="text-[24px] font-bold text-center">{title}</h3>
      <p className=" text-[15px] text-center">{description}</p>
    </div>
  );
};

export const Advantage = () => {
  const intl = useIntl();
  const list: ListType[] = [
    {
      src: AD1,
      title: intl.formatMessage({ id: 'benefits.IncreasedRevenue.title' }),
      description: intl.formatMessage({ id: 'benefits.IncreasedRevenue.desc' }),
    },
    {
      src: AD2,
      title:  intl.formatMessage({ id: 'benefits.ImprovingGuest.title' }),
      description: intl.formatMessage({ id: 'benefits.ImprovingGuest.desc' }),
    },
    {
      src: AD3,
      title:  intl.formatMessage({ id: 'benefits.TaskAutomation.title' }),
      description: intl.formatMessage({ id: 'benefits.TaskAutomation.desc' }),
    },
    {
      src: AD4,
      title:  intl.formatMessage({ id: 'benefits.SaveTime.title' }),
      description: intl.formatMessage({ id: 'benefits.SaveTime.desc' }),
    },
    {
      src: AD5,
      title:  intl.formatMessage({ id: 'benefits.Personalizing.title' }),
      description: intl.formatMessage({ id: 'benefits.Personalizing.desc' }),
    },
    {
      src: AD6,
      title:  intl.formatMessage({ id: 'benefits.CostReduction.title' }),
      description: intl.formatMessage({ id: 'benefits.CostReduction.desc' }),
    },
  ];
  return (
    <SectionWrapper
      id="korzysci"
      className="py-0 my-0 px-10 gap-[100px] flex flex-col"
    >
      <div className="flex flex-row justify-center">
        <Claim title={intl.formatMessage({ id: 'benefits.title' })} />
      </div>
      <div className="flex flex-row flex-wrap justify-center md:justify-between gap-10">
        {list.map((props) => (
          <Item {...props} />
        ))}
      </div>
    </SectionWrapper>
  );
};
