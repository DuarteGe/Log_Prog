Algoritmo "PesoIdeal"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 22/11/2022
Var
sexo: caracter
h, pesoid: real

Inicio
escreval("Sexo f ou m?")
leia(sexo)
escreval("E qual a sua altura?")
leia(h)

se (sexo = "m" ) entao
   pesoid <- 72.7*h-58
   senao
   pesoid <- 62.1*h-44.7

fimse

escreval("Seu peso ideal é: ", pesoid)



Fimalgoritmo