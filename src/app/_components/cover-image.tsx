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
      className="shadow-sm w-full h-full object-cover hover:shadow-lg transition-shadow duration-200"
      alt={title}
      fill
    />
  );

  return (
    <figure className="relative w-full h-[100vh] sm:mx-0"> 
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
      {title && (
        <figcaption className="absolute bottom-4 right-4 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
          Photo: {title}
        </figcaption>
      )}
    </figure>
  );
};

export default CoverImage;
