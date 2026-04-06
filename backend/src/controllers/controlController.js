// // import { v4 as uuid } from "uuid";
// // import { putItem, getItems } from "../services/dynamoService.js";

// // export const createControl = async (req, res) => {
// //   try {
// //     const { title, framework, frequency } = req.body;

// //     const control = {
// //       controlId: uuid(),
// //       title,
// //       framework,
// //       frequency,
// //       createdAt: new Date().toISOString()
// //     };

// //     // await putItem({
// //     //   TableName: process.env.DYNAMO_TABLE_CONTROLS,
// //     //   Item: control
// //     // });
// //     console.log("Saving control (mock):", control);

// //     res.status(201).json(control);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // export const getControls = async (req, res) => {
// //   try {
// //     const controls = await getItems({
// //       TableName: process.env.DYNAMO_TABLE_CONTROLS
// //     });

// //     res.json(controls);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// import { v4 as uuid } from "uuid";

// // TEMP in-memory storage
// let controls = [];

// export const createControl = async (req, res) => {
//   try {
//     const { title, framework, frequency } = req.body;

//     const control = {
//       controlId: uuid(),
//       title,
//       framework,
//       frequency,
//       createdAt: new Date().toISOString()
//     };

//     controls.push(control);

//     res.status(201).json(control);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// };

// export const getControls = async (req, res) => {
//   try {
//     res.json(controls);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: err.message });
//   }
// };

// Controller handles business logic for controls

import { v4 as uuid } from "uuid";

// TEMP: In-memory storage (used instead of database for local testing)
let controls = [];

// Create a new control
export const createControl = async (req, res) => {
  try {
    const { title, framework, frequency } = req.body;

    // Create control object
    const control = {
      controlId: uuid(),
      title,
      framework,
      frequency,
      createdAt: new Date().toISOString()
    };

    // Save to memory
    controls.push(control);

    // Return created control
    res.status(201).json(control);

  } catch (err) {
    console.error("Error creating control:", err);
    res.status(500).json({ error: err.message });
  }
};

// Get all controls
export const getControls = async (req, res) => {
  try {
    res.json(controls);
  } catch (err) {
    console.error("Error fetching controls:", err);
    res.status(500).json({ error: err.message });
  }
};