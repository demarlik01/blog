import CoverImage from '../components/cover-image'


export default function Main({
  title,
  mainImage,
  slug
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={mainImage} slug={slug} />
      </div>
    </section>
  )
}