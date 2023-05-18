// ------------ Sheets Do tutorial ------------
// const sheetID = "15LqPE57_AwRQS0WxsxYJqyJjTOp8da6Nb5cGogbhXV4"
// ------------ Sheets De teste ------------ 
const sheetID = "1UzHmE8h8uFmc0i0eWyaCBqzDiMkBqVQGG6ozYf93Q0E"

const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'teste'
const query = encodeURIComponent('Select *');
const url = `${base}$sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded', init);

function init() {
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        const jsData = JSON.parse(rep.substr(47).slice(0,-2))
        const colz = [];

        console.log(jsData)

        jsData.table.cols.forEach((heading)=>{
            console.log(heading)
            if (heading.label) {
                colz.push(heading.label.toLowerCase().replace(/\s/g,''));
            }
        })

        jsData.table.rows.forEach((main)=>{
            const row = {};
            colz.forEach(( ele, ind )=>{
                // console.log(ind);
                // row[ele] = (main.c[ind] != null) ? main.c[ind].v : ''
            })
            data.push(row)
        })
        console.log(data)
    })
}