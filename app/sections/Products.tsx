import React, { useState, useEffect } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

function Products() {
  const [tagId, setTagId] = useState('');
  const [defaultProducts, setDefaultProducts] = useState([]);

  useEffect(() => {

    setTagId('');

  }, []);


  const GET_PRODUCTS = gql`
    query GetProducts($tagId: ID!) {
      tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
        nodes {
          name
          displayTitle
          slug
          _id
        }
      }
      catalogItems(
        shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]
        tagIds: [$tagId]
      ) {
        edges {
          node {
            ... on CatalogItemProduct {
              product {
                title
                description
                _id
                variants {
                  _id
                  title
                  media {
                    URLs {
                      small
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { tagId, shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="] },
    onCompleted: (data) => {
      if (!tagId) {
        // Set default products when query is completed and tagId is empty
        setDefaultProducts(data.catalogItems.edges);
      }
    }
  });

  

  console.log("Full Products:", data ? data.catalogItems.edges : null); // Check the full products in console

  if (loading && defaultProducts.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="my-[40px] mx-auto container">
        <div className="flex lg:justify-between">
          <div className="flex items-center gap-[30px]">
            <Link
              href="#all-products"
              scroll={false}
              className="font-bold text-[#1E2832] text-[16px]"
            >
              All Products
            </Link>
            {data.tags.nodes.map(({ displayTitle, slug, _id }: any) => (
              <Link
                key={_id}
                onClick={() => setTagId(_id)}
                scroll={false}
                href={{ pathname: "/", query: { tag: slug } }}
                className="text-[#1E2832] text-[16px]"
              >
                {displayTitle}
              </Link>
            ))}
          </div>
          <PrimaryButton
            name="filter"
            class="bg-[#1e2832] text-white"
            iconItem={faFilter}
          />
        </div>

        <div className="flex flex-wrap p-[6px] m-4 mt-[40px]">
          {(tagId ? data.catalogItems.edges : defaultProducts).map(({ node }: any) => (
            <div
              key={node.product._id}
              className="lg:w-1/4 md:w-1/2 px-2 w-full mb-5 hover:shadow-2xl duration-200 hover:mt-[-10px] py-2"
            >
              <ProductCard {...node.product} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
