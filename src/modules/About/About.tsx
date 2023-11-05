import React from "react";
import {Card, CardFooter, Image,  CardHeader} from "@nextui-org/react";
import { POD1, POD2, POD3} from "../../assets";
import {Claim, SectionWrapper} from "../../components";
export const About = () => {
    return (
            <SectionWrapper>
                <SectionWrapper noGap>
                    <Claim title="Cyfrowy" description="Woman listing to music"/>
                </SectionWrapper>

            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 h-656">
                    <Card
                        isFooterBlurred
                        radius="lg"
                        className="border-none"
                    >
                        <Image
                            isZoomed
                            alt="Woman listing to music"
                            className="object-cover"
                            height={600}
                            src={POD1}
                            width={600}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80">Available soon.</p>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-span-1">
                    <div className="h-300  mb-4">
                        <Card
                            isFooterBlurred
                            radius="lg"
                            className="border-none"
                        >

                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <p className="text-tiny text-white/60 uppercase font-bold">What to watchsss</p>
                                <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                            </CardHeader>
                            <Image
                                isZoomed
                                alt="Woman listing to music"
                                className="object-cover"
                                height={300}
                                src={POD2}
                                width={600}
                            />
                            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                <p className="text-tiny text-white/80">Available soon.</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="h-300 ">
                        <div className="h-300  mb-4">
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none"
                            >
                                <Image
                                    isZoomed
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={300}
                                    src={POD3}
                                    width={600}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80">Available soon.</p>
                                </CardFooter>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </SectionWrapper>

    );
};
