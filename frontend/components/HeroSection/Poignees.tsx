import Image from "next/image";

export default function Poignees() {
  return (
    <>
      {/* Collections Grid */}
      <section className="">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* All Collections - Large */}
            <div className="relative md:col-span-2 lg:col-span-1 lg:row-span-2 group cursor-pointer overflow-hidden bg-[#233445]">
              <div className="h-full flex flex-col justify-between p-8 lg:p-12 min-h-[400px] lg:min-h-[600px]">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    All collections
                  </h3>
                  <p className="text-gray-200">382 products</p>
                </div>
                <div className="">
                  {/* Pink bag placeholder */}
                  <div className="w-full h-full flex items-center justify-center" />
                  <img
                  
                     src="https://cdn2.obag.it/rx/q_100,w_1920,ofmt_webp/media/wysiwyg/DOUBLE_BANNER_-_960x1080_-_DOUBLE_2.jpg"
                    alt="Pink Bag"
                   
                    className="absolute top-30 left-0  "
                  />
                </div>
              </div>
            </div>

            {/* Special Collection */}
            <div className="relative group cursor-pointer overflow-hidden bg-[#E8F1F5] border-l border-white">
              <div className="flex flex-col justify-between p-8 min-h-[280px] lg:min-h-[300px]">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Special collection
                  </h3>
                  <p className="text-gray-500">32 products</p>
                </div>
                <div className="mt-auto flex justify-center">
                  <div className="w-32 h-32 lg:w-50 lg:h-50 relative">
                    {/* Navy bag placeholder */}
                    <div className="w-full h-full ">
                      <Image
                        src="/ob.png"
                        alt="Navy bag"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Young Collection */}
            <div className="relative group cursor-pointer overflow-hidden bg-[#F5F5F5] border-l border-white">
              <div className="flex flex-col justify-between p-8 min-h-[280px] lg:min-h-[300px]">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Young collection
                  </h3>
                  <p className="text-gray-500">16 products</p>
                </div>
                <div className="mt-auto flex justify-center">
                  <div className="w-32 h-32 lg:w-50 lg:h-50 relative">
                    {/* Navy bag placeholder */}
                    <div className="w-full h-full ">
                      <Image
                        src="/ImageHome/ob1.png"
                        alt="Navy bag"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Collection */}
            <div className="relative group cursor-pointer overflow-hidden bg-[#F5F5F5] border-t border-l border-white">
              <div className="flex flex-col justify-between p-8 min-h-[280px] lg:min-h-[300px]">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Soft collection
                  </h3>
                  <p className="text-gray-500">32 products</p>
                </div>
                <div className="mt-auto flex justify-center">
                  <div className="w-32 h-32 lg:w-50 lg:h-50 relative">
                    {/* Navy bag placeholder */}
                    <div className="w-full h-full ">
                      <Image
                        src="/ImageHome/ob3.png"
                        alt="Navy bag"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Watch Collection */}
            <div className="relative group cursor-pointer overflow-hidden bg-[#E8F1F5] border-t border-l border-white">
              <div className="flex flex-col justify-between p-8 min-h-[280px] lg:min-h-[300px]">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Watch collection
                  </h3>
                  <p className="text-gray-500">22 products</p>
                </div>
                <div className="mt-auto flex justify-center">
                  <div className="w-32 h-32 lg:w-50 lg:h-50 relative">
                    {/* Navy bag placeholder */}
                    <div className="w-full h-full ">
                      <Image
                        src="/ImageHome/ob7.png"
                        alt="Navy bag"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
