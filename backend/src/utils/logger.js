// Simple logger utility (helps debugging on EC2)

export const log = (message) => {
  console.log(`[LOG]: ${message}`);
};

export const error = (message) => {
  console.error(`[ERROR]: ${message}`);
};