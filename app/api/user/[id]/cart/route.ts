import { products } from "@/app/product-data";
import { NextRequest } from "next/server";

type ShoppingCart = Record<string, string[]>;

const carts: ShoppingCart = {
  "1": ["123", "234"],
  "2": ["345"],
  "3": ["456"],
};

type Params = {
  id: string;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const userId = params.id;
  const productIds = carts[userId];
  if (productIds === undefined) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const productCart = productIds.map((id) => products.find((p) => p.id === id));

  return new Response(JSON.stringify(productCart), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
