import express from "express";

const app = express();

app.listen(4000, () => console.log("servidor online"));

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

app.get("/holidays", (res, req) => {
    req.send(holidays);
});

app.get("/is-today-holiday", (req, res) => {
    const today = (new Date()).toLocaleDateString('en-US');
    console.log(today);
    for (let holiday of holidays) {
        if (today == holiday.date) {
            res.send(`Sim, hoje é ${holiday.name}`);
        }
    }
    res.send("Não, hoje não é feriado");
});

app.get("/holidays/:month", (req, res) => {
    const month = parseInt(req.params.month);
    const lst = [];
    for (let holiday of holidays) {
        if (month === (new Date(holiday.date)).getMonth() + 1)
            lst.push(holiday);
    }
    res.send(lst);
});