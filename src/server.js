import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();
const PORT =  process.env.PORT || 5000;


// get the file path from the URL name of the current module
const __filename = fileURLToPath(import.meta.url);
// get the directory name of the current module
const __dirname = dirname(__filename);

// middleware 
app.use(express.json());
// Serves the  HTML file from the public directory
app.use(express.static(path.join(__dirname, '../public')));



// Serving up the HTML file from the public directory
app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, 'public','index.html'));
})

// Routes
app.use('/auth', authRoutes)
app.use('/todos',authMiddleware, todoRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);