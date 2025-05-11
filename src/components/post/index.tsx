import PostBottom from "./PostBottom";
import PostHeader from "./PostHeader";

export default function Post() {
  return (
    <div className="w-full h-fit px-4 rounded-lg overflow-hidden border border-black/10 shadow-lg bg-white">
      <PostHeader />

      {/* Description */}
      <div className="">
        <p className="text-sm font-normal text-text line-clamp-3">
          Linh đang tìm kiếm tài năng trẻ để fill một team cực mạnh và máu lửa,
          đang còn khuyết các vị trí sau: - 1 bạn Brand Executive (Mạnh content)
          hoặc 1 bạn Content có tư duy làm Branding - 1 bạn Content TikTok (Có
          thể hỗ trợ công việc khác trong Team nếu cần) hoặc 1 bạn Content tổng
          thể nhưng mạnh TikTok
        </p>
      </div>

      <PostBottom />
    </div>
  );
}
