import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT =  process.env.PORT || 5000;


// get the file path from the URL name of the current module
const __filename = fileURLToPath(import.meta.url);
// get the directory name of the current module
const __dirname = dirname(__filename);

// Serves the  HTML file from the public directory
app.use(express.static(path.join(__dirname, 'public')));


// Serving up the HTML file from the public directory
app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);