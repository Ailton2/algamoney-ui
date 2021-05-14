export class Pessoa{
    id:number;
    nome:string;
    logradouro:string;
    numero:string;
    cep:string;
    bairro:string;
    complemento:string;
    cidade:string;
    estado:string;
    ativo:boolean=true;
   }
   
   
   export class Categoria{
       id:number;
       nome:string;
   }

export class Lancamento{
   id:number;
   tipo ='RECEITA';
   descricao: string;
   dataVencimento:Date;
   dataPagamento:Date;
   valor:number;
   observacao:string;
   pessoa=new Pessoa();
   categoria = new Categoria();
}
