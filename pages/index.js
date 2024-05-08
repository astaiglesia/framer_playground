import Link from "next/link";

let links = [
  { path: "/1-steps", label: "Lesson 1 - Multistep wizard" },
  { path: "/2-email", label: "Lesson 2 - Email client" },
  { path: "/3-header-part-1", label: "Lesson 3 - Fixed header: Part 1" },
  { path: "/4-header-part-2", label: "Lesson 4 - Fixed header: Part 2" },
  { path: "/5-carousel-part-1", label: "Lesson 5 - Carousel: Part 1" },
  { path: "/6-carousel-part-2", label: "Lesson 6 - Carousel: Part 2" },
  { path: "/7-resizable-panel", label: "Lesson 7 - Resizable panel" },
  { path: "/8-calendar", label: "Lesson 8 - Calendar" },
];

import MotionHeader from "./4-header-part-2/MotionHeader";
import Carousel from "./6-carousel-part-2/Carousel";

export default function HomePage() {
  
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 overflow-hidden text-slate-600">
      <div className="z-0 flex-1 overflow-y-scroll">
      
        {/* install into root layout */}
        <MotionHeader />

        <main>
          <div className=" pt-28 p-8">
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-blue-600 underline">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-6">

            {[...Array(4).keys()].map((i) => (
              <div key={i} className="outline space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-4 rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}



            <div className="rounded bg-slate-200">
              <Carousel />
            </div>


            {[...Array(90).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-4 rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
