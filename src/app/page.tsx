import Container from "@/app/_components/container";
import { MainHero } from "@/app/_components/main-hero";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        <MainHero src={"/assets/blog/main/home.webp"} title="mainImage" />
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}
