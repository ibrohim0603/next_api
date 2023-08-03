import React, { useEffect, useState } from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";

interface Products {
  products: Det[];
}
interface Det {
  id: string;
  name: string;
  title: string;
  brand: string;
  price: number;
  color: string;
  country: string;
  size: number;
  img: string;
}

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://api.alquran.cloud/v1/surah`);
  const repo = await res.json();
  console.log(repo);

  const paths = repo?.data?.map((p: any) => {
    return {
      params: {
        id: `${p?.number}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { params } = context;

  return { props: { params } };
};

export default function Single({ params }: any) {
  const id = params.id;

  const [mal, setMal] = useState<Products | null>(null);
  console.log(mal);

  useEffect(() => {
    const data = fetch(`http://localhost:3000/api/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMal(data);
      });
  }, [id]);

  return <div>Single</div>;
}
