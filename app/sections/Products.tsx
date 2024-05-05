import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../components/ProductCard";
import { productCardData } from "../data";

import { useQuery, gql } from "@apollo/client";

function Products() {
  const GET_NAV_ITEMS = gql`
    query {
      tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
        nodes {
          name
          displayTitle
          slug
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_NAV_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // console.log(data.tags)
  return (
    <>
      <section className="my-[40px] mx-auto container">
        <div className="flex lg:justify-between">
          <div className="flex items-center gap-[30px]">

            <button className="font-bold  text-[#1E2832] text-[16px]">
              All Products
            </button>

            {data.tags.nodes.map(({ name, displayTitle, slug }: any) => (
              <button className="text-[#1E2832] text-[16px]">{displayTitle}</button>
            ))}
          </div>

          <PrimaryButton
            name="filter"
            class="bg-[#1e2832] text-white"
            iconItem={faFilter}
          />
        </div>
        <div className="flex flex-wrap p-[6px] m-4 mt-[40px]">
          {productCardData.map((cardData) => (
            <div
              className="lg:w-1/4 md:w-1/2 px-2 w-full mb-5 hover:shadow-2xl duration-200 hover:mt-[-10px] py-2"
              key={cardData.id}
            >
              <ProductCard {...cardData} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;















// <div>
//   {data.tags.nodes.map(({ name, displayTitle, slug }: any) => (
//     <div key={name}>
//       <h3>{name}</h3>
//       <img
//         width="400"
//         height="250"
//         alt="location-reference"
//         src={`${slug}`}
//       />
//       <br />
//       <b>About this location:</b>
//       <p>{displayTitle}</p>
//       <br />
//     </div>
//   ))}
// </div>

// return (

{
  /* <section className="my-[40px] mx-auto container">
  <div className="flex lg:justify-between">
    <div className="flex items-center gap-[30px]">
      <button className="font-bold  text-[#1E2832] text-[16px]">
        All Products
      </button>
      <button className="text-[#1E2832] text-[16px]">t-shirt</button>
      <button className="text-[#1E2832] text-[16px]">Hoodies</button>
      <button className="text-[#1E2832] text-[16px]">Jacket</button>
    </div>
    <PrimaryButton
      name="filter"
      class="bg-[#1e2832] text-white"
      iconItem={faFilter}
    />
  </div>
  <div className="flex flex-wrap p-[6px] m-4 mt-[40px]">
    {productCardData.map((cardData) => (
      <div
        className="lg:w-1/4 md:w-1/2 px-2 w-full mb-5 hover:shadow-2xl duration-200 hover:mt-[-10px] py-2"
        key={cardData.id}
      >
        <ProductCard {...cardData} />
      </div>
    ))}
  </div>
</section>; */
}

// )
