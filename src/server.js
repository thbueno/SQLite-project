import express from 'express';

const app = express();
const PORT =  process.env.PORT || 5000;

console.log("Hello, Earth!");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);