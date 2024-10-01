import ProdutoItem from "@/components/produto/produtoItem";
import { produtos } from "@/core";

export default function Home() {
  return (
    <>
      <ProdutoItem produto = { produtos[0] } />
      <ProdutoItem produto = { produtos[1] } />
      <ProdutoItem produto = { produtos[2] } />
      <ProdutoItem produto = { produtos[3] } />
      <ProdutoItem produto = { produtos[4] } />
      <ProdutoItem produto = { produtos[5] } />
    </>
  )
}
