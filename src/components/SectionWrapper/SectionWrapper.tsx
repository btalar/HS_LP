import React, {ReactNode} from "react";

type SectionWrapperType = {
    children: ReactNode;
};

const SectionWrapper = ({ children }: SectionWrapperType) => (
    <section className="my-10 w-full">{children}</section>
);

export default SectionWrapper;
