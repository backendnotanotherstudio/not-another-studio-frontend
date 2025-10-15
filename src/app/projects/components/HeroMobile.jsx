"use client";

import React, { useState } from "react";

const HeroMobile = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className=" md:hidden flex flex-col ">
      <div className=" flex gap-[10px] justify-between items-center px-[27px] w-full h-[82px] border-t border-[#FFFFFF4D] bg-[#5D6771] ">
        {["REQUEST", "IDEA", "PROCESS", "RESULTS"].map((text, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            style={{ fontWeight: selected === index ? "700" : "500" }}
            className=" select-none cursor-pointer justify-start text-white text-sm font-bold font-['Inter'] uppercase leading-none"
          >
            {text}
          </div>
        ))}
      </div>
      <img className=" w-full object-cover h-full " src="/images/room.jpg" />
      <div className=" w-full p-[20px] pb-[0] relative ">
        <div className=" w-full overflow-scroll pb-[10px] pr-[10px] h-full ">
          <div className=" justify-start text-white text-4xl font-light font-['Fraunces']">
            Lorem ipsum dolor sit amet consectetur dictum nisl eget
          </div>
          <div className=" justify-start mt-[18px] mb-[45px] text-white text-xs font-light font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet consectetur. Velit vulputate dui elit
            enim. Quam turpis ullamcorper auctor urna mauris vel semper. Id sit
            at non lectus id eget tellus aenean. Interdum cras enim vulputate
            massa nibh rutrum lacinia at. Iaculis ut ut molestie auctor. Mauris
            integer tristique nisl enim. Scelerisque sollicitudin nulla et amet
            tellus fringilla non bibendum et. Erat tellus ac ultricies enim est.
            Faucibus blandit mauris id et in aliquet sit ultricies. <br />
            <br />
            Eget mi tempor commodo ut turpis ut. Nunc pharetra eget consequat
            vitae nunc lectus in adipiscing. Tortor aliquam lorem metus nisi
            nulla eget egestas. Cursus enim nunc volutpat semper metus risus
            faucibus. Vel id aliquam enim tincidunt a magna tellus vitae.
            Aliquam faucibus et scelerisque dolor vitae. Aenean tortor ac arcu
            congue curabitur interdum leo. Enim morbi penatibus purus arcu amet.
            <br />
            <br />
            Volutpat phasellus risus id nisl. Scelerisque aliquam pellentesque
            tincidunt ipsum praesent sit magna nec. Aliquam aliquam leo lacus
            mauris nullam. Nisi eget egestas nec urna nec. Sed neque id
            elementum parturient. Convallis mattis mauris mauris aenean a sit
            montes. Pharetra viverra quis consequat non aliquet. Et egestas
            cursus nunc sollicitudin non dictum eu ornare odio. Facilisis tempus
            id sed magna in. Mauris tincidunt ullamcorper facilisi vitae purus
            nibh risus.
          </div>
          <div className=" justify-start text-white text-4xl font-light font-['Fraunces']">
            Lorem ipsum dolor sit amet consectetur dictum nisl eget
          </div>
          <div className=" justify-start mt-[18px] mb-[45px] text-white text-xs font-light font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet consectetur. Velit vulputate dui elit
            enim. Quam turpis ullamcorper auctor urna mauris vel semper. Id sit
            at non lectus id eget tellus aenean. Interdum cras enim vulputate
            massa nibh rutrum lacinia at. Iaculis ut ut molestie auctor. Mauris
            integer tristique nisl enim. Scelerisque sollicitudin nulla et amet
            tellus fringilla non bibendum et. Erat tellus ac ultricies enim est.
            Faucibus blandit mauris id et in aliquet sit ultricies. <br />
            <br />
            Eget mi tempor commodo ut turpis ut. Nunc pharetra eget consequat
            vitae nunc lectus in adipiscing. Tortor aliquam lorem metus nisi
            nulla eget egestas. Cursus enim nunc volutpat semper metus risus
            faucibus. Vel id aliquam enim tincidunt a magna tellus vitae.
            Aliquam faucibus et scelerisque dolor vitae. Aenean tortor ac arcu
            congue curabitur interdum leo. Enim morbi penatibus purus arcu amet.
            <br />
            <br />
            Volutpat phasellus risus id nisl. Scelerisque aliquam pellentesque
            tincidunt ipsum praesent sit magna nec. Aliquam aliquam leo lacus
            mauris nullam. Nisi eget egestas nec urna nec. Sed neque id
            elementum parturient. Convallis mattis mauris mauris aenean a sit
            montes. Pharetra viverra quis consequat non aliquet. Et egestas
            cursus nunc sollicitudin non dictum eu ornare odio. Facilisis tempus
            id sed magna in. Mauris tincidunt ullamcorper facilisi vitae purus
            nibh risus.
          </div>
          <div className=" justify-start text-white text-4xl font-light font-['Fraunces']">
            Lorem ipsum dolor sit amet consectetur dictum nisl eget
          </div>
          <div className=" justify-start mt-[18px] mb-[45px] text-white text-xs font-light font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet consectetur. Velit vulputate dui elit
            enim. Quam turpis ullamcorper auctor urna mauris vel semper. Id sit
            at non lectus id eget tellus aenean. Interdum cras enim vulputate
            massa nibh rutrum lacinia at. Iaculis ut ut molestie auctor. Mauris
            integer tristique nisl enim. Scelerisque sollicitudin nulla et amet
            tellus fringilla non bibendum et. Erat tellus ac ultricies enim est.
            Faucibus blandit mauris id et in aliquet sit ultricies. <br />
            <br />
            Eget mi tempor commodo ut turpis ut. Nunc pharetra eget consequat
            vitae nunc lectus in adipiscing. Tortor aliquam lorem metus nisi
            nulla eget egestas. Cursus enim nunc volutpat semper metus risus
            faucibus. Vel id aliquam enim tincidunt a magna tellus vitae.
            Aliquam faucibus et scelerisque dolor vitae. Aenean tortor ac arcu
            congue curabitur interdum leo. Enim morbi penatibus purus arcu amet.
            <br />
            <br />
            Volutpat phasellus risus id nisl. Scelerisque aliquam pellentesque
            tincidunt ipsum praesent sit magna nec. Aliquam aliquam leo lacus
            mauris nullam. Nisi eget egestas nec urna nec. Sed neque id
            elementum parturient. Convallis mattis mauris mauris aenean a sit
            montes. Pharetra viverra quis consequat non aliquet. Et egestas
            cursus nunc sollicitudin non dictum eu ornare odio. Facilisis tempus
            id sed magna in. Mauris tincidunt ullamcorper facilisi vitae purus
            nibh risus.
          </div>
          <div className=" justify-start text-white text-4xl font-light font-['Fraunces']">
            Lorem ipsum dolor sit amet consectetur dictum nisl eget
          </div>
          <div className=" justify-start mt-[18px] mb-[45px] text-white text-xs font-light font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet consectetur. Velit vulputate dui elit
            enim. Quam turpis ullamcorper auctor urna mauris vel semper. Id sit
            at non lectus id eget tellus aenean. Interdum cras enim vulputate
            massa nibh rutrum lacinia at. Iaculis ut ut molestie auctor. Mauris
            integer tristique nisl enim. Scelerisque sollicitudin nulla et amet
            tellus fringilla non bibendum et. Erat tellus ac ultricies enim est.
            Faucibus blandit mauris id et in aliquet sit ultricies. <br />
            <br />
            Eget mi tempor commodo ut turpis ut. Nunc pharetra eget consequat
            vitae nunc lectus in adipiscing. Tortor aliquam lorem metus nisi
            nulla eget egestas. Cursus enim nunc volutpat semper metus risus
            faucibus. Vel id aliquam enim tincidunt a magna tellus vitae.
            Aliquam faucibus et scelerisque dolor vitae. Aenean tortor ac arcu
            congue curabitur interdum leo. Enim morbi penatibus purus arcu amet.
            <br />
            <br />
            Volutpat phasellus risus id nisl. Scelerisque aliquam pellentesque
            tincidunt ipsum praesent sit magna nec. Aliquam aliquam leo lacus
            mauris nullam. Nisi eget egestas nec urna nec. Sed neque id
            elementum parturient. Convallis mattis mauris mauris aenean a sit
            montes. Pharetra viverra quis consequat non aliquet. Et egestas
            cursus nunc sollicitudin non dictum eu ornare odio. Facilisis tempus
            id sed magna in. Mauris tincidunt ullamcorper facilisi vitae purus
            nibh risus.
          </div>
          <div className=" justify-start text-white text-4xl font-light font-['Fraunces']">
            Lorem ipsum dolor sit amet consectetur dictum nisl eget
          </div>
          <div className=" justify-start mt-[18px] mb-[45px] text-white text-xs font-light font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet consectetur. Velit vulputate dui elit
            enim. Quam turpis ullamcorper auctor urna mauris vel semper. Id sit
            at non lectus id eget tellus aenean. Interdum cras enim vulputate
            massa nibh rutrum lacinia at. Iaculis ut ut molestie auctor. Mauris
            integer tristique nisl enim. Scelerisque sollicitudin nulla et amet
            tellus fringilla non bibendum et. Erat tellus ac ultricies enim est.
            Faucibus blandit mauris id et in aliquet sit ultricies. <br />
            <br />
            Eget mi tempor commodo ut turpis ut. Nunc pharetra eget consequat
            vitae nunc lectus in adipiscing. Tortor aliquam lorem metus nisi
            nulla eget egestas. Cursus enim nunc volutpat semper metus risus
            faucibus. Vel id aliquam enim tincidunt a magna tellus vitae.
            Aliquam faucibus et scelerisque dolor vitae. Aenean tortor ac arcu
            congue curabitur interdum leo. Enim morbi penatibus purus arcu amet.
            <br />
            <br />
            Volutpat phasellus risus id nisl. Scelerisque aliquam pellentesque
            tincidunt ipsum praesent sit magna nec. Aliquam aliquam leo lacus
            mauris nullam. Nisi eget egestas nec urna nec. Sed neque id
            elementum parturient. Convallis mattis mauris mauris aenean a sit
            montes. Pharetra viverra quis consequat non aliquet. Et egestas
            cursus nunc sollicitudin non dictum eu ornare odio. Facilisis tempus
            id sed magna in. Mauris tincidunt ullamcorper facilisi vitae purus
            nibh risus.
          </div>
          <div className=" justify-start text-white text-4xl font-light font-['Fraunces']">
            Lorem ipsum dolor sit amet consectetur dictum nisl eget
          </div>
          <div className=" justify-start mt-[18px] mb-[45px] text-white text-xs font-light font-['Inter'] leading-tight">
            Lorem ipsum dolor sit amet consectetur. Velit vulputate dui elit
            enim. Quam turpis ullamcorper auctor urna mauris vel semper. Id sit
            at non lectus id eget tellus aenean. Interdum cras enim vulputate
            massa nibh rutrum lacinia at. Iaculis ut ut molestie auctor. Mauris
            integer tristique nisl enim. Scelerisque sollicitudin nulla et amet
            tellus fringilla non bibendum et. Erat tellus ac ultricies enim est.
            Faucibus blandit mauris id et in aliquet sit ultricies. <br />
            <br />
            Eget mi tempor commodo ut turpis ut. Nunc pharetra eget consequat
            vitae nunc lectus in adipiscing. Tortor aliquam lorem metus nisi
            nulla eget egestas. Cursus enim nunc volutpat semper metus risus
            faucibus. Vel id aliquam enim tincidunt a magna tellus vitae.
            Aliquam faucibus et scelerisque dolor vitae. Aenean tortor ac arcu
            congue curabitur interdum leo. Enim morbi penatibus purus arcu amet.
            <br />
            <br />
            Volutpat phasellus risus id nisl. Scelerisque aliquam pellentesque
            tincidunt ipsum praesent sit magna nec. Aliquam aliquam leo lacus
            mauris nullam. Nisi eget egestas nec urna nec. Sed neque id
            elementum parturient. Convallis mattis mauris mauris aenean a sit
            montes. Pharetra viverra quis consequat non aliquet. Et egestas
            cursus nunc sollicitudin non dictum eu ornare odio. Facilisis tempus
            id sed magna in. Mauris tincidunt ullamcorper facilisi vitae purus
            nibh risus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMobile;
