import React, { ReactNode } from "react";
import { SectionWrapper } from "../SectionWrapper";
import { Claim } from "../Claim";
import {Button, Image, useDisclosure} from "@nextui-org/react";
import { ASSETS1, ASSETS2, ASSETS3, CARD7 } from "../../assets";
import {useIntl, FormattedMessage} from "gatsby-plugin-intl";
import {Modals} from "../Modals";



type RowType = {
  title: string;
  isPromoted?: boolean;
  description: string | ReactNode;
  image: any;
  isLastIndex?: boolean;
  isDisabled?: boolean
};


const Row = ({
  image,
  isPromoted,
  description,
  title,
  isLastIndex, isDisabled
}: RowType) => {
  const intl = useIntl();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpen = () => {
    onOpen();
  };

  return (
    <div
      className={`${ isDisabled ? 'bg-[#f5f5f5]' : 'bg-[#f5efe8]' }  p-[35px] rounded-[25px] md:rounded-[25px] flex flex-col gap-[25px] md:gap-[50px]  items-start md:items-center md:flex-row`}
    >
      <div
        className="md:hidden h-[200px] w-full bg-cover bg-center rounded-[20px] flex justify-start items-end p-[14px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {isPromoted && (
          <div className=" lg:hidden py px-4 bg-[#908573] rounded-[25px] text-white">
            bestsseler
          </div>
        )}
      </div>
      <Image className="hidden md:block" src={image} />
      <div className="flex-1 flex flex-col items-start justify-end gap-[15px]">
        {isPromoted && (
          <div className="hidden lg:block py px-4 bg-[#908573] rounded-[25px] text-white text-[14px]">
            Bestseller {isOpen ? 'asd' : 'FALSE'}
          </div>
        )}
        <div className={`text-[40px] font-bold ${isDisabled ? '' : 'text-[##A56B35]'}`}>{title}</div>
        <div className={`text-[16px] ${isDisabled ? '' : 'text-[#6c6764]'}`}>{description}</div>
      </div>
      <Button
        size="lg"
        disabled={ isDisabled }
        className={`text-[16px] rounded-full text-white ${isDisabled ? 'bg-[#545454]' : 'bg-[#445844]'}`}
        onClick={!isDisabled ? () => handleOpen() : null}
      >
        {isDisabled ? intl.formatMessage({ id: 'btn.soon' })  :  intl.formatMessage({ id: 'btn.more' }) }
      </Button>
      <Modals isOpen={isOpen} onClose={onClose} size='4xl'>
        <div className="flex-1 flex flex-col items-center gap-[15px]">
          <iframe width="800" height="540" src="https://www.youtube.com/embed/7BXrYaEpueE?si=2D6NUXsIam-0z0h2"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
        </div>
      </Modals>
    </div>

  );
};

const Store = () => {
  const intl = useIntl();
  const mocks: RowType[] = [
    {
      image: ASSETS2,
      isDisabled: false,
      isPromoted: true,
      title: intl.formatMessage({ id: 'store.conferenceManager.title' }),
      description:intl.formatMessage({ id: 'store.conferenceManager.desc' }),
    },
    {
      image: ASSETS1,
      title:intl.formatMessage({ id: 'store.FaultManagement.title' }),
      isPromoted: false,
      isDisabled: true,
      description: intl.formatMessage({ id: 'store.FaultManagement.desc' }),
    },
    {
      image: ASSETS3,
      title: intl.formatMessage({ id: 'store.offers.title' }),
      isDisabled: true,
      description: intl.formatMessage({ id: 'store.offers.desc' }),
    },
  ];


  return (
    <div>
      <SectionWrapper>
        <div className="flex flex-col gap-[40px] md:gap-[80px] ">
          <Claim title={intl.formatMessage({ id: 'store.title' })} />
          <div className="flex flex-col gap-[50px]">
            {mocks.map((props, index, array) => (
              <Row {...props} isLastIndex={false} />
            ))}
            {/*<div className="flex justify-center">*/}
            {/*  <Button*/}
            {/*    size="lg"*/}
            {/*    radius="full"*/}
            {/*    className="text-black bg-[#EAEAEA] flex items-center"*/}
            {/*  >*/}
            {/*    <span>Pokaż więcej</span> <img src={CARD7} />*/}
            {/*  </Button>*/}
            {/*</div>*/}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Store;
