export default function PostHeader() {
  return (
    <div>
      <Top />
      <AuthorInfo />
    </div>
  );
}

// <p className="">Founder & Inspiration at DigiSource</p>

const Top = () => {
  return (
    <div className="w-full flex items-center justify-between border-b border-black/10 py-2">
      <div className="w-full flex items-center gap-x-2">
        <div className="w-8 h-8 rounded-full bg-amber-400 overflow-hidden cursor-pointer"></div>
        <div className="font-semibold text-text text-xs flex items-center">
          <p className="cursor-pointer hover:text-link hover:underline line-clamp-1">
            Emily Le (Nga)
          </p>
          <span className="font-normal text-text-secondary/60 pl-1">
            commented on this
          </span>
        </div>
      </div>

      <div className="w-fit px-2 flex items-center gap-x-2">
        <p className="w-8 h-8 cursor-pointer bg-red-200 flex items-center justify-center rounded-full overflow-hidden hover:bg-gray-200 text-sm font-semibold">
          ...
        </p>
        <p className="w-8 h-8 cursor-pointer bg-red-200 flex items-center justify-center rounded-full overflow-hidden hover:bg-gray-200 text-sm font-semibold">
          X
        </p>
      </div>
    </div>
  );
};

const AuthorInfo = () => {
  return (
    <div className="w-full flex items-center gap-x-2 justify-between py-4">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-violet-300 cursor-pointer"></div>
      <div className="flex-grow">
        <h4 className="text-sm font-semibold text-text">Tran Thi Kim Phuong</h4>
        <p className="text-xs text-text-secondary/60 font-normal">
          Human Resources Supervisor/ Manager
        </p>
        <p className="text-xs text-text-secondary/60 font-normal">1w</p>
      </div>
      <p className="px-4 py-1.5 cursor-pointer text-sm font-semibold text-link hover:bg-link/10 rounded-sm">
        + Follow
      </p>
    </div>
  );
};
