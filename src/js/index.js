import { Expense } from "./classes/Expense";
import { currencyFormatter } from "./utils/currencyFormatter";

/*
* Retorna objeto para popularmos com as despesas que recebemos da tabela
*/
function getExpensesObject() {
    const expensesByMonth = {
        "Janeiro": 0,
        "Fevereiro": 0,
        "Março": 0,
        "Abril": 0,
        "Maio": 0,
        "Junho": 0,
        "Julho": 0,
        "Agosto": 0,
        "Setembro": 0,
        "Outubro": 0,
        "Novembro": 0,
        "Dezembro": 0,
    }
    return expensesByMonth;
}

/*
* Através da Tbody da tabela, cria-se uma HTMLCollection com todas as Rows disponíveis
*/
function getTableRows() {
    const tbody = document.getElementById("tbody_fatura");
    const tbodyRows = tbody.getElementsByTagName("tr");
    return tbodyRows;
}

/*
* Pega as informações da célula da tabela e para cada row instancia-se uma classe Expense com essas informações
* O retorno é um Array<Expense>
*/
function getExpenses() {
    const monthlyExpenses = [];
    const tableRows = getTableRows();
    for (let i = 0; i < tableRows.length; i++) {
        let innerData = tableRows[i].cells;
        let dataArray = [];
        for (let j = 0; j < innerData.length; j++) {
            dataArray.push(innerData[j].innerText);
        }
        const monthlyExpense = new Expense(...dataArray);
        monthlyExpenses.push(monthlyExpense);
    }
    return monthlyExpenses;
}

/*
* Preenche o objeto expensesByMonth através de uma iteração por todas as instancias de Expense,
* que através do mês pelo nome, os valores são incrementados
*/
function sortExpensesByMonth() {
    const allExpenses = getExpenses();
    const expensesByMonth = getExpensesObject();
    
    allExpenses.forEach(expense => {
        expensesByMonth[expense.GetMonthByName()] += expense.value;  
    })
    return expensesByMonth;
}

/*
* Pega-se a tbody da nova tabela requerida, instancia-se a formatação de moeda e cria-se as novas
* rows para todos os valores que são maiores que zero, fazendo com que na tabela só apareçam os meses que tiveram lançamentos
*/
function createMonthlyExpenseTable() {
    const newTableBody = document.getElementById("tbody_consolidadoMes");
    const monthlyExpenses = sortExpensesByMonth();
    let formatter = currencyFormatter();

    for (let month in monthlyExpenses){
        if (monthlyExpenses[month] > 0) {
            newTableBody.innerHTML += `
                <tr>
                    <td>${month}</td>
                    <td>${formatter.format(monthlyExpenses[month])}</td>
                </tr>
            `
        }
    }
}

/*
* E por fim, colocamos uma escuta para que quando o DOM terminar de carregar, toda a lógica da nova tabela via JavaScript seja realizada.
*/
document.addEventListener('DOMContentLoaded', function() {
    createMonthlyExpenseTable();
})