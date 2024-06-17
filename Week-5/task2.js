const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();
app.use(bodyParser.json());

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(100).required(),
});

app.post('/api/user', (req, res) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(422).json({
      error: error.details.map((err) => err.message),
    });
  }

  const userData = req.body;

  res.json({userData, message: 'User data successfully received and validated!' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});