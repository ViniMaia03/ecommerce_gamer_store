import { Produto, produtos } from "@/core"
import Link from "next/link"

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const {produto} = props
    return(
        <Link href={`/produto/${produto.id}`}>{props.produto.nome}</Link>
    )
}