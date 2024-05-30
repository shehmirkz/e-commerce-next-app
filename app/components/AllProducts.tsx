import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useQuery } from "@apollo/client";
import productImage from "../../public/Assets/images/product_4.png";
import { GET_ALL_PRODUCTS } from '../graphql/queries';

interface Product {
    _id: string;
    title: string;
    description: string;
    pricing: { displayPrice: string }[];
}

const AllProducts = () => {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
      variables: {
        shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="],
      },
    });

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error loading data...</p>;

    return (
      <div className="container mx-auto flex flex-wrap">
        {data.catalogItems.edges.map(({ node }: { node: { product: Product } }) => (
          <div key={node.product._id} className="relative m-5 flex w-full max-w-[270px] flex-col overflow-hidden bg-white hover:shadow-md">
            <Link className="relative flex overflow-hidden " href="#">
              <Image className="object-cover" src={productImage} alt="product image" />
            </Link>
            <div className="mt-4 px-3 pb-5">
              <Link href="#">
                <h5 className="text-sm tracking-tight font-bold font-sans">{node.product.title}</h5>
              </Link>
              <div className="mt-2">
                <h5 className="text-sm tracking-tight text-right font-sans ml-auto">{node.product.pricing[0].displayPrice}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default AllProducts;
