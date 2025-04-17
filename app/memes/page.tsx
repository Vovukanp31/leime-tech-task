import MemesList from "../modules/MemesList";

const Page = () => {
  return (
    <article className="flex min-h-screen flex-col items-center gap-6 lg:gap-8">
      <div className="w-full rounded-xl border border-[#e5e7eb] p-2 text-center shadow-sm lg:p-5">
        <h1 className="rounded-md bg-gray-100 p-2 text-3xl font-semibold text-blue-700 lg:p-5 lg:text-5xl xl:text-6xl">
          MEMES LIST
        </h1>
      </div>
      <MemesList />
    </article>
  );
};

export default Page;
