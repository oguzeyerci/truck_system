const { pool } = require("../adapters/database/postgresql")

exports.getVehicles = async (req, res) => {
    // try {
    //     const results = await pool.query("select * from vehicles");
    //     const vehicles = results.rows;
    //
    //     res.status(200).json(vehicles);
    // } catch (error) {
    //     res.status(401).send(error);
    // }
    console.log(31)
};