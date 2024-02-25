// components/CourseCard.js
"use client"
import Image from "next/image";

interface CourseCardProps{
     courseName: string;
   description: string;
   courseCover: string;
}

export default function CourseCard({
   courseName,
   description,
   courseCover
}: CourseCardProps) {
    
  return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <Image className="w-full h-64 object-cover" src={courseCover} alt="Course 1" height={100} width={100}/>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{courseName}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="mt-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-500 font-semibold">Learn More</a>
          </div>
        </div>
      </div>
    );
  }
  