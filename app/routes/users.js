const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Atul Upadhyay', role: 'DevOps Engineer' },
  { id: 2, name: 'John Doe', role: 'Backend Developer' },
  { id: 3, name: 'Jane Smith', role: 'Cloud Architect' }
];

router.get('/', (req, res) => {
  res.json({
    users,
    total: users.length,
    timestamp: new Date().toISOString()
  });
});

router.get('/:id', (req, res) => {
  const user = users.find(
    u => u.id === parseInt(req.params.id)
  );
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

router.post('/', (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({
      error: 'Name and role required'
    });
  }
  const newUser = {
    id: users.length + 1,
    name,
    role
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
