export class Pessoa{
    id:number;
    nome:string;
    logradouro:string;
    numero:string;
    cep:string;
    bairro:string;
    cidade:string;
    estado:string;
    ativo:boolean=true;
   }
   
   export class Categoria{
       id:number;
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
