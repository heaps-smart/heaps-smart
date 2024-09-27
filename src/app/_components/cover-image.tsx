import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
      alt={title}
      width={1300}
      height={630}
    />
  );

  return (
    <figure className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
      {title && (
        <figcaption className="text-xs text-black mt-2 text-right">
          Photo: {title}
        </figcaption>
      )}
    </figure>
  );
};

export default CoverImage;
