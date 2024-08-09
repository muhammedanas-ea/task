import { imageUpload } from "../utils/cloudinary.js";
import db from "../config/databace.js"; // Assuming you are already using the promise version of mysql2

export const AddserviceDetails = async (req, res) => {
  try {
    const image = await imageUpload(req.files.image);

    const sql =
      "INSERT INTO services (service_name, description, image_url) VALUES (?, ?, ?)";

    db.query(
      sql,
      [req.body.name, req.body.description, image.url],
      (err, results) => {
        if (err) {
          return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const serviceDetails = async (req, res) => {
  try {
    db.query("SELECT * FROM services", (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      res.status(200).json({
        success: true,
        data,
      });
    });
  } catch (err) {
    console.log(err);
  }
};
