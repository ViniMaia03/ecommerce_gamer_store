import { produtos } from "@/core"

export default function PaginaProdutos(props: any) {
    const id = +props.params.id
    const produto = produtos.find(p => p.id === id)

    return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}