import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUsPage() {
  return (
    <Layout title="About Us">
      <p>찬도야 미안해에 오신걸 환영합니다.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
