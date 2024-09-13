import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className="duration-200 object-cover"
            unoptimized
          />
        </Link>
      ) : (
        <Image
          src={src}
          alt={`Cover Image for ${title}`}
          className="w-full h-auto"
          unoptimized
        />
      )}
    </div>
  );
};

export default CoverImage;
