import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            inventore culpa mollitia deleniti sapiente voluptatem error sit,
            totam non tempore eum ut labore, tempora esse molestias quisquam
            nobis vero aliquid!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ab
            esse perferendis. Quo officia accusamus nesciunt quaerat, atque
            minima et libero autem, rem rerum nihil sunt iste omnis esse animi!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            odio, praesentium, voluptates consequuntur accusamus nesciunt quis
            sint impedit ea et ducimus repellat voluptatum nemo, delectus in.
            Laudantium sint consequuntur aspernatur.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            perferendis tenetur amet fuga omnis ea, nam ullam, recusandae velit
            ut laboriosam est ab aliquam placeat sapiente fugiat saepe! A,
            velit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinence:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            nesciunt incidunt excepturi deserunt pariatur aliquid doloremque
            corrupti est laudantium, accusantium eligendi dignissimos nam
            laborum quasi, atque vero quae dolorem rem.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A cumque
            vero corporis quisquam quae. Hic minus eos odio minima, est quos
            tenetur reiciendis laudantium nesciunt autem quaerat aspernatur.
            Quis, doloribus!
          </p>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
};

export default About;
