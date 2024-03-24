import app from './app'; // Importation correcte de l'export par défaut
import db from './db';

const port = process.env.PORT || 3030; // Use the port defined in the environment variables or 3000

// //check if dbb is connected 
// db.select(1).then(() => console.log('Database connected')).catch((err) => console.error(err)); // Vérifiez si la base de données est connectée
//check migration 
db.migrate.latest().then(() => console.log('Database migrated')).catch((err) => console.error(err)); // Vérifiez si la migration est effectuée

app.listen(port, () => console.log(`Server listening on port ${port}`)); // Start the server on the specified port
