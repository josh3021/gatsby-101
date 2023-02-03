import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: JSX.Element;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title={data.mdx?.frontmatter?.title!}>
      <>
        <GatsbyImage image={image!} alt={data.mdx?.frontmatter?.title!} />
        <div>{children}</div>
      </>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      excerpt(pruneLength: 25)
      frontmatter {
        title
        author
        category
        date
        slug
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: TRACED_SVG)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
