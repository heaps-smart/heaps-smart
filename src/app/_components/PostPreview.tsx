import { type Author } from "@/interfaces/author";
import Link from "next/link";
// import Avatar from "./Avatar";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";

type Props = {
  title: string;
  subtitle?: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  subtitle,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-3 leading-snug tracking-tight">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      {/* {subtitle && <h2 className="text-xl md:text-xl leading-tight tracking-tight mb-4 font-semibold">{subtitle}</h2>} */}
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
