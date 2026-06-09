const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

exports.seed = async function (knex) {
    await knex("users").del();

    const adminPassword = await bcrypt.hash("admin123", 10);

    await knex("users").insert([
        {
            user_id: uuidv4(),
            username: "Mas Bahlil Ganteng",
            email: "bahlil@sppg.com",
            password: adminPassword,
            role: "Admin",
            status: "Active",
            created_at: knex.fn.now(),
            last_login: knex.fn.now(),
        }
    ]);
};
