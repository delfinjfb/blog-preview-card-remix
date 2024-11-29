import imageAvatar from "app/images/image-avatar.webp";

export default function AuthorSection() {
  return (
    <div className="flex items-center mt-4">
      <img src={imageAvatar} alt="Greg Hooper" className="w-8 h-8 rounded-full" />
      <p className="text-gray-700 font-bold text-xs ml-2">
        Greg Hooper
      </p>
    </div>
  );
}
