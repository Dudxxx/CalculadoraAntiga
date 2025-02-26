import { Sinal, Digito, Controle, Operação } from "./calculadora"
import CpuA3 from "./cpuA3"
import TelaX0Teste from "./telaX0Teste"


describe("Testando minha calculadora", ()=> {
    let tela: TelaX0Teste = new TelaX0Teste
    let cpu: CpuA3 = new CpuA3(tela)
    cpu.definaTela(tela)

    test("Testar 123+456", ()=>{
        [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaOperacao(Operação.SOMA);
        [Digito.QUATRO, Digito.CINCO, Digito.SEIS].forEach((element) => {
            cpu.recebaDigito(element);
        });
        cpu.recebaControle(Controle.IGUAL);
        expect(tela.digitos).toBe("579")
        expect(tela.sinal).toBe(Sinal.POSITIVO)
        expect(tela.memoria).toBeFalsy()
        expect(tela.error).toBeFalsy()


    })

    test("Testar 12+34+56", ()=>{
        
    })

    test("Testar 12/10", ()=>{
        
    })
})