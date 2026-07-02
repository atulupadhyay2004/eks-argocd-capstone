const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    project: 'EKS ArgoCD Capstone',
    author: 'Atul Upadhyay',
    github: 'github.com/atulupadhyay2004',
    version: process.env.APP_VERSION || '1.0.0',
    build: process.env.BUILD_NUMBER || 'local',
    pod: process.env.HOSTNAME || 'unknown',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
