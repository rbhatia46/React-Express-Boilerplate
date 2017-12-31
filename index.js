const express = require('express');
const app = express();

app.get('/api/customers',(req,res)=>{
  const customers = [
    {id:1 , firstName:'John', lastName: 'Doe'},
    {id:2 , firstName:'Rahul', lastName: 'Bhatia'},
    {id:3 , firstName:'Mark', lastName: 'Zuckerberg'}
  ];

  res.json(customers);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
