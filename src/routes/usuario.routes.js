import {getConnection} from "./../database/database"
import {Router} from "express"
import {methods as userController} from "./../controllers/usuario";
const cors = require('cors');
//cors establece una conexion bidirecional entre api y


const router = Router();
router.use(cors());
router.get("/api/usuario", userController.getUsuarios);
router.get("/api/usuario/:id", userController.getUsuario);
router.post("/api/login", userController.getUsuario);
router.post("/api/add", userController.addUsuario);
router.delete("/api/usuario/:id", userController.delUsuario);
router.put("/api/usuario",userController.updateUsuario);

export default router;