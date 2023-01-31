//Import dependencies
import express from "express";
import { Create, LogDeleteUser, Read, ReadWithID, UpdateUser, AuthUser } from "../controllers/user.controller.js"

//Create routes
const router = express.Router();

/**
 * Subscribe create user API
 */
router.post('/create-user', async (req, res)=> {
    await Create(req, res);
}); 

/**
 * Subscribe read users API
 */
router.get('/users', async (req, res) => {
    await Read(req, res);
});

/**
 * Subscribe read users with id API
 */
router.post('/read-user', async (req, res) => {
    await ReadWithID(req, res);
});

/**
 * Subscribe update user API
 */
router.post('/update-user', async (req, res) => {
    await UpdateUser(req, res);
});

/**
 * Subscribe logical delete user API
 */
router.post('/delete-user', async (req, res) => {
    await LogDeleteUser(req, res);
});

/**
 * Subscribe authentication user API
 */
router.post('/auth-user', async (req, res) => {
    await AuthUser(req, res);
});

export default router