
const express = require('express');

const app = express();


app.use(express.json());


app.get("/teams", (request, response)=> {

    const query = request.query;
    console.log(query);

  return response.json(["Botafogo","Goiás","Santos","Redbull","Palmeiras","Chapecoense"])
});

app.post("/teams", (request, response)=> {

    const body = request.body;
    console.log(body);

return response.json(["Botafogo","Goiás","Santos","Redbull","Palmeiras","Chapecoense","Atlético-MG","Coritiba"])
});

app.put("/teams/:id", (request, response)=> {

    const params = request.params;
    console.log(params);

return response.json(["Botafogo","Bahia","Santos","Corinthians","Palmeiras","Náutico","Atlético-MG","Grêmio"])    

});

app.patch("/teams/:id", (request, response)=> {

    return response.json(["Palmeiras","Náutico","Atlético-MG","Grêmio"])    

});

app.delete("/teams/:id", (request, response)=> {

    return response.json(["Atlético-MG","Grêmio"])    

});

app.listen(3333);