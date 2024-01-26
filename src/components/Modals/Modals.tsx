import {Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/react";
import React, {ReactNode} from "react";
import Calendly from "../CalendlyForm/Calendly";

type ModalsProps = {
    isOpen: boolean;
    onClose : () => void;
    size : string,
    title: string
    children?: ReactNode
};

export const Modals = ({ isOpen, onClose, size, title, children }: ModalsProps) => {
    return (
        <Modal backdrop='blur' placement={'center'}  isOpen={isOpen} onClose={onClose} size={size}
            classNames={{
            body: "py-6",
            base:"border-none shadow-none bg-transparent text-[#a8b0d3]",

            closeButton: "bg-white hover:bg-white active:bg-white/10",
        }} >
            <ModalContent>
                {(onClose) => (
                    <>
                    {title && (<ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>)}
                            <ModalBody>
                                {children}
                            </ModalBody>

                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
