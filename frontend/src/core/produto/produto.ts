import Especificacoes from "./especificacoes"
import Precificacao from "./precificacao"

export default interface Produto extends Precificacao {
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    videoReview: string
    nota: number
    tags: string[]
    especificacoes: Especificacoes
}