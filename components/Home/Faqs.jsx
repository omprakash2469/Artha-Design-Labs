"use client";
import { HomeFaq } from "@/public/images";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../Header/SectionHeader";

export default function Faqs() {
  const [faq, setFaq] = useState(0);

  const FaqSet = ({ item }) => {
    return (
      <div
        className="bg-[#F8F3F3]"
        onClick={() => setFaq(faq == item?.id ? 0 : item?.id)}
      >
        <h4 className="flex justify-between items-center pl-4 xl:pl-6 xl:text-lg">
          <span className="font-semibold font-poppins">{item?.question}</span>
          <button
            className={`p-4 ${
              faq == item?.id
                ? "bg-[#F8F3F3] text-theme-six"
                : "bg-theme-six text-white"
            }`}
          >
            <FontAwesomeIcon
              icon={faq != item?.id ? faPlus : faMinus}
              className="w-5 h-5 "
            />
          </button>
        </h4>
        <p
          className={`pl-6 transition-all py-4 duration-500 border-t border-slate-300 overflow-hidden ${
            faq == item?.id ? "block" : "hidden"
          }`}
        >
          {item?.answer}
        </p>
      </div>
    );
  };

  return (
    <section className="container py-10 xl:py-16 2xl:py-20">
      <div className="grid gap-4 xl:grid-cols-2 xl:gap-10">
        <div className="xl:order-2">
          <Image
            src={HomeFaq}
            alt="FAQs Image"
            className="w-full"
            width={250}
            height={250}
          />
        </div>
        <div className="xl:order-1">
          <SectionHeader
            subtitle={"FAQ's"}
            heading={"Project Queries Answered Here"}
          />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((value) => {
              return (
                <FaqSet
                  key={value}
                  item={{
                    id: value,
                    question: `How long does an architectural project take?`,
                    answer:
                      "This is answer This is answer This is answer This is answer This is answer This is answer",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
