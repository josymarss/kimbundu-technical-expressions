"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function DetailCOurse() {
  const router = useRouter();
  // const { data } = router.query;

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center justify-center font-mulish mt-20">
      {/* <p className="text-3xl font-bold text-slate-600">{"data"}</p> */}
      <div className="flex w-full flex-col items-center mt-5">
       
      </div>
    </div>
  );
}
export default DetailCOurse;
