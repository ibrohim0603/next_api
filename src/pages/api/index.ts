// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/products.json";

type Data = {
  products?: {
    id: string;
    name: string;
    title: string;
    brand: string;
    price: number;
    color: string;
    country: string;
    size: number;
    img: string;
  }[];
  made?: { country: string; size: number; color: string }[];
  total?: number;
  product?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let prod = data.products;
  let fil = data.made;
  if (req.method == "GET") {
    res.status(200).json({ products: prod, total: prod.length, made: fil });
  } else if (req.method == "POST") {
    prod.push({ ...req.body, id: `${prod.length + 1}` });
    res
      .status(201)
      .json({ product: { ...req.body, id: `${prod.length + 1}` } });
  }
}
