import CoverImage from "./cover-image";

type Props = {
  title: string;
  src: string;
};

export function MainHero({ title, src }: Props) {
  return (
    <div className="mb-8 md:mb-16">
      <CoverImage title={title} src={src} />
    </div>
  );
}
