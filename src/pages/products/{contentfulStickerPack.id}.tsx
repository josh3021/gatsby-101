import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IProductDetailProps {
  data: Queries.ProductQuery;
}

export default function ProductDetail({ data }: IProductDetailProps) {
  const image = getImage(
    data.contentfulStickerPack?.preview?.gatsbyImageData!
  )!;
  return (
    <Layout title={data.contentfulStickerPack?.name!}>
      <>
        <GatsbyImage image={image} alt={data.contentfulStickerPack?.name!} />
        <h2>{data.contentfulStickerPack?.name}</h2>
      </>
    </Layout>
  );
}

export const query = graphql`
  query Product($id: String) {
    contentfulStickerPack(id: { eq: $id }) {
      name
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;

export const Head = ({ data }: IProductDetailProps) => (
  <Seo title={data.contentfulStickerPack?.name!} />
);
