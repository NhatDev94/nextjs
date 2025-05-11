export default function PostBottom() {
  return (
    <div className="">
      <div className="w-full flex items-center justify-between pt-4 pb-2 border-b border-black/10">
        <p className="text-xs font-normal text-text-secondary cursor-pointer hover:underline hover:text-link">
          Van Dat Nguyen and 6 other
        </p>
        <p className="text-xs font-normal text-text-secondary">2 comments</p>
      </div>

      <div className="w-full flex items-center justify-between py-1">
        <p className="text-sm font-semibold text-text cursor-pointer w-1/4 hover:bg-black/10 flex items-center justify-center py-2 rounded-sm">
          Like
        </p>
        <p className="text-sm font-semibold text-text cursor-pointer w-1/4 hover:bg-black/10 flex items-center justify-center py-2 rounded-sm">
          Comment
        </p>
        <p className="text-sm font-semibold text-text cursor-pointer w-1/4 hover:bg-black/10 flex items-center justify-center py-2 rounded-sm">
          Repost
        </p>
        <p className="text-sm font-semibold text-text cursor-pointer w-1/4 hover:bg-black/10 flex items-center justify-center py-2 rounded-sm">
          Send
        </p>
      </div>
    </div>
  );
}
