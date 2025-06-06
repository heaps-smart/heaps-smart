// import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import { PostTitle } from "@/app/_components/PostTitle";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  subtitle?: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, subtitle, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {subtitle && <h2 className="text-2xl md:text-3xl leading-tight mb-4">{subtitle}</h2>}
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      {/* <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div> */}
    </>
  );
}
