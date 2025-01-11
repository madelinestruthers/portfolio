import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-yellow-100">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          {/* Face with Animated Hard Hat */}
          <div className="relative w-32 h-32">
            {/* Hard Hat */}
            <div className="absolute top-0 left-4 w-24 h-12 bg-yellow-400 rounded-t-full animate-bounce z-10">
              <div className="absolute top-2 left-4 w-16 h-4 bg-gray-700 rounded-md"></div>
            </div>
            {/* Face */}
            <div className="absolute bottom-0 left-4 w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center z-0">
              <div className="w-2 h-2 bg-black rounded-full mr-2"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
          {/* Text */}
          <div className="text-2xl font-bold text-gray-800">
            Under Construction!
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div>foot</div>
      </footer>
    </div>
  );
}
