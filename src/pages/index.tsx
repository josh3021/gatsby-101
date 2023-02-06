import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="찬도야미안해 전시회에 오신 걸 환영합니다! 👋🏻">
      <section className="grid">
        {data.allContentfulStickerPack.nodes.map((node, index) => (
          <article key={index}>
            <GatsbyImage
              image={getImage(node.preview?.gatsbyImageData!)!}
              alt={node.name!}
            />
            <Link to={`products/${node.id}`}>
              <h1>{node.name}</h1>
            </Link>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        preview {
          gatsbyImageData(height: 250, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Index" />;
