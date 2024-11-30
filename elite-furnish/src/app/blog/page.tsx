import React from 'react';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <>
      <div>
        <Image
          src={"/images/blog.png"}
          alt="blog-img"
          width={1440}
          height={316}
          className="w-full mt-20"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:h-[2210px] px-4 lg:px-0">
        <div className="lg:w-1/2 lg:ml-12">
          <Image
            src={"/images/laptop.png"}
            alt="laptop-img"
            width={817}
            height={500}
            className="mt-8 lg:mt-28 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image
              src={"/images/user.svg"}
              alt="user-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image
              src={"/images/briefcase.svg"}
              alt="briefcase-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image
              src={"/images/wood.svg"}
              alt="wood-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Going all-in with millennial design
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          <Image
            src={"/images/drawing.png"}
            alt="drawing-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image
              src={"/images/user.svg"}
              alt="user-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image
              src={"/images/briefcase.svg"}
              alt="briefcase-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image
              src={"/images/wood.svg"}
              alt="wood-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Exploring new ways of decorating
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

          <Image
            src={"/images/book.png"}
            alt="books-img"
            width={817}
            height={500}
            className="mt-14 w-full"
          />
          <div className="flex items-center gap-2 lg:gap-4 mt-2">
            <Image
              src={"/images/user.svg"}
              alt="user-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Admin</h3>
            <Image
              src={"/images/briefcase.svg"}
              alt="briefcase-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">14 Oct 2022</h3>
            <Image
              src={"/images/wood.svg"}
              alt="wood-img"
              width={20}
              height={20}
            />
            <h3 className="text-[#9F9F9F] text-sm lg:text-base">Wood</h3>
          </div>
          <h1 className="text-[20px] lg:text-[30px] font-semibold my-4">
            Handmade pieces that took time to make
          </h1>
          <p className="text-[#9F9F9F] mb-8 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices...
          </p>
          <span className="border-b border-black text-sm">Read More</span>

        </div>

        <div className="lg:w-1/2 lg:mr-20 lg:ml-20 mt-10 lg:mt-28">
          <div className="flex items-center justify-end w-full lg:w-[311px] h-[58px] border px-4 border-[#9F9F9F] rounded-md">
            <Image
              src={"/images/research.svg"}
              alt="search-img"
              width={20}
              height={20}
            />
          </div>
          <h1 className="text-[20px] lg:text-[24px] font-semibold mt-10">
            Categories
          </h1>
          <div className="space-y-4 lg:space-y-6">
            {[
              { name: 'Crafts', count: 2 },
              { name: 'Design', count: 8 },
              { name: 'Handmade', count: 7 },
              { name: 'Interior', count: 1 },
              { name: 'Wood', count: 6 },
            ].map((category) => (
              <div
                key={category.name}
                className="flex justify-between text-sm lg:text-base"
              >
                <h3>{category.name}</h3>
                <span>{category.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 lg:gap-8 mt-10 lg:mt-14">
        {['1', '2', '3', 'Next'].map((item) => (
          <div
            key={item}
            className={`w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center ${item === '1' ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7]'
              }`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
