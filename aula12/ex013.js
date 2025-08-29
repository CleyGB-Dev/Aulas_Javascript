var idade = 25
console.log(`Você tem ${idade} anos.`)
switch (true) {
    case idade < 0:
        console.log('Você não existe ainda')
        break
    case idade <= 3:
        console.log('Você é um Bebê')
        break
    case idade <= 12:
        console.log('Você é uma Criança')
        break
    case idade < 18:
        console.log('Você é um Adolescente')
        break
    case idade >= 18 && idade < 60:
        console.log('Você é um Adulto')
        break
    case idade >= 60 && idade <= 100:
        console.log('Você é um Idoso')
        break
    case idade > 100:
        console.log('Você é um Centenário')
        break

    default:
        console.log('Idade inválida')
        break
}