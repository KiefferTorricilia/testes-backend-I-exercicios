import { exercicio1 } from "../src/exercicio1";

describe("Tesde do exercício 1", () => {
    test("Deve retornar o parâmetro passado em string no formato number", () => {
        const result = exercicio1("20")

        expect(result).toBe(20)
    })
})