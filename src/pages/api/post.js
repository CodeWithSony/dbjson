export default function handler(req, res) {
  res.status(200).json({ name: "John Doe", age: 23, car: "BMW", id: 1 });
}
