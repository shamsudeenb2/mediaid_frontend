import React from "react";
import Medication from "@/pages/MedReminderListComponent";
import Link from "next/link";
import Image from "next/image";
import Plus_btn from "@/components/plus_btn";
import HamburgerMain from "@/components/hamburgerMain";
import BottomImg from "@/components/svg_image";
import Navigation from "@/components/hamburgerMain";
import MenuBar from "@/components/menuBar";

const ListReminder = () => {
  return (
    <div className="max-w-2xl min-h-screen md:rounded md:overflow-hidden md:shadow-lg m-auto items-center justify-center">
      <div>
        <div className="flex justify-center mt-5">
          <h1 className="mx-2 font-bold text-xl">Med Intake Reminder</h1>
        </div>
        <div className="my-5 mx-4 flex ">
          <Plus_btn to="add/" text="Add Med Intake Reminder" />
        </div>
          <Medication/>
      </div>
    </div>
  );
};

export default ListReminder;