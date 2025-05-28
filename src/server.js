import express from 'express';
import path from 'path';

const app = express();
const PORT =  process.env.PORT || 5000;

app.get("/",(req, res) => {
    res.sendFile(path)
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);