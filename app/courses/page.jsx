'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from "next/head";
import courses from "../../data/courses.json"
import { useEffect } from 'react';

export default function Courses() {
  const [courseContent, setCourseContent] = useState(courses);

  const router = useRouter();

  const CourseCard = ({url, price, language, description}) => {
    return (
            <div className="flex flex-col items-center w-96 hover:-translate-y-2 transition-transform cursor-pointer my-5">
            <div className={`w-72 h-48 rounded-md bg-[url('/course-images/${url}')]  bg-cover z-10 border border-gray-300`}></div>
            <div className="w-[350px] h-[290px] bg-slate-50 -mt-10 rounded-md shadow-xl border border-gray-100">
              <div className="flex items-center justify-between p-10 mt-4 font-mulish  ">
                  <h2 className="text-green-500 text-2xl font-semibold">{language}</h2>
                  <p className="font-mulish font-semibold text-sm">{price}</p>
              </div>
              <p className="px-10 -mt-6 text-justify font-mulish text-sm">{description}</p>
              <button className="ml-10 p-2 px-5 rounded-md mt-2 hover:bg-green-600 hover:text-slate-50 transition-colors font-semibold bg-green-500 text-slate-900" onClick={() => router.push({pathname:'/detailcourse',query:{data:'Em construção'} })}>Ver curso</button>
            </div>
          </div>
    );
  }

  return (
    <div className="mt-10 p-4 font-mulish">
      <h2 className="w-full text-base md:text-xl font-mulish px-10 font-semibold">Cursos disponíveis</h2>
      <div className="relative mt-5 flex flex-wrap items-center lg:justify-start gap-1 sm:justify-center">
        {/* Div Card */}
       { courseContent.map((course)=> <CourseCard 
              key={course.id}
              price={course.price} 
              language={course.language} 
              url={course.url} 
              description={course.description}  
        />
        )
       }
      </div>
    </div>
  );
}