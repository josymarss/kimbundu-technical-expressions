"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import courses from "../../data/courses.json";
import { useEffect } from "react";
import Image from "next/image";


export default function Courses() {
  const router = useRouter();
  const [courseContent, setCourseContent] = useState(courses);
  // Modal;
  const [visible, setVisible] = useState(false);

  const CourseCard = ({ course }) => {
    const { url, price, language, description } = course;
    return (
      <div className="flex flex-col items-center h-[fit-content] sm:40  w-65 hover:-translate-y-2 transition-transform cursor-pointer my-5">
        <div className="w-60  rounded-md  select-none bg-cover z-10 border border-gray-300">
          <Image
            width={400}
            height={120}
            quality={100}
            intrinsec="true"
            alt="language-picture"
            className="rounded-md select-none bg-cover border-slate-600 border"
            src={`/course-images/${url}`}
            loading="lazy"
          />
        </div>
        <div className="w-18 md:w-[400px] max-h-[fit-content] md:h-[350px] py-5  bg-slate-50 -mt-10 rounded-md shadow-xl border border-gray-100">
          <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
            <h2 className="text-green-500 text-[12pt] md:text-2xl font-semibold">
              {language}
            </h2>
            <p className="font-mulish font-semibold text-[10pt] md:text-sm">
              {price}
            </p>
          </div>
          <p className="px-10  -mt-6 text-justify font-mulish text-[10pt] md:text-[12pt]">
            {description}
          </p>
         <div className="flex items-center gap-4">
         <button
            className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-50"
            onClick={() =>
              // router.push({
              //   pathname: "/detailcourse",
              //   query: { data: "Em construção" },
              // })
              setVisible(true)
            }
          >
            Ver Cronograma
          </button>
          <button
            className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-50"
            onClick={() =>
              router.push("/detailcourse")
              // setVisible(true)
              // console.log("Ver ir para o curos")
            }
          >
            Fazer curso
          </button>
         </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-10 p-4 font-mulish  flex justify-center">
        <div className=" mt-5 flex gap-3 flex-wrap justify-center items-center">
          {courseContent.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </>
  );
}
