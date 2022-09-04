import {Router} from "express";
const router = Router();

import * as categoriesController from "../controllers/categories.controllers";


router.post('/', categoriesController.createCategories);
router.get('/', categoriesController.getCategories);
router.get('/:id', categoriesController.filterCategories);
router.put('/:id', categoriesController.updateCategories);
router.delete('/:id', categoriesController.deleteCategories);

export default router;