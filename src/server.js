import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT =  process.env.PORT || 5000;


// get the file path from the URL name of the current module
const __filename = fileURLToPath(import.meta.url);
// get the directory name of the current module
const __dirname = dirname(__filename);

app.get("/",(req, res) => {
    res.sendFile(path)
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);