import React from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { useLayout } from "./layout/layout-context";

export const RawRenderer = ({ rawData }: { rawData: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useLayout();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const safeStringify = (obj: any) => {
    try {
      return JSON.stringify(obj, null, 2);
    } catch (error) {
      console.error("Error stringifying raw data:", error);
      return "Error: Unable to display raw data";
    }
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`opacity-70 hover:opacity-100 transition duration-150 ease-out font-bold py-2 px-4 rounded-lg ${
          theme.color === "primary" || theme.color === "dark"
            ? "text-white bg-gray-800 hover:bg-gray-700"
            : "text-gray-800 bg-gray-200 hover:bg-gray-300"
        }`}
      >
        View Raw Data
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen max-h-screen px-4 py-12 text-center flex flex-col items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="">
                <DialogPanel className="fixed inset-0 bg-gradient-to-br from-gray-800 to-gray-1000 opacity-80" />
              </div>
            </TransitionChild>

            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="flex-1 w-full prose dark:prose-dark max-w-3xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-1000 shadow-xl rounded-xl inline-flex flex-col max-h-full">
                <pre className="flex-1 overflow-y-auto">
                  <code>{safeStringify(rawData)}</code>
                </pre>
                <button
                  type="button"
                  className="flex-0 font-semibold text-lg transition duration-150 ease-out opacity-80 hover:opacity-100"
                  onClick={closeModal}
                >
                  Great, thanks!
                </button>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};