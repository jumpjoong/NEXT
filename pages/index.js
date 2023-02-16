import HeadMeta from "@/pages/src/HeadMeta";
import Layout from "@/pages/src/Layout";
import Basic from "@/pages/src/Basic";


export default function Home() {
  return (
    <>
    <Layout>
      <HeadMeta title = "index파일" />
      <Basic />
    </Layout>
    </>
  )
}
