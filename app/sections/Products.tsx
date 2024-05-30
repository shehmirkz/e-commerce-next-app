import React, { useState } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_PRODUCTS } from '../graphql/queries';
import ProductCard from "../components/ProductCard";
import PrimaryButton from "../components/PrimaryButton";
import AllProducts from "../components/AllProducts";

function Products() {
  const [tagId, setTagId] = useState('');

  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { tagId },
  });

  if (loading) return <p>Loading...</p>;
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
            {data?.tags?.nodes?.map(({ displayTitle, slug, _id }: any) => (
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

        {tagId ? (
          <div className="flex flex-wrap p-[6px] m-4 mt-[40px]">
            {data?.catalogItems &&
              data.catalogItems.edges?.map(({ node }: any) => (
                <div
                  key={node.product._id}
                  className="lg:w-1/4 md:w-1/2 px-2 w-full mb-5 hover:shadow-2xl duration-200 hover:mt-[-10px] py-2"
                >
                  <ProductCard {...node.product} />
                </div>
              ))}
          </div>
        ) : (
          <AllProducts />
        )}
      </section>
    </>
  );
}

export default Products;
